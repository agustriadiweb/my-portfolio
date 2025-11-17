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
  title: "Agustriadi - Portfolio | Fresh Graduate Manajemen Informatika",
  description: "Portfolio Agustriadi, Fresh Graduate D3 Manajemen Informatika Politeknik Negeri Sriwijaya. Berpengalaman dalam pengelolaan data, testing aplikasi, dan kegiatan IT.",
  keywords: ["Agustriadi", "Portfolio", "Manajemen Informatika", "Fresh Graduate", "Web Developer", "IT", "Politeknik Negeri Sriwijaya"],
  authors: [{ name: "Agustriadi" }],
  openGraph: {
    title: "Agustriadi - Portfolio",
    description: "Fresh Graduate D3 Manajemen Informatika Politeknik Negeri Sriwijaya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
