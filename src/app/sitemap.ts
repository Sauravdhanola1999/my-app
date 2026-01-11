import { MetadataRoute } from "next";

const baseUrl = "https://colourfullhomes.com";

/**
 * STATIC ROUTES
 */
const staticRoutes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/blogs",
];

/**
 * SERVICE PAGES
 */
const serviceRoutes = [
  "/services/home-painting",
  "/services/waterproofing",
  "/services/wall-textures",
  "/services/wallpapers-panels",
  "/services/wood-polish",
  "/services/furniture-design",
];

/**
 * BLOG POSTS (dynamic slugs)
 * In real apps, fetch these from DB or CMS
 */
const blogSlugs = [
  "choosing-right-paint-colors",
  "furniture-care-tips",
  "home-renovation-tips",
  "painting-cost",
  "wall-textures",
  "waterproofing-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Static pages
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
    })),

    // Services
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Blog posts
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.64,
    })),
  ];
}
