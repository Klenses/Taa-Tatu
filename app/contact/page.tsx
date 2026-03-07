import type { Metadata } from "next";
import { ContactDetailsSection } from "@/components/contact/details-section";
import { ContactHeroSection } from "@/components/contact/hero-section";

export const metadata: Metadata = {
  title: "Contact TaaTatu Hub",
  description:
    "Contact TaaTatu Hub Limited for African export supply, sourcing, consolidation support, and buyer-focused trade coordination.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHeroSection />
      <ContactDetailsSection />
    </main>
  );
}
