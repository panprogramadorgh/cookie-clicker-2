import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/watercss.css";
import "@/app/globals.css";

import GameContextProvider from "@/ui/contexts/Game";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookie Clicker",
  description: "Cookie clicker the videogame. Tap to get cookies and chips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/imgs/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
