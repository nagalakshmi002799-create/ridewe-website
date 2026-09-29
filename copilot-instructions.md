# RideWe Tours & Travels — Copilot Instructions

## Project

RideWe Tours & Travels is a modern travel and tourist vehicle
website based in Madurai, Tamil Nadu, India.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Motion
- React Hook Form
- Zod

## Engineering principles

- Use TypeScript strictly.
- Prefer reusable components.
- Keep business data separate from presentation.
- Keep services separate from UI.
- Avoid duplicated logic.
- Avoid unnecessary dependencies.
- Prefer composition over large monolithic components.
- Keep components small and focused.
- Use semantic HTML.
- Maintain accessibility.
- Support mobile-first responsive design.
- Respect prefers-reduced-motion.
- Do not expose secrets in frontend code.

## Architecture

Business data belongs in src/data.

Reusable UI belongs in src/components.

Pages belong in src/pages.

External/business integrations belong in src/services.

Shared types belong in src/types.

Utility functions belong in src/utils.

## Business rules

Never invent:

- customer reviews
- awards
- certifications
- years of experience
- office addresses
- fleet size
- guaranteed prices
- unsupported claims

## WhatsApp

RideWe WhatsApp:
+91 98433 22446

WhatsApp URL:
https://wa.me/919843322446

## Phone

+91 98433 22446

## Branding

Business:
RideWe Tours & Travels

Tagline:
Explore More. Travel Better.

Primary location:
Madurai, Tamil Nadu, India

## Pricing

Treat all displayed vehicle tariffs as configurable business data.

Never hardcode tariff values inside JSX.

Fare calculations must clearly be presented as estimates.

## AI

Never put LLM API keys in client-side code.

AI functionality must be accessed through a service abstraction.

The initial implementation may use a mock provider.

## Data persistence

Do not directly manipulate XLSX files from browser code.

Use a service abstraction for enquiries.

The initial implementation can use a mock/local implementation.

Future implementations may use Google Sheets or a REST API/database.

## Code quality

Before considering a task complete:

1. Run TypeScript checks.
2. Run lint.
3. Run build.
4. Fix errors.
5. Check responsive behavior.
6. Check accessibility.
7. Check broken links.
8. Check that secrets are not exposed.

Do not make unrelated changes.