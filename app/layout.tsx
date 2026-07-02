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
  title: "UrbanLabs — Tecnologia para Gestão Pública Municipal",
  description:
    "A UrbanLabs desenvolve plataformas digitais para prefeituras. Conheça o BigMap: saúde, educação, assistência social, farmácia, tributos e muito mais em uma única plataforma integrada.",
  keywords: [
    "govtech",
    "smart city",
    "gestão municipal",
    "prefeituras",
    "BigMap",
    "UrbanLabs",
  ],
  openGraph: {
    title: "UrbanLabs — Tecnologia para Gestão Pública Municipal",
    description:
      "Plataformas digitais para prefeituras: dados integrados, serviços ao cidadão e gestão inteligente em um só lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
