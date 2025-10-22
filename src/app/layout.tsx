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
  title: "Abhi Raheja",
  description: "COO at Sunscreen. Former journalist, founder and operator. Writing about technology, crypto, FHE, and more.",
  keywords: ["Abhi Raheja", "personal website", "blog", "writings", "crypto", "FHE", "technology", "privacy"],
  authors: [{ name: "Abhi Raheja" }],
  creator: "Abhi Raheja",
  icons: {
    icon: 'data:,',
  },
  openGraph: {
    title: "Abhi Raheja",
    description: "COO at Sunscreen. Former journalist, founder and operator. Writing about technology, crypto, FHE, and more.",
    url: "https://abhiraheja.com",
    siteName: "Abhi Raheja",
    images: [
      {
        url: "https://abhiraheja.com/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Abhi Raheja - Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi Raheja",
    description: "COO at Sunscreen. Former journalist, founder and operator. Writing about technology, crypto, FHE, and more.",
    images: ["https://abhiraheja.com/social-preview.jpg"],
  },
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
