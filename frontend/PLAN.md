# Sickle & Torch Landing Page Plan

## 1. Content Organization & Copy

### A. Hero Section (Above the Fold)
*   **Headline:** "EVERYTHING FOR PLAYING ZERO LEVEL HEROES"
*   **Sub-headline:** "in one 40-page rules expansion"
*   **Visual:** Large Sickle & Torch Logo
*   **System Callouts:**
    *   "PLAY OUT YOUR [5E Logo] CHARACTER’S BACKSTORY"
    *   "RUN AN UNFORGETTABLE [Shadowdark Logo] GAUNTLET"
    *   "HAVE EVEN MORE FUN WITH YOUR [DCC Logo] FUNNEL!"
*   **Description:** "Sickle & Torch is a rules expansion for 5e, Shadowdark and Dungeon Crawl Classics that focuses on 0-level commoners on their paths towards becoming heroic level 1 characters."
*   **Primary CTA:** "Coming to Kickstarter February 2026" (Banner/Button style)
*   **Social Proof/Follow:** "Follow us KS/FB/TW"

### B. Value Proposition (Features)
*   **Visual:** IMAGE 1 (General Gameplay/Atmosphere)
*   **Core Promise:** "INCLUDING: Four unique original adventures ready for 0 level or low-level play!"
*   **Feature Grid:**
    1.  **PLUG AND PLAY:** "Every mechanic is presented in its own short and sweet chapter..."
    2.  **THEY HAVE POTENTIAL:** "Roll up your 0-level characters the old school way..."
    3.  **RAISE THE TORCHES!:** "Four new Torch classes - inspiring spirits..." (Visual: IMAGE 2)
    4.  **A ONE OF A KIND 0-LEVEL CAMPAIGN:** "Play as a mob of commoners caught in a rebellion..."
    5.  **GO ABOVE ZERO:** "Sickle & Torch mechanics work for 0-level and low-level play..."

### C. The Adventures (Detailed Breakdown)
*   **Section Header:** "FOUR ADVENTURES, ENDLESS SCENARIOS"
*   **Sub-header:** "Four strongholds of tyranny, ready to be stormed by righteous mobs."
*   **Stats/Highlights:**
    *   "40+ encounters..."
    *   "No preset paths. No fixed encounters."
    *   "Playable with 0-level or low-level (1-3) characters."
    *   "Potential replay value: INCALCULABLE."
*   **Adventure List:**
    1.  **THRALL HOLD OF THE BLOOD BAILIFF** (Visual: IMAGE 4)
        *   "The slaves of the Thrall Hold have revolted!..."
    2.  **PERILOUS CHAPEL OF THE OMNI PATRIARCH** (Visual: IMAGE 5)
        *   "The glorious New Law Temple is burning..."
    3.  **FORBIDDEN CITADEL OF THE PANOPTICON OVERMIND** (Visual: IMAGE 6)
        *   "The Panopticon looms over the Dusk Empire..."
    4.  **ROVING ALCAZAR OF THE GOLDEN PRINCIPAL** (Visual: IMAGE 7)
        *   "The Roving Alcazar has come to your homeland..."

### D. System Specifics ("Pick Your System")
*   **Header:** "PICK YOUR SYSTEM"
*   **Sub-header:** "Pick your system - 5e, Dungeon Crawl Classics or Shadowdark"
*   **System Details:**
    1.  **5e:** "ZEROES CAN BE HEROES, EVEN IN 5e... Play out your 5e character’s heroic origin..."
    2.  **Shadowdark:** "A RULESET FOR RUNNING THE GAUNTLET... Run through your next Shadowdark gauntlet..."
    3.  **DCC:** "ALL IN GOOD FUNNEL... Explore new options for 0-level trade goods..."
*   **Visual:** IMAGE 3 (System neutral or showcasing all three)

### E. Footer / Final CTA
*   **Announcement:** "AVAILABLE APRIL 2026"
*   **Socials:** "FOLLOW US (FB/TWITTER/DISCORD)"
*   **Subscribe Form:** "JOIN THE MOB"

---

## 2. Reusable Component Architecture

To maintain consistency and ease of updates, we will create the following reusable React components:

### 1. `Section` (Already exists)
*   **Purpose:** Wraps major content blocks with consistent padding and layout.
*   **Props:** `className`, `id`, `children`, `background` (optional, for specific section backgrounds).

### 2. `InfoCard` (For Features/Systems)
*   **Purpose:** Displays feature highlights or system descriptions.
*   **Structure:**
    *   `Icon` or `Image` (Optional)
    *   `Title` (e.g., "PLUG AND PLAY")
    *   `Description` (Text body)
*   **Variant:** `SystemCard` (Special styling for 5e/SD/DCC cards with logo placeholders).

### 3. `AdventureCard`
*   **Purpose:** Showcases each of the 4 adventures.
*   **Structure:**
    *   `Image` (Cover art/Screenshot)
    *   `Title` (e.g., "THRALL HOLD OF THE BLOOD BAILIFF")
    *   `Description` (The flavor text)
    *   **Layout:** Alternating layout (Image Left/Text Right vs. Text Left/Image Right) for visual interest on desktop.

### 4. `AnnouncementBanner`
*   **Purpose:** Reusable for "Coming to Kickstarter" and "Available April 2026".
*   **Structure:**
    *   Full-width or contained bar.
    *   Distinctive background (e.g., Gold gradient or solid black with gold border).
    *   `Text` content.
    *   Optional `Icon` or `Button` (e.g., "Notify Me").

### 5. `SubscribeForm` ("Join The Mob")
*   **Purpose:** Email capture.
*   **Structure:**
    *   `Input` field (Email)
    *   `Button` ("Subscribe")
    *   `Caption` ("Join the mob")

---

## 3. Implementation Plan

### Step 1: Component Creation
1.  Create `src/components/InfoCard.tsx`.
2.  Create `src/components/AdventureCard.tsx`.
3.  Create `src/components/AnnouncementBanner.tsx`.

### Step 2: Page Restructuring (`src/app/page.tsx`)
1.  **Refine Hero:** Update text to match "EVERYTHING FOR PLAYING ZERO LEVEL HEROES". Add the "Coming to Kickstarter" banner immediately below or integrated into the hero.
2.  **Implement Features Section:** Use `InfoCard` grid for the "PLUG AND PLAY", "THEY HAVE POTENTIAL" sections. Insert placeholders for IMAGE 1 and IMAGE 2.
3.  **Implement Adventures Section:** Replace the current generic placeholder with the 4 specific `AdventureCard` components (Thrall Hold, Chapel, Citadel, Alcazar).
4.  **Implement Systems Section:** Create a dedicated section for "Pick Your System" using `InfoCard` or specialized layout for the 3 systems text.
5.  **Refine Footer/CTA:** Ensure the "Join The Mob" section matches the new copy and includes the "Available April 2026" announcement.

### Step 3: Styling & Polish
1.  Ensure all new components use the `gold-gradient-text`, `font-planchette`, and `font-secondary` utility classes for consistency.
2.  Verify mobile responsiveness, especially for the Adventure cards (stacking vertically on mobile).
