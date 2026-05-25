import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Ameer Hamza — AI Engineer",
  description: "AI Engineer specializing in LLMs, RAG pipelines, and production ML systems. Building intelligent applications that bridge research and real-world impact.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "RAG", "NLP", "Deep Learning", "Python"],
  openGraph: {
    title: "Ameer Hamza — AI Engineer",
    description: "AI Engineer specializing in LLMs, RAG pipelines, and production ML systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
