import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tai Huynh — AI & Full-Stack Engineer",
  description:
    "Tai Huynh builds production-grade AI features: RAG pipelines, document intelligence, semantic search, MCP servers, and more. 11 projects, all security-reviewed.",
  openGraph: {
    title: "Tai Huynh — AI & Full-Stack Engineer",
    description:
      "Production-grade AI features. 11 projects, 211 passing tests, security-reviewed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
