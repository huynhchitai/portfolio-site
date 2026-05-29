export interface Project {
  id: number;
  repo: string;
  title: string;
  pitch: string;
  demonstrates: string[];
  accent: string;
  accentLight: string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    repo: "rag-chatbot",
    title: "RAG Chatbot",
    pitch: "Upload a PDF, ask questions, get cited streamed answers.",
    demonstrates: ["RAG", "pgvector", "streaming", "citations"],
    accent: "#FF6B00",
    accentLight: "#FF6B0015",
    github: "https://github.com/huynhchitai/rag-chatbot",
    demo: "https://rag.huynhchitai.com",
  },
  {
    id: 2,
    repo: "web-scraper",
    title: "AI Web Scraper",
    pitch: "Paste a URL + plain-English fields, get structured data.",
    demonstrates: ["Structured extraction", "SSRF defense"],
    accent: "#D98F00",
    accentLight: "#D98F0015",
    github: "https://github.com/huynhchitai/web-scraper",
    demo: "https://scraper.huynhchitai.com",
  },
  {
    id: 3,
    repo: "resume-tailor",
    title: "Resume Tailor",
    pitch: "Paste a job post + your CV, get ATS-aligned rewrites + match score.",
    demonstrates: ["Prompt engineering", "structured output"],
    accent: "#E2483D",
    accentLight: "#E2483D15",
    github: "https://github.com/huynhchitai/resume-tailor",
    demo: "https://resume.huynhchitai.com",
  },
  {
    id: 4,
    repo: "invoice-extractor",
    title: "Invoice Extractor",
    pitch: "Upload an invoice or receipt, get clean structured data.",
    demonstrates: ["Multimodal vision", "document AI"],
    accent: "#1F6F4A",
    accentLight: "#1F6F4A15",
    github: "https://github.com/huynhchitai/invoice-extractor",
    demo: "https://invoice.huynhchitai.com",
  },
  {
    id: 5,
    repo: "faq-widget",
    title: "FAQ Widget",
    pitch: "Drop a script tag, get an AI FAQ assistant on any site.",
    demonstrates: ["Embeddable widget", "grounded RAG", "CORS"],
    accent: "#E8613A",
    accentLight: "#E8613A15",
    github: "https://github.com/huynhchitai/faq-widget",
    demo: "https://faq.huynhchitai.com",
  },
  {
    id: 6,
    repo: "meeting-notes",
    title: "Meeting Notes",
    pitch: "Paste a transcript, get summary + action items + email.",
    demonstrates: ["Long-context", "structured extraction"],
    accent: "#2F4B7C",
    accentLight: "#2F4B7C15",
    github: "https://github.com/huynhchitai/meeting-notes",
    demo: "https://notes.huynhchitai.com",
  },
  {
    id: 7,
    repo: "semantic-search",
    title: "Semantic Search",
    pitch: "Index docs, search by meaning with highlighted snippets.",
    demonstrates: ["Embeddings", "vector search"],
    accent: "#8C2D2D",
    accentLight: "#8C2D2D15",
    github: "https://github.com/huynhchitai/semantic-search",
    demo: "https://search.huynhchitai.com",
  },
  {
    id: 8,
    repo: "content-studio",
    title: "Content Studio",
    pitch: "Give a brief, get SEO blog, product, or social copy.",
    demonstrates: ["Streaming generation", "prompt templates"],
    accent: "#7A8C0A",
    accentLight: "#7A8C0A15",
    github: "https://github.com/huynhchitai/content-studio",
    demo: "https://content.huynhchitai.com",
  },
  {
    id: 9,
    repo: "review-analytics",
    title: "Review Analytics",
    pitch: "Paste customer reviews, get sentiment + themes + a report.",
    demonstrates: ["Batch classification", "aggregation", "data-viz"],
    accent: "#2B5FE3",
    accentLight: "#2B5FE315",
    github: "https://github.com/huynhchitai/review-analytics",
    demo: "https://reviews.huynhchitai.com",
  },
  {
    id: 10,
    repo: "nl-to-sql",
    title: "NL → SQL",
    pitch: "Describe a query in English, get safe read-only SQL.",
    demonstrates: ["Code generation", "SQL safety analysis"],
    accent: "#C98A00",
    accentLight: "#C98A0015",
    github: "https://github.com/huynhchitai/nl-to-sql",
    demo: "https://sql.huynhchitai.com",
  },
  {
    id: 11,
    repo: "web-research-mcp",
    title: "Web Research MCP",
    pitch: "An MCP server giving any AI assistant safe web access.",
    demonstrates: ["MCP protocol", "tool design", "SSRF defense"],
    accent: "#1F8C8C",
    accentLight: "#1F8C8C15",
    github: "https://github.com/huynhchitai/web-research-mcp",
    // No web demo — MCP runs over stdio inside an AI client.
  },
];

export const stack = [
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "Vertex AI Gemini 2.5 Flash",
  "Upstash Redis",
  "zod",
  "Vitest",
  "Cloud Run",
  "MCP",
];
