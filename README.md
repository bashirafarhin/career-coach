# AI Career Coach

## Overview

AI Career Coach is a platform designed to help individuals advance their careers through personalized guidance, interview preparation, and AI-powered tools. The platform offers features such as an intelligent resume builder, a cover letter generator, and an adaptive interview preparation system, all tailored to specific industries and skills.

## Features

-   **AI-Powered Career Guidance:** Personalized career advice and insights powered by advanced AI technology.
-   **Interview Preparation:** Practice with role-specific questions and get instant feedback to improve your performance.
-   **Industry Insights:** Stay ahead with real-time industry trends, salary data, and market analysis.
-   **Smart Resume Creation:** Generate ATS-optimized resumes with AI assistance.
-   **Cover Letter Generation:** Create tailored cover letters for job applications.
-   **Progress Tracking:** Monitor improvements with detailed performance analytics.

## Technologies Used

-   **Next.js:** A React framework for building web applications. ([next.config.mjs](next.config.mjs))
-   **React:** A JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for styling the application. ([tailwind.config.mjs](tailwind.config.mjs), [app/globals.css](app/globals.css))
-   **Prisma:** A modern database toolkit and ORM. ([prisma/migrations/20250403055702_create_models/migration.sql](prisma/migrations/20250403055702_create_models/migration.sql), [lib/prisma.js](lib/prisma.js))
-   **Clerk:** Authentication and user management. ([middleware.js](middleware.js), [app/(auth)/sign-up/[[...sign-up]]/page.jsx](app/(auth)/sign-up/[[...sign-up]]/page.jsx))
-   **Google Gemini API:** Used for AI-powered content generation and industry insights. ([actions/dashboard.js](actions/dashboard.js), [actions/resume.js](actions/resume.js), [actions/cover-letter.js](actions/cover-letter.js), [actions/interview.js](actions/interview.js))
-   **Zod:** For schema validation. ([app/lib/schema.js](app/lib/schema.js))
-   **React Hook Form:** For form management.
-   **Sonner:** For toast notifications.
-   **Lucide React:** For icons.
-   **UIW React Markdown Editor:** For Markdown editing and preview. ([app/(main)/ai-cover-letter/_components/cover-letter-preview.jsx](app/(main)/ai-cover-letter/_components/cover-letter-preview.jsx), [app/(main)/resume/_components/resume-builder.jsx](app/(main)/resume/_components/resume-builder.jsx))
-   **HTML2PDF:** For generating PDF documents. ([app/(main)/resume/_components/resume-builder.jsx](app/(main)/resume/_components/resume-builder.jsx))
-   **Inngest:** Background job processing. ([lib/inngest/client.js](lib/inngest/client.js), [lib/inngest/functions.js](lib/inngest/functions.js))