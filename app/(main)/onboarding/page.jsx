import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from 'next/navigation';
import OnboardingForm from "./_components/onboarding_form";

// i have created the form component separate because that will be the client component and here api call
// is executing and if that is executed on client side too then that will be slow
const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
