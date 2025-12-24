# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sickle & Torch** is a Next.js 16 landing page for a tabletop RPG rules expansion. The site uses static site generation (`output: 'export'`) and is deployed to Firebase Hosting.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (outputs to /out directory)
npm run build

# Preview production build locally
npm run start

# Lint code with Biome
npm run lint

# Format code with Biome
npm run format

# Lint and format code with Biome (auto-fix)
npm run check
```

## Deployment

The site is configured for Firebase Hosting with static export:
- Build output directory: `/out`
- Firebase site: `sickleandtorch`
- Deploy: `firebase deploy` (requires Firebase CLI)

## Code Style

This project uses **Biome** instead of ESLint/Prettier:
- **Indentation**: 4 spaces
- **Line width**: 150 characters
- **Quotes**: Single quotes for JavaScript/TypeScript
- **Semicolons**: Always
- **Trailing commas**: ES5 style
- CSS Modules and Tailwind directives are enabled

Key Biome rules enforced:
- No parameter reassignment
- Use const assertions
- Self-closing elements required
- No unused template literals
- No inferrable types

Always run `npm run check` before committing to auto-fix formatting and linting issues.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router, Static Export)
- **Styling**: Tailwind CSS v4 with custom theme
- **Fonts**: Cambria + OldNewspaperTypes (local fonts)
- **Type Safety**: TypeScript with strict mode
- **Validation**: Zod (available but not yet used)
- **Audio**: Tone.js (available but not yet used)

### Static Export Configuration

The project is configured for static export (`next.config.ts`):
```typescript
{
  output: 'export',
  images: { unoptimized: true }
}
```

This means:
- No server-side rendering or API routes
- All images must use `unoptimized: true`
- Use `<img>` tags instead of Next.js `<Image>` for most cases, or explicitly configure Image component
- Output goes to `/out` directory

### Custom Theme System

The project uses Tailwind v4's `@theme` directive in `globals.css` with a custom design system:

**Color Palette:**
- `--color-void-bg`: rgba(139, 0, 0) (main background - dark red)
- `--color-void-panel`: #0f0f0f (panel background)
- `--color-gold-primary`: #c9a227 (primary accent)
- `--color-gold-dim`: #8a6e1c (secondary accent)
- `--color-torch-red`: #8b0000 (red accent)
- Text colors: `--color-text-main` (#f2f0e4) and `--color-text-muted` (#a0a0a0)

**Custom CSS Classes:**
- `.gold-gradient-text`: Gold metallic gradient text effect
- `.btn-fantasy`: Styled button with gold borders and hover effects
- `.separator-gold`: Horizontal gold gradient separator
- `.fantasy-card`: Card component with hover lift and glow effects
- `.glass-card`: Semi-transparent card with blur backdrop
- `.font-secondary`: Switches to Cambria font
- `.font-old-newspaper`: Switches to OldNewspaperTypes font

**Typography:**
- Primary font: Cambria (serif, loaded locally from `src/app/fonts/`)
- Display font: OldNewspaperTypes (used for h1 headings)
- Access via CSS variables: `var(--font-cambria)` and `var(--font-old-newspaper)`

### File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font configuration and metadata
│   ├── page.tsx            # Landing page (single page site)
│   ├── globals.css         # Tailwind imports and custom theme
│   └── fonts/              # Local font files (.woff2)
└── components/
    ├── Section.tsx         # Page section wrapper
    ├── Headline.tsx        # Main headline styling
    ├── SectionHeader.tsx   # Section title component
    ├── Divider.tsx         # Section divider with art
    ├── InfoCard.tsx        # Feature info cards
    ├── SystemCard.tsx      # RPG system cards (5e, Shadowdark, DCC)
    ├── AdventureCard.tsx   # Adventure preview cards
    ├── KickstarterModule.tsx # CTA with subscribe form
    ├── SubscribeForm.tsx   # Email subscription form
    └── SocialFollow.tsx    # Social media links
```

### Path Aliases

The project uses `@/*` to reference `src/*`:
```typescript
import { Component } from '@/components/Component';
```

## Development Guidelines

### Working with Images
- All images are in `/public` directory
- Use standard `<img>` tags with `/image.png` paths (not Next.js `<Image>` unless specifically needed)
- Images are unoptimized due to static export configuration

### Working with Fonts
- Custom fonts: Add to `src/app/fonts/` and import in `layout.tsx` using `next/font/local`
- Apply fonts via CSS variables in `globals.css` theme

### Adding Dependencies
This project uses npm:
```bash
npm install <package>
```

### TypeScript Configuration
- React JSX transform is enabled (`"jsx": "react-jsx"`)
- Target: ES5 for broad compatibility
- Strict mode is enabled
- Module resolution: `bundler` (recommended for Next.js)
