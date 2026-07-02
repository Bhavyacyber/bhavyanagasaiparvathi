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
  title: "Aerospace Battery Intelligence & Cybersecurity Platform | iTelematics",
  description: "AI-powered Digital Twin platform for aerospace, aviation, defense, satellites, eVTOLs, and drones. Real-time battery diagnostics, predictive maintenance, secure telemetry, and quantum-ready cybersecurity.",
  keywords: [
    "Aerospace battery cybersecurity",
    "battery intrusion detection",
    "secure battery telemetry",
    "BMS threat detection",
    "secure OTA EV",
    "AI threat intelligence",
    "post-quantum telemetry security",
    "ISO 21434",
    "UNECE R155",
    "UNECE R156",
    "DO-178C",
    "DO-254",
    "DO-356",
    "iTelematics",
    "battery diagnostics"
  ],
  authors: [{ name: "iTelematics Software Private Limited" }],
  openGraph: {
    title: "Aerospace Battery Intelligence & Cybersecurity Platform",
    description: "AI-Powered Digital Twin Platform for Aerospace Battery Diagnostics, Battery Health Intelligence, Predictive Maintenance, Secure Telemetry, and Quantum-Ready Cybersecurity.",
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
    "@type": "SoftwareApplication",
    "name": "Aerospace Battery Intelligence & Cybersecurity Platform",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Embedded OS / RTOS / Linux",
    "description": "AI-powered Digital Twin platform for aerospace, aviation, defense, satellites, eVTOLs, and drones. Real-time battery diagnostics, predictive maintenance, secure telemetry, and quantum-ready cybersecurity.",
    "author": {
      "@type": "Organization",
      "name": "iTelematics Software Private Limited",
      "url": "https://itelematics.com"
    }
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

