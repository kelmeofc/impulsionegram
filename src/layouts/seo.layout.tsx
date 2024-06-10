import { Metadata } from "next";
import React from "react";
import Script from "next/script";
interface ILayoutFragmentProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  openGraph: {
    title: 'Crescer no Instagram é difícil e demorado? Não mais!',
    description: 'O ImpulsioneGram é o melhor site para você comprar seguidores reais e brasileiros e crescer seu perfil em poucos cliques.',
    url: 'https://impulsionegram.com.br',
    siteName: 'ImpulsioneGram',
    images: [
      {
        url: 'https://impulsionegram.com.br/images/seo/opengraph-image.jpeg',
        width: 1000,
        height: 500,
      },
      {
        url: 'https://impulsionegram.com.br/images/seo/opengraph-image.jpeg',
        width: 1000,
        height: 500,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function SeoLayoutFragment({ children }: ILayoutFragmentProps) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Comprar Seguidores, Curtidas, Visualizações e Comentários no Instagram",
    image: "https://impulsionegram.com.br/icon.avif",
    description:
      "Crescer no Instagram é difícil e demorado? Não mais! O ImpulsioneGram é o melhor site para você comprar seguidores, curtidas, visualizações e comentários, reais e brasileiros, para crescer seu perfil em poucos cliques",
    brand: {
      "@type": "Brand",
      name: "ImpulsioneGram",
    },
    offers: {
      "@type": "AggregateOffer",
      url: "https://www.impulsionegram.com.br/",
      priceCurrency: "BRL",
      lowPrice: "19",
      highPrice: "897",
      offerCount: "7",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "100",
      bestRating: "100",
      worstRating: "19",
      ratingCount: "8",
      reviewCount: "8",
    },
    review: [
      {
        "@type": "Review",
        name: "Consegui mais parcerias!",
        reviewBody:
          "Antes era muito difícil conseguir seguidores e parcerias, mas desde o dia que comecei a usar o ImpulsioneGram meu Instagram mudou muito e ganhou mais visibilidade.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2023-11-01",
        author: { "@type": "Person", name: "Tainá Montenegro" },
        publisher: { "@type": "Organization", name: "@richelly_groomer" },
      },
      {
        "@type": "Review",
        name: "São perfis reais e brasileiros!",
        reviewBody:
          "Fiquei muito satisfeito com o atendimento do ImpulsioneGram e espero que outros usuários possam se beneficiar dos serviços. O atendimento on-line é bem ágil e satisfatório, vale a pena conhecer mais sobre como funciona o ImpulsioneGram para quem precisa das redes sociais, sobretudo no que se refere aos negócios.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2024-02-02",
        author: { "@type": "Person", name: "Marcelo Sardinha" },
        publisher: { "@type": "Organization", name: "@eventos__de__ouro" },
      },
      {
        "@type": "Review",
        name: "Ganho seguidores orgânicos!",
        reviewBody:
          "Passava horas e horas tentando ganhar seguidores no Instagram mas só conseguia uns 15 a 20 seguidores por dia. Pesquisando no Google encontrei esse site e consegui finalmente ganhar mais de 300 seguidores por dia. Isso me ajudou muito pra aparecer na aba explorar e começar a ganhar seguidores orgânicos, sem precisar perder meu tempo. Não vivo mais sem",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2024-03-07",
        author: { "@type": "Person", name: "Rafaela Martin" },
        publisher: { "@type": "Organization", name: "Digital Influencer" },
      },
      {
        "@type": "Review",
        name: "Consegui lotar a agenda do mês",
        reviewBody:
          "Antes eu tinha muita dificuldade em conseguir clientes, não bastava ter um feed bonito, com postagens bem produzidas era preciso ter mais curtidas e seguidores. Foi graças a uma indicação que descobri o impulsionegram e finalmente consegui lotar minha agenda mês após mês. Obrigada pela ajuda!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2024-01-01",
        author: { "@type": "Person", name: "Taise" },
        publisher: { "@type": "Organization", name: "@pravoceunhas" },
      },
      {
        "@type": "Review",
        name: "Seguidores reais e entrega rápida",
        reviewBody:
          "Sempre precisei de um perfil bombado porque eu trabalho com o Instagram, e isso gastava muito meu tempo, graças ao Impulsionegram.com.br eu consegui mudar esse jogo e eles me entregaram  em questão de minutos mais de 13 mil seguidores, são perfis reais e brasileiros interagindo com meu perfil!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2024-01-01",
        author: { "@type": "Person", name: "Rayssa Hungria" },
        publisher: { "@type": "Organization", name: "@rayssahungria" },
      },
      {
        "@type": "Review",
        name: "Site que entrega o que promete",
        reviewBody:
          "Achei o Impulsionegram no Google e ali eu vi que o site era famoso, de confiança, que os seguidores eram selecionados, tudo brasileiro com foto de perfil certinho e tal, fora isso eu achei bem barato, então nem pensei 2 vezes, fechei e graças ao trabalho do Impulsionegram eu bombei meu perfil mesmo.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2023-04-01",
        author: { "@type": "Person", name: "Juliana Oliveira" },
        publisher: { "@type": "Organization", name: "@julianaoliveira.br" },
      },
      {
        "@type": "Review",
        name: "Tenho mais credibilidade",
        reviewBody:
          "“Trabalho com eventos há bastante tempo e ter encontrado o Impulsionegram foi uma baita ajuda pois consegui tanto mais seguidores, como mais curtidas e comentários nas minhas postagens, agora meu perfil passa a credibilidade que eu mereço para fechar mais e mais parcerias!”",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2024-01-11",
        author: { "@type": "Person", name: "Giovani Teles" },
        publisher: { "@type": "Organization", name: "@giovanitelesoficial" },
      },
      {
        "@type": "Review",
        name: "Comprei 10 mil seguidores",
        reviewBody:
          "“Como nutricionista, sempre busquei formas de expandir meus serviços e foi aí que eu encontrei o site brasileiro ImpulsioneGram.com.br, consegui com a ajuda do site ganhar mais de 10 mil seguidores!”",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "100",
          bestRating: "100",
          worstRating: "19",
        },
        datePublished: "2023-09-04",
        author: { "@type": "Person", name: "Luciana Sabbag" },
        publisher: { "@type": "Organization", name: "@nutriluciaespada" },
      },
    ],
  };

  return (
    <>
    
    {children}

      <Script
        id="schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />


    </>
  );
}
