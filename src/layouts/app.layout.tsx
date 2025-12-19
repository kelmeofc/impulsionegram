import { ChatwootWidget } from "@/components/ui/chatwoot-widget";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import Script from "next/script";
import type { ReactNode } from "react";

interface ILayoutFragmentProps {
  children: ReactNode;
}

export default function AppLayoutFragment({ children }: ILayoutFragmentProps) {
  return (
    <>
      <Header />
      <div id="main-content">{children}</div>
      <ChatwootWidget />
      <Footer />
    </>
  );
}
