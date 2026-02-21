import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/layout";
import { PrelineProvider } from "@/components/providers/preline-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taatatuhub.com"),
  title: {
    default: "African FMCG Exporter | TaaTatu Hub",
    template: "%s | TaaTatu Hub",
  },
  description:
    "TaaTatu Hub is an African beverage supplier and FMCG exporter delivering export-ready products with disciplined sourcing, documentation, and logistics.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "African FMCG Exporter | TaaTatu Hub",
    description:
      "Export-ready African products for global and intra-African buyers with structured trade execution.",
    type: "website",
    url: "https://taatatuhub.com",
    siteName: "TaaTatu Hub Limited",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TaaTatu Hub Limited - African FMCG Export Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "African FMCG Exporter | TaaTatu Hub",
    description:
      "Export-ready African products delivered with structured sourcing, compliance, and logistics discipline.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=optional"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
        <PrelineProvider />
      </body>
    </html>
  );
}
