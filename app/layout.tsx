import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/layout";
import { PrelineProvider } from "@/components/providers/preline-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaaTatu Hub Limited",
  description: "TaaTatu Hub Limited website for building production pages quickly",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
