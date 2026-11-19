import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { HydrationFix } from "@/components/HydrationFix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Ameen Hussaini | Platform & Cloud DevOps Engineer",
  description:
    "Platform and Cloud DevOps Engineer specializing in AWS, Azure, Kubernetes, Terraform, CI/CD automation, and AI/LLM platform operations.",
  keywords: [
    "DevOps",
    "Platform Engineer",
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "MLOps",
    "LLMOps",
    "Cloud Engineer",
    "Syed Ameen Hussaini",
  ],
  authors: [{ name: "Syed Ameen Hussaini" }],
  openGraph: {
    title: "Syed Ameen Hussaini | Platform & Cloud DevOps Engineer",
    description:
      "Platform and Cloud DevOps Engineer specializing in designing, securing, and operating cloud-native platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-fg`}
        suppressHydrationWarning
      >
        <HydrationFix />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
