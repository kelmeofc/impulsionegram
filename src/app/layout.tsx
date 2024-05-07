import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Head from "next/head";
import SeoLayoutFragment from "@/layouts/seo.layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta
          property="og:image"
          content="https://impulsionegram.vercel.app/images/seo/opengraph-image.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://impulsionegram.vercel.app/images/seo/opengraph-image.jpeg"
        />
        <meta
          name="image"
          content="https://impulsionegram.vercel.app/images/seo/opengraph-image.jpeg"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.impulsionegram.com.br/" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
      </Head>
      <SeoLayoutFragment>
        <body>{children}</body>
      </SeoLayoutFragment>
    </html>
  );
}
