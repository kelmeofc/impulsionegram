import { AdvantagesSection } from "@/components/sections/advantages";
import { ArticlesSection } from "@/components/sections/articles";
import { BuyingProcessSection } from "@/components/sections/buying-process";
import { GuaranteeSealSection } from "@/components/sections/guarantee-seal";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { InformativeBlogSection } from "@/components/sections/informative-blog";
import AppLayoutFragment from "@/layouts/app.layout";

export default function Home() {
  return (
    <AppLayoutFragment>
      <HeroSection />
      <AdvantagesSection />
      <GuaranteeSealSection />
      <BuyingProcessSection />
      <HowItWorksSection />
      <InformativeBlogSection />
      <ArticlesSection />
    </AppLayoutFragment>
  );
}