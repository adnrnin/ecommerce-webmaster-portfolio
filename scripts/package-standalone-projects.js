const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const rootDir = "c:\\Projects\\Niall contra";
const stagingDir = path.join(rootDir, "standalone-staging");

const projects = [
  {
    slug: "aura-luxury-apparel",
    title: "Aura Luxury Apparel",
    tagline: "Headless Luxury Fashion Storefront",
    description: "Enterprise-grade headless fashion storefront with sub-second page loads (0.8s TTFB), optimistic cart drawer, size/color selectors, and 1-tap Apple Pay express checkout.",
    pageSource: path.join(rootDir, "app", "demo", "aura-luxury-apparel", "page.tsx"),
  },
  {
    slug: "apex-gear-marketplace",
    title: "Apex Gear Marketplace",
    tagline: "Multi-Vendor B2B & B2C Marketplace",
    description: "High-scale marketplace engine featuring real-time Stripe Connect automated split-settlement ledger, tiered wholesale volume pricing, and distributed Redis inventory mutexes.",
    pageSource: path.join(rootDir, "app", "demo", "apex-gear-marketplace", "page.tsx"),
  },
  {
    slug: "nova-botanics-dtc",
    title: "Nova Botanics DTC",
    tagline: "High-Volume DTC Subscription Platform",
    description: "Recurring commerce platform driving +28% retention through 1-click self-serve formula swapping, cadence switcher (30/60/90 days), predictive delivery calendar, and Stripe smart dunning.",
    pageSource: path.join(rootDir, "app", "demo", "nova-botanics-dtc", "page.tsx"),
  },
  {
    slug: "quantum-pay-fraud-shield",
    title: "Quantum Pay & Fraud Shield",
    tagline: "Custom Global Checkout & Edge Fraud Defense",
    description: "High-throughput global checkout routing engine with multi-currency FX settlement, real-time Cloudflare Worker edge risk scoring, and dynamic 3D Secure 2.0 fallback.",
    pageSource: path.join(rootDir, "app", "demo", "quantum-pay-fraud-shield", "page.tsx"),
  },
];

// Clean or create staging directory
if (fs.existsSync(stagingDir)) {
  fs.rmSync(stagingDir, { recursive: true, force: true });
}
fs.mkdirSync(stagingDir, { recursive: true });

const commonFiles = [
  "tsconfig.json",
  "tailwind.config.ts",
  "postcss.config.mjs",
  "next.config.mjs",
  ".eslintrc.json",
  ".gitignore",
];

projects.forEach((proj) => {
  const projDir = path.join(stagingDir, proj.slug);
  fs.mkdirSync(projDir, { recursive: true });
  fs.mkdirSync(path.join(projDir, "app"), { recursive: true });
  fs.mkdirSync(path.join(projDir, "public"), { recursive: true });

  // 1. Copy common config files
  commonFiles.forEach((file) => {
    fs.copyFileSync(path.join(rootDir, file), path.join(projDir, file));
  });

  // 2. Copy globals.css and favicons
  fs.copyFileSync(path.join(rootDir, "app", "globals.css"), path.join(projDir, "app", "globals.css"));
  if (fs.existsSync(path.join(rootDir, "app", "favicon.ico"))) {
    fs.copyFileSync(path.join(rootDir, "app", "favicon.ico"), path.join(projDir, "app", "favicon.ico"));
  }
  if (fs.existsSync(path.join(rootDir, "public", "favicon.ico"))) {
    fs.copyFileSync(path.join(rootDir, "public", "favicon.ico"), path.join(projDir, "public", "favicon.ico"));
  }

  // 3. Generate package.json for this project
  const pkgJson = {
    name: proj.slug,
    version: "1.0.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
    dependencies: {
      clsx: "^2.1.1",
      "framer-motion": "^11.11.9",
      "lucide-react": "^0.453.0",
      next: "^14.2.15",
      react: "^18.3.1",
      "react-dom": "^18.3.1",
      "tailwind-merge": "^2.5.4",
    },
    devDependencies: {
      "@types/node": "^20.17.0",
      "@types/react": "^18.3.12",
      "@types/react-dom": "^18.3.1",
      autoprefixer: "^10.4.20",
      eslint: "^8.57.1",
      "eslint-config-next": "14.2.15",
      postcss: "^8.4.47",
      tailwindcss: "^3.4.14",
      typescript: "^5.6.3",
    },
  };
  fs.writeFileSync(path.join(projDir, "package.json"), JSON.stringify(pkgJson, null, 2));

  // 4. Generate app/layout.tsx
  const layoutContent = `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "${proj.title} | ${proj.tagline}",
  description: "${proj.description}",
  authors: [{ name: "Niall.M" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
`;
  fs.writeFileSync(path.join(projDir, "app", "layout.tsx"), layoutContent);

  // 5. Generate app/page.tsx from the demo page source
  let pageContent = fs.readFileSync(proj.pageSource, "utf8");
  // Replace DemoHeader with a standalone top banner
  pageContent = pageContent.replace(/import { DemoHeader } from "@\/components\/DemoHeader";/g, "");
  pageContent = pageContent.replace(
    /<DemoHeader[\s\S]*?\/>/g,
    `<header className="bg-[#0b101c] border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono font-bold text-white tracking-wide">${proj.title.toUpperCase()}</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">PRODUCTION DEMO</span>
      </div>
      <div className="text-xs font-mono text-slate-400">
        Architect: <strong className="text-white">Niall.M</strong> (<a href="mailto:niall@nialluk.com" className="text-emerald-400 hover:underline">niall@nialluk.com</a>)
      </div>
    </header>`
  );
  fs.writeFileSync(path.join(projDir, "app", "page.tsx"), pageContent);

  // 6. Generate project-specific README.md
  const readmeContent = `# ${proj.title}

> ${proj.tagline}

${proj.description}

Architected by **Niall.M**  
Contact: [niall@nialluk.com](mailto:niall@nialluk.com) | Telegram: [@nialluk](https://t.me/nialluk)

---

## ⚡ Key Highlights

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Glassmorphism Dark Mode
- **Zero Asset Dependencies**: All product mockups, dashboards, and metrics are 100% CSS & inline SVG
- **Vercel Zero-Config**: Ready for instant production deployment with \`npm run build\`

---

## 🚀 Quick Start

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
npm run start
\`\`\`

---

## 🌐 Deploy to Vercel

1. Create a new repository on GitHub and push this code:
   \`\`\`bash
   git init
   git add .
   git commit -m "feat: initial commit for ${proj.slug}"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   \`\`\`
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js** (detected automatically).
4. Click **Deploy**.
`;
  fs.writeFileSync(path.join(projDir, "README.md"), readmeContent);

  // 7. Compress into .zip archive in root directory
  const zipPath = path.join(rootDir, `${proj.slug}.zip`);
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  console.log(`Compressing ${proj.slug} to ${zipPath}...`);
  // Use PowerShell Compress-Archive
  execSync(
    `powershell -Command "Compress-Archive -Path '${projDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: "inherit" }
  );
  const stats = fs.statSync(zipPath);
  console.log(`✓ Created ${proj.slug}.zip (${(stats.size / 1024).toFixed(1)} KB)`);
});

// Clean up staging folder
fs.rmSync(stagingDir, { recursive: true, force: true });
console.log("\nAll 4 standalone archives packaged successfully!");
