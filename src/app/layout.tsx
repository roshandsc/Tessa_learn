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
  title: "Tessa Learn",
  description:
    "Empowering students with internships, training, and real-world learning through Tessa Learn.",
  applicationName: "Tessa Learn",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
