import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { PackageContext } from "@/context/useContext";

interface ILayoutFragmentProps {
  children: React.ReactNode;
}

export default function AppLayoutFragment({ children }: ILayoutFragmentProps) {
  return (
    <>
     
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
