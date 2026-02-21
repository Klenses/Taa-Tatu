import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taatatuhub.com";
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/products",
    "/services",
    "/quality-compliance",
    "/logistics",
    "/rfq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
