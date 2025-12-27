import { MetadataRoute } from "next";
import data from "@/data/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahlane.vercel.app";
  const lastModified = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic routes for work projects
  const workProjects = data.projects;

  const dynamicRoutes: MetadataRoute.Sitemap = workProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
