import type { MetadataRoute } from "next";
import { serviceOffers } from "@/data/serviceOffers";
import { EntryArticleSkeleton } from "@/types/article.types";
import { contentfulDeliveryClient } from "@/utils/contentful";

const SITE_URL = "https://trener.mederak.com";

const route = (
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  lastModified: Date = new Date()
): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

const getBlogRoutes = async (): Promise<MetadataRoute.Sitemap> => {
  try {
    const entries =
      await contentfulDeliveryClient.withoutUnresolvableLinks.getEntries<EntryArticleSkeleton>(
        {
          content_type: "blog",
        }
      );

    return entries.items.map((item) =>
      route(
        `/blog/${item.fields.slug}`,
        0.6,
        "monthly",
        new Date(item.sys.updatedAt)
      )
    );
  } catch {
    return [];
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const offerRoutes = serviceOffers.map((offer) =>
    route(`/oferta/${offer.slug}`, 0.8)
  );
  const blogRoutes = await getBlogRoutes();

  return [
    route("/", 1, "weekly"),
    ...offerRoutes,
    ...blogRoutes,
    route("/privacy-policy", 0.2, "yearly"),
  ];
}
