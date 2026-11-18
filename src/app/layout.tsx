import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeabsera Abebe — AI Engineer & Full-Stack Developer",
  description:
    "Yeabsera Abebe is an AI Engineer and Full-Stack Developer building AI agents, LLM applications, and intelligent software systems. Founder of Finet AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
