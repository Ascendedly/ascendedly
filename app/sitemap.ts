import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blogsData";
import { projectSlugs } from "@/data/projectsData";
import { serviceSlugs } from "@/data/servicesData";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/projects",
    "/blogs",
    "/contact-us",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
