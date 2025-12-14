# Sickle & Torch - Project Context

## Project Overview
**Sickle & Torch** is a landing page for a tabletop RPG rules expansion compatible with 5e, Shadowdark, and Dungeon Crawl Classics. The project is built with **Next.js 16** (App Router) and deployed via **Firebase Hosting** as a static site.

## Tech Stack & Architecture
- **Framework**: Next.js 16 (App Router)
- **Deployment**: Static Export (`output: 'export'`) to Firebase Hosting.
- **Styling**: Tailwind CSS v4 (using `@theme` in `globals.css`).
- **Linting/Formatting**: Biome (replaces ESLint/Prettier).
- **Language**: TypeScript.
- **Font**: Custom "Planchette" (local) and "Roboto Condensed" (Google).

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
  - `var(--color-void-bg)` / `var(--color-void-panel)` (Dark backgrounds)
  - `var(--color-gold-primary)` / `var(--color-gold-dim)` (Gold accents)
  - `var(--color-torch-red)`
- **Fonts**:
  - `font-secondary` class applies Roboto Condensed.
  - Default font is Planchette (serif).

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
└── app/
    ├── fonts/          # Local font files (Planchette)
    ├── globals.css     # Global styles & Tailwind theme
    ├── layout.tsx      # Root layout (Metadata, Fonts)
    └── page.tsx        # Main Landing Page (Single scrollable view)
public/                 # Static assets (images, fonts)
```

## AI Agent Behavior Rules
- **Shell Commands**: Do NOT run any shell commands (npm, git, build, etc.) unless explicitly requested by the user.
- **File Editing**: Always read the file first. Maintain the existing code style (4 spaces, single quotes).
