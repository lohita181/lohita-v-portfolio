import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lohita V | Software Engineer (Backend & AI)",
  description: "Portfolio of Lohita V, a Systems & Software Engineer specializing in backend infrastructure, telemetry pipelines, and domain-specific LLM fine-tuning. Ex-Zoho Intern.",
  keywords: ["Lohita V", "Software Engineer", "Zoho Intern", "Systems Engineer", "Backend Developer", "ML Engineer", "LLaMA Fine-tuning", "Database Monitoring", "Prometheus", "Grafana", "Python", "Java", "Go", "ChromaDB", "RAG"],
  authors: [{ name: "Lohita V" }],
  openGraph: {
    title: "Lohita V | Software Engineer (Backend & AI)",
    description: "Systems & Software Engineer specializing in backend infrastructure, telemetry pipelines, and domain-specific LLM fine-tuning. Ex-Zoho Intern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070f] text-slate-200 selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}

