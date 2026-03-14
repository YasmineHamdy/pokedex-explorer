import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokédex — Discover and Explore Pokémon",
  description:
    "Browse, search, and explore Pokémon with pagination or infinite scroll. View detailed stats, abilities, and types for every Pokémon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
