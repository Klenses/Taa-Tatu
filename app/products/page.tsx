import type { Metadata } from "next";
import { ProductsBeveragesSection } from "@/components/products/beverages-section";
import { ProductsFmcgSection } from "@/components/products/fmcg-section";
import { ProductsHeroSection } from "@/components/products/hero-section";
import { ProductsPrivateLabelSection } from "@/components/products/private-label-section";

export const metadata: Metadata = {
  title: "Export-Ready African Products",
  description:
    "Explore export-ready African beverages and long shelf-life FMCG designed for reliable distribution, compliance readiness, and repeat demand.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProductsHeroSection />
      <ProductsBeveragesSection />
      <ProductsFmcgSection />
      <ProductsPrivateLabelSection />
    </main>
  );
}
