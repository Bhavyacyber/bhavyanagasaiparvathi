import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bhavya-parvathi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Cybersecurity Professional`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Personal branding portfolio for Bhavya Parvathi, focused on SOC operations, web/API security, vulnerability assessment, and security reporting.",
  keywords: [
    "Bhavya Parvathi",
    "Cybersecurity Professional",
    "SOC Analyst",
    "API Security",
    "Vulnerability Assessment",
    "Security Reporting",
    "Threat Detection",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | Blue Team Operations with Offensive Validation`,
    description:
      "A cybersecurity portfolio focused on detection workflows, API security assessment, and evidence-based reporting.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/profile.jpg", width: 686, height: 591, alt: `${profile.name} portrait` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Cybersecurity Professional`,
    description: profile.valueProposition,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
