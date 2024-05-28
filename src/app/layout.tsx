import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Head from "next/head";
import SeoLayoutFragment from "@/layouts/seo.layout";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="pt-br">
			<SeoLayoutFragment>
				<Head>
					<meta
						property="og:title"
						content="Crescer no Instagram é difícil e demorado? Não mais!"
					/>
					<meta property="og:site_name" content="ImpulsioneGram" />
					<meta property="og:url" content="impulsionegram.vercel.app" />
					<meta
						property="og:description"
						content="O ImpulsioneGram é o melhor site para você comprar seguidores reais e brasileiros e crescer seu perfil em poucos cliques."
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://impulsionegram.vercel.app/images/seo/opengraph-image.jpeg"
					/>

					<meta
						property="og:url"
						content="https://impulsionegram.vercel.app/"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content="Crescer no Instagram é difícil e demorado? Não mais!"
					/>
					<meta
						property="og:description"
						content="O ImpulsioneGram é o melhor site para você comprar seguidores reais e brasileiros e crescer seu perfil em poucos cliques."
					/>
					<meta property="og:image" content="" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="impulsionegram.vercel.app" />
					<meta
						property="twitter:url"
						content="https://impulsionegram.vercel.app/"
					/>
					<meta
						name="twitter:title"
						content="Crescer no Instagram é difícil e demorado? Não mais!"
					/>
					<meta
						name="twitter:description"
						content="O ImpulsioneGram é o melhor site para você comprar seguidores reais e brasileiros e crescer seu perfil em poucos cliques."
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

				<GoogleTagManager
					gtmId="GTM-NM5H6G4"
				/>

				<body>{children}</body>
			</SeoLayoutFragment>
		</html>
	);
}
