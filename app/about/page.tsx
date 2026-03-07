import type { Metadata } from "next";
import { AboutFocusSection } from "@/components/about/focus-section";
import { AboutIntroSection } from "@/components/about/intro-section";

export const metadata: Metadata = {
  title: "African Sourcing Hub",
  description:
    "TaaTatu Hub is an African export company and sourcing hub built for certainty in supply, documentation, timelines, and execution.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutIntroSection />
      <AboutFocusSection />
    </main>
  );
}
