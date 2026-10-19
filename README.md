# NabLabs website

Landing page for NabLabs, an AI solutions and full-stack web development agency.
Built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Almost all text, pricing and links live in one file: `src/config/site.ts`.
Change prices in the `aiPlans` and `webPlans` lists. Every price is shown as a starting price in USD.

## Booking (Calendly)

All "Book a Call" buttons open one shared popup, defined in `src/components/BookingProvider.tsx`.

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CALENDLY_URL` to your Calendly event link.
2. On Vercel, open Project, Settings, Environment Variables, add `NEXT_PUBLIC_CALENDLY_URL`, then redeploy.

If the variable is missing or still contains the placeholder, the popup shows setup instructions instead of a calendar.

## Optional settings

`NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_X_URL` and `NEXT_PUBLIC_SITE_URL`.
Leave them empty until real values exist. The site hides empty links and does not invent any.

## Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Deploy

Push to the `main` branch on GitHub. Vercel builds every push automatically.
Pushes to `main` become production deployments. Other branches get preview deployments.
