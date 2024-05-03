import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import React from "react";
import Head from "next/head";

interface ILayoutFragmentProps {
  children: React.ReactNode;
}

export default function AppLayoutFragment({ children }: ILayoutFragmentProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
