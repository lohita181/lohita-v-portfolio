# Systems-Themed Developer Portfolio

Welcome to the repository for my personal portfolio website! I designed and built this website to showcase my experience in backend systems, database observability pipelines, low-level reverse engineering, and domain-specific AI integrations. 

To match my passion for infrastructure and core development, I styled the website around developer environments—utilizing interactive code editors, telemetry consoles, database logs, and terminal input forms.

## Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (utilizing inline `@theme` directives for custom matrix-grid and glow keyframes)
- **Icons**: Lucide React & optimized custom inline SVG paths
- **Typography**: Locally loaded Geist Sans & Geist Mono for a modern, monospaced terminal look
- **Deployment-Ready**: Standard configurations, requiring zero environment variables to run or build.

## Interactive Features & Sections

- **Hero Terminal Dashboard**: A landing console that simulates typewriter output for my engineering focus areas, backed by a shell script that pulls LeetCode stats (400+ solved, max 1530 rating) and Zoho internship telemetry.
- **Academic JSON Viewer (`/about`)**: A side-by-side view featuring my engineering narrative and a custom JSON viewer displaying my academic profile (B.E. Information Science and Engineering, CGPA 8.12).
- **Telemetry Log Experience (`/experience`)**: Timeline styling my Zoho internship role like a system monitoring log (`syslog`). Details my Ghidra binary decompilation automation, Prometheus/Grafana database monitoring, self-healing cron scripts, and MySQL onboarding panels.
- **IDE Project Tabs (`/projects`)**: Workspace-editor cards presenting my two flagship projects—**StyleFit** (Flask, MobileNetV2, PostgreSQL) and **PCB Industry LLM** (LLaMA 3.1 8B fine-tuning, ChromaDB RAG). Clicking "Analyze Pipeline Telemetry" prints real execution details like QLoRA loss curves (1.1 -> 0.62 loss) and schema lookups.
- **Skills IDE Tree (`/skills`)**: A simulated sidebar file explorer that displays skill categories as files (`languages.yaml`, `frameworks.json`, `databases.conf`, `ai_ml.py`). Selecting a file loads its keys and shows proficiency levels via telemetry meters.
- **REST Contact Simulator (`/contact`)**: An interactive terminal form that compiles contact inputs and simulates a Curl POST command, outputting mock HTTP network logs and packet delivery status.

## Local Setup & Run Guide

To run this project locally, ensure you have Node.js (v18+) installed.

1. **Clone this repository**:
   ```bash
   git clone https://github.com/lohita181/lohita-v-portfolio.git
   cd lohita-v-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Production Compiling

To build the application for production and run the optimized bundle locally:

```bash
npm run build
npm start
```

## License

This project is open-source and available under the MIT License.
