import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/watercss.css";
import "@/app/globals.css";

import GameContextProvider from "@/ui/contexts/Game";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookie clicker 2 !",
  description: "Segunda version del videojuego basado en cookie clicker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GameContextProvider>
        <body className={inter.className}>{children}</body>
      </GameContextProvider>
    </html>
  );
}
