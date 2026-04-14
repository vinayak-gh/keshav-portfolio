import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keshav Wadwale | Java Full Stack Developer & AI Product Builder",
  description:
    "Java Full Stack Developer with 4+ years experience in scalable backend systems, Spring Boot, Kafka, and 2+ years in AI/LLM systems. Builder of Toolisky.",
  keywords: [
    "Java Developer", "Spring Boot", "Full Stack Developer", "AI Developer",
    "React", "Next.js", "Kafka", "Microservices", "Pune",
  ],
  authors: [{ name: "Keshav Wadwale" }],
  openGraph: {
    title: "Keshav Wadwale | Java Full Stack Developer & AI Product Builder",
    description: "Building scalable systems + AI products. 4+ years backend, 2+ years AI/LLM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" style={{ background: '#0a0f1c' }}>
        {children}
      </body>
    </html>
  );
}
