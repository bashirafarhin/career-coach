"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(
      async (txn) => {
        // find if the industry exists
        let industryInsight = await txn.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);
              const industryInsight = await db.industryInsight.create({
                data: {
                  industry: data.industry,
                  ...insights,
                  nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
                },
              });
              return industryInsight
        }

        // update the user
        const updatedUser = await txn.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updatedUser, industryInsight };
      },
      { timeout: 10000 }
    );
    return { success: true, ...result };
  } catch (error) {
    console.log(error);
    // console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile" + error.message);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });
    return user.industry ? true : false;
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
