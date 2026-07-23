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
  title: "Cernunnos AI",
  description:
    "Plataforma de observación, diagnóstico y planificación agropecuaria.",
  metadataBase: new URL("https://cernunnos.ai"),
  openGraph: {
    title: "Cernunnos AI",
    description:
      "Conectando el territorio mediante inteligencia agropecuaria.",
    url: "https://cernunnos.ai",
    siteName: "Cernunnos AI",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/brand/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Cernunnos AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cernunnos AI",
    description:
      "Conectando el territorio mediante inteligencia agropecuaria.",
    images: ["/brand/og-cover.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
