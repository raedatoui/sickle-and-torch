# Sickle & Torch

This is the companion site for **Sickle & Torch**, a tabletop RPG rules expansion compatible with 5e, Shadowdark, and Dungeon Crawl Classics.

**[Check out the Kickstarter Campaign](https://www.kickstarter.com/projects/loreplaypress/1466325150)**

---

## Project Structure

This repository is a monorepo containing both the frontend application and the backend mailing list service.

### 1. Frontend (`/frontend`)

The landing page is a static site designed to showcase the project and collect email signups.

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Language:** TypeScript
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Tooling:** [Biome](https://biomejs.dev/) for linting and formatting.
*   **Hosting:** Deployed as a static export (`output: 'export'`) to **Firebase Hosting**.

**Key Commands:**
```bash
cd frontend
npm run dev      # Start development server
npm run check    # Run Biome lint & format
npm run build    # Build for production
```

### 2. Mailing List Service (`/mailing`)

The backend service handles email validation, subscription management, and notifications.

*   **Runtime:** Python (Firebase Cloud Functions 2nd Gen)
*   **Email Provider:** Mailgun API
*   **Validation:** `email-validator`
*   **Configuration:** Environment variables managed via `.env` (local) and Firebase configuration (production).

**Implementation Details:**
The service receives requests from the frontend, sanitizes and validates the email address, checks against the Mailgun mailing list, and handles the subscription process. It also sends a confirmation email to the user.

**Key Files:**
*   `mailing/sickle-mailing/main.py`: Main function logic.
*   `mailing/sickle-mailing/.env`: Local environment variables (API keys, etc.).
