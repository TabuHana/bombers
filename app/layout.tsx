import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bombers Notebook",
  description: "Remember everything about your friends",
  icons: [
    {
      url: '/notebook-temp.svg',
      href: '/notebook-temp.svg',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-amber-200',inter.className)}>{children}</body>
    </html>
  );
}
