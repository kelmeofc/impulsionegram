import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.impulsionegram.com.br" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
