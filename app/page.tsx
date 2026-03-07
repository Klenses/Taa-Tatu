import type { Metadata } from "next";
import { HomeExportReadySection } from "@/components/home/export-ready-section";
import { HomeFeaturesSection } from "@/components/home/features-section";
import { HomeHeroSection } from "@/components/home/hero-section";
import { HomeHowItWorksSection } from "@/components/home/how-it-works-section";
import { HomeWhatWeDoSection } from "@/components/home/what-we-do-section";
import { HomeWhyBuyersChooseSection } from "@/components/home/why-buyers-choose-section";

export const metadata: Metadata = {
  title: "TaaTatu Hub",
  description:
    "TaaTatu Hub is an African FMCG exporter and African beverage supplier connecting importers to export-ready African products with structured trade execution.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeHeroSection />
      <HomeExportReadySection />
      <HomeFeaturesSection />
      <HomeWhatWeDoSection />
      <HomeWhyBuyersChooseSection />
      <HomeHowItWorksSection />
    </main>
  );
}
