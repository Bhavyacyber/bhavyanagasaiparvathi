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
  title: "Bhavya Parvathi | Cybersecurity Specialist & Blue Team Analyst",
  description: "Bhavya Parvathi is a Cybersecurity professional specializing in Blue Team Operations, Threat Detection, SIEM Triaging, and Offensive API / Web Security validation.",
  keywords: ["Bhavya Parvathi", "Cybersecurity", "SOC Analyst", "Blue Team", "Threat Detection", "API Security", "VAPT", "Splunk", "Wireshark", "DPDPA 2023"],
  authors: [{ name: "Bhavya Parvathi" }],
  openGraph: {
    title: "Bhavya Parvathi | Cybersecurity Specialist & Blue Team Analyst",
    description: "Cybersecurity Analyst specializing in SOC Operations, Threat Detection, and Web/API Pentesting.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bhavya Parvathi",
    "jobTitle": "Cybersecurity Specialist",
    "description": "Cybersecurity professional specializing in Blue Team Operations and Web/API Security Validation.",
    "knowsAbout": [
      "SOC Operations",
      "Threat Detection",
      "SIEM Triaging",
      "Web Application Penetration Testing",
      "API Security",
      "DPDPA 2023 Compliance Mapping",
      "Network Segmentation"
    ],
    "sameAs": [
      "https://linkedin.com/in/bhavya-parvathi",
      "https://github.com/bhavyaparvathi"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060a13] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}

