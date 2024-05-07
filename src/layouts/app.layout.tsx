import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import React from "react";

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
