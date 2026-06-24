# Developer Portfolio: Software Engineer (Backend & AI)

A complete, production-ready, and highly optimized developer portfolio website built for **Lohita V**. The design leverages a structured, systems-inspired layout styling her experience and projects like IDE code editors and system monitoring telemetry logs.

## Tech Stack & Architecture

- **Core**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (configured via modern CSS `@theme` properties)
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono (locally served font assets)
- **Design Paradigm**: Systems & Developer-Centric Theme (Dark grid background, emerald/cyan metrics, interactive terminals, and responsive code-editor cards)

## Features

- **Hero Dashboard**: A typewriter console cycling through developer personas, backed by a simulated running script displaying real-time telemetry stats (e.g., LeetCode ratings, competitive programming accomplishments, and skills).
- **Interactive About Terminal**: Profile summary detailing Bannari Amman Institute of Technology education (B.E. IS&E, CGPA 8.12) paired with a mock JSON editor file view.
- **Log-Styled Work Experience**: Timeline showcasing software engineering achievements at Zoho Corp formatted like system telemetry/syslog logs.
- **Interactive Projects Workspace**: Code-editor cards detailing StyleFit (MobileNetV2, Flask, PostgreSQL) and the PCB Industry LLM (LLaMA 3.1 8B fine-tuning, RAG ChromaDB), containing click-to-expand console windows that display actual engineering metrics and code snippets.
- **Interactive Skills IDE**: Simulated workspace editor containing selectable files (`languages.yaml`, `frameworks.json`, `databases.conf`, `ai_ml.py`) displaying ratings with progress gauges.
- **Interactive Command-Line Contact**: Contact form displaying simulated REST calls and server response telemetry upon message submission.

## Local Setup & Development

Ensure you have Node.js (v18+ recommended) installed.

1. **Clone the repository** (or copy folder contents to your directory)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the local development server**:
   ```bash
   npm run dev
   ```
4. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) on your local browser.

## Building for Production

To test the production build locally:

```bash
npm run build
npm start
```

---

## Step-by-Step Creation History

Here is the exact step-by-step engineering process followed to design, code, and compile this developer portfolio:

### Step 1: Content Extraction & Optimization
- Analyzed candidate's Resume (PDF) and LinkedIn profile (PDF).
- Classified the candidate as a **Software Engineer (AI & Backend Focus)**.
- Refined professional accomplishments to be achievement-oriented, removing speculative post-deployment metrics to ensure resume integrity while keeping local performance highlights.

### Step 2: Next.js Boilerplate Initialization
- Bootstrapped the project in the workspace root using `create-next-app` non-interactively:
  ```bash
  npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
  ```
- Configured ESLint rules, TypeScript schema, and Next.js settings.

### Step 3: Typography & Metadata Setup
- Configured `src/app/layout.tsx` to define search engine keywords, OpenGraph titles, and meta descriptions optimized for hiring managers.
- Utilized Google Fonts via Next.js (`Geist Sans` and `Geist Mono`) to load modern developer-centric typography.

### Step 4: Custom CSS & Theme Design
- Overwrote `src/app/globals.css` with a custom systems design language under Tailwind CSS v4.
- Defined grid backgrounds, glow animations, scrollbar overlays, terminal typography structures, and CRT scanlines.

### Step 5: Lucide Icon Optimization
- Installed `lucide-react` for standard UI shapes.
- Designed custom inline SVGs for LinkedIn and GitHub logos, resolving dependencies issues related to brand icon deprecation in current Lucide versions.

### Step 6: Component Implementation
- **Hero Dashboard (`Hero.tsx`)**: Created the terminal typewriter simulator and the system telemetry bar displaying LeetCode statistics.
- **Profile JSON Explorer (`About.tsx`)**: Formatted education (CGPA 8.12) and narrative bios, paired with an editor viewer showing her profile serialized in JSON.
- **Log Timeline (`Experience.tsx`)**: Structured her Zoho internship like a system telemetry logger, using visual log markers.
- **Project Telemetry (`Projects.tsx`)**: Created VSCode file tab headers for StyleFit and the PCB LLM, building click-to-expand widgets exposing model loss values and data flows.
- **IDE Skill Inventory (`Skills.tsx`)**: Implemented a mock-IDE file explorer that allows clicking files like `databases.conf` to render skills as progress gauges.
- **Message Dispatch Shell (`Contact.tsx`)**: Developed a terminal simulator where form submissions generate dynamic network and JSON outputs.

### Step 7: Assembly & Verification
- Assembled the panels in `src/app/page.tsx`, configuring a sticky navigation menu and a telemetry footer featuring a live clock widget.
- Ran the production compiler (`npm run build`) to ensure the codebase resolves successfully with Turbopack and TypeScript.

