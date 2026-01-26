import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Pixelify_Sans,
  Inter,
  Jersey_10,
} from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GameFont = Jersey_10({
  subsets: ["latin"],
  variable: "--font-game",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CodeBox | Learn & Practice Coding",
    template: "%s | CodeBox",
  },
  description:
    "Learn and practice coding like a game with structured courses, chapters, and exercises.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} 
        ${GameFont.variable} ${inter.variable}
        antialiased`}
        >
          <Provider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
