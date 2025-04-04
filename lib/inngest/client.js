import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "careercoach", // Unique app ID
  name: "Career Coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
