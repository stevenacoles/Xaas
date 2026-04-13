# FedXaaS — Federal Execution-as-a-Service

Premium landing page and invite-only waitlist system for FedXaaS, a strategic advisory firm helping software company executives and investors enter and scale in the U.S. federal market.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Backend:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page (all sections)
│   ├── globals.css         # Global styles and Tailwind config
│   └── api/waitlist/
│       └── route.ts        # Waitlist submission API
├── components/
│   ├── Navigation.tsx      # Sticky nav with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── DiagnosticHook.tsx  # CEO-level diagnostic hook
│   ├── AudienceSplit.tsx   # Executive vs Investor split
│   ├── ProblemSection.tsx  # Problem statement
│   ├── CostOfFailure.tsx   # Cost of failure breakdown
│   ├── WhatWeDo.tsx        # Services overview
│   ├── DiagnosticSection.tsx # 10-Day Diagnostic details
│   ├── PositioningSection.tsx # Capital allocation positioning
│   ├── WhyFedXaaS.tsx      # Differentiators
│   ├── CredibilitySection.tsx # Proof point placeholders
│   ├── WaitlistForm.tsx    # Invite-only access request form
│   ├── FinalCTA.tsx        # Closing CTA
│   └── Footer.tsx          # Site footer
├── lib/
│   └── supabase.ts         # Supabase client
├── schema.sql              # Database schema
└── .env.example            # Environment variable template
```

## Setup

### 1. Clone and Install

```bash
git clone <repo-url>
cd Xaas
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `schema.sql`
3. Copy your project URL and anon key from **Settings > API**

### 3. Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

The site will be live on your Vercel domain.

## Customization

- **Credibility section:** Replace placeholder content in `components/CredibilitySection.tsx` with real founder bio, logos, and proof points
- **Contact info:** Update email and LinkedIn URL in `components/Footer.tsx`
- **OG image:** Add an `og-image.png` (1200x630) to the `public/` directory
- **Colors:** Adjust the palette in `app/globals.css` under `@theme`
