import type { Metadata } from "next";
import { QualityComplianceControlsSection } from "@/components/quality-compliance/controls-section";
import { QualityComplianceHeroSection } from "@/components/quality-compliance/hero-section";

export const metadata: Metadata = {
  title: "Export Quality & Compliance",
  description:
    "Supplier verification, packaging standards, traceability, and export documentation alignment for African FMCG trade.",
};

export default function QualityCompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      <QualityComplianceHeroSection />
      <QualityComplianceControlsSection />
    </main>
  );
}
