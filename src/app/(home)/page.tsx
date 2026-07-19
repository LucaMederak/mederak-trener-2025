//components
import Hero from "./components/hero/HeroProposition";
import About from "./components/about/About";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Courses from "./components/opinions/Opinions";
import { contentfulDeliveryClient } from "@/utils/contentful";
import {
  EntryArticleCollection,
  EntryArticleSkeleton,
} from "@/types/article.types";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import FounderProjects from "./components/founderProjects/FounderProjects";
import ServiceOffers from "./components/serviceOffers/ServiceOffers";
import Opinions from "./opinions/Opinions";

const getArticles = async () => {
  const articlesEntries =
    await contentfulDeliveryClient.withoutUnresolvableLinks.getEntries<EntryArticleSkeleton>(
      {
        content_type: "blog",
      }
    );

  const articles: EntryArticleCollection[] = articlesEntries.items.map(
    (item) => ({
      sys: item.sys,
      fields: item.fields,
    })
  );

  return { articles };
};

export default async function Home() {
  const { articles } = await getArticles();

  return (
    <main className="w-full">
      <Hero />
      <ServiceOffers />
      <Opinions />
      <About />
      <FounderProjects />
      <Courses />
      <Blog articles={articles} />
      <MoreInfo />
      <Contact />
    </main>
  );
}
