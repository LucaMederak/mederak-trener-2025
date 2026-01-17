import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://trener.mederak.com",
      lastModified: new Date(),
    },
  ];
}
