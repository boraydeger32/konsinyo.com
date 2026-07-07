import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Konsinyo — Konsinye Ticaret Platformu | Uretici & Satici Bulusmasi",
  description:
    "Konsinyo, kucuk ureticiler ile perakende dukkanlari bulusturan konsinye ticaret platformudur. Urun yukle, siparis yonet, barkodla sat, mutabakat yap. 14 gun ucretsiz dene.",
  keywords:
    "konsinye, konsinye ticaret, stok takibi, uretici satici platformu, B2B SaaS, KOBi, perakende, barkod, mutabakat",
  openGraph: {
    title: "Konsinyo — Konsinye Ticareti Dijitallestir",
    description:
      "Uretici ve saticiyi bulustur, siparisi yonet, stoku takip et, mutabakati otomatiklestir. Komisyon yok.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <body className="font-sans text-text-body bg-white">{children}</body>
    </html>
  );
}
