# Sickle & Torch - Project Context

## Project Overview
**Sickle & Torch** is a landing page for a tabletop RPG rules expansion compatible with 5e, Shadowdark, and Dungeon Crawl Classics. The project is built with **Next.js 16** (App Router) and deployed via **Firebase Hosting** as a static site.

## Tech Stack & Architecture
- **Framework**: Next.js 16 (App Router)
- **Deployment**: Static Export (`output: 'export'`) to Firebase Hosting.
- **Styling**: Tailwind CSS v4 (using `@theme` in `globals.css`).
- **Linting/Formatting**: Biome (replaces ESLint/Prettier).
- **Language**: TypeScript.
- **Fonts**:
  - Primary (Body): Cambria (local).
  - Display (Headings): OldNewspaperTypes (local).
- **Libraries**:
  - `Tone.js`: Available for audio (not yet used).
  - `Zod`: Available for validation (not yet used).

## Critical Development Guidelines

### 1. Static Export Limitations
- This project is configured for `output: 'export'`.
- **No Server-Side Rendering (SSR)** or API routes are available.
- All data fetching must happen at build time or client-side.
- Image optimization is disabled (`unoptimized: true` in `next.config.ts`).
- **Action**: Use standard `<img>` tags instead of Next.js `<Image>` component unless you specifically configure a loader.

### 2. Styling (Tailwind v4)
- Custom theme variables are defined in `src/app/globals.css`.
- **Colors**:
  - `var(--color-void-bg)` / `var(--color-void-panel)`
  - `var(--color-gold-primary)` / `var(--color-gold-dim)`
  - `var(--color-text-main)` / `var(--color-text-muted)`
- **Fonts**:
  - `font-old-newspaper` class applies OldNewspaperTypes.
  - Default font is Cambria.

### 3. Code Quality (Biome)
- Use **Biome** for all linting and formatting.
- **Command**: `npm run check` (runs both lint and format).
- **Rules**:
  - Indentation: 4 spaces.
  - Quotes: Single quotes.
  - Semicolons: Always.

## Development Workflow

### Commands
- **Start Dev Server**: `npm run dev` (http://localhost:3000)
- **Lint & Format**: `npm run check` (Auto-fixes issues)
- **Build Production**: `npm run build` (Outputs to `/out`)
- **Preview Production**: `npm run start`

### Directory Structure
```
src/
├── app/
│   ├── fonts/          # Local font files (Cambria, OldNewspaperTypes)
│   ├── globals.css     # Global styles & Tailwind theme
│   ├── layout.tsx      # Root layout (Metadata, Fonts)
│   └── page.tsx        # Main Landing Page (Single scrollable view)
├── components/         # Reusable UI components
│   ├── AdventureCard.tsx
│   ├── AnnouncementBanner.tsx
│   ├── Divider.tsx
│   ├── Headline.tsx
│   ├── InfoCard.tsx
│   ├── KickstarterModule.tsx
│   ├── Section.tsx
│   ├── SectionHeader.tsx
│   ├── SocialFollow.tsx
│   ├── SubscribeForm.tsx
│   └── SystemCard.tsx
└── fonts/              # Global font assets
public/                 # Static assets (images, fonts)
```

## AI Agent Behavior Rules
- **Shell Commands**: ABSOLUTELY NO shell command execution of ANY KIND (git, npm, system, build, etc.) is permitted unless explicitly requested by the user. Do not run `npm run build` or `npm run check` unless specifically asked.
- **File Editing**: Always read the file first. Maintain the existing code style (4 spaces, single quotes).
- **Static Export**: Always remember that this is a static site (no SSR/API). Use `<img>` tags for images.
