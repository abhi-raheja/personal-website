import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abhi Raheja - Personal Website",
  description: "Personal website and writings of Abhi Raheja. Exploring thoughts on technology, privacy, crypto, and the intersection of culture and innovation.",
  keywords: ["Abhi Raheja", "personal website", "blog", "writings", "crypto", "FHE", "technology", "privacy"],
  authors: [{ name: "Abhi Raheja" }],
  creator: "Abhi Raheja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
