import React, { Suspense } from "react";
import { contentfulDeliveryClient } from "@/utils/contentful";
import { EntryArticleSkeleton } from "@/types/article.types";

//contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextRenderOptions } from "@/utils/contentfulRichText/RichTextRender";
import PageHeading from "@/components/pageHeading/PageHeading";
import Image from "next/image";
import Container from "@/components/container/Container";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const entries =
    await contentfulDeliveryClient.getEntries<EntryArticleSkeleton>({
      content_type: "blog",
    });

  return entries.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

const getArticle = async (slug: string) => {
  const articlesEntries =
    await contentfulDeliveryClient.withoutUnresolvableLinks.getEntries<EntryArticleSkeleton>(
      {
        content_type: "blog",
        "fields.slug": slug,
      }
    );

  const articleEntry = articlesEntries.items[0];

  return {
    article: {
      sys: articleEntry.sys,
      fields: articleEntry.fields,
    },
  };
};

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { article } = await getArticle((await params).slug);

  return (
    <main className="w-full">
      <section className="w-full py-8 md:py-12">
        <Container>
          {/* <Suspense fallback={<SkeletonLoadingGrid />}></Suspense> */}
          <PageHeading
            title={article.fields.title}
            headerType="h2"
            position="center"
            badgeType="default"
            badgeText="Artykuł"
          />
          {article.fields.image?.fields.file?.url && (
            <Image
              src={"https:" + article.fields.image?.fields.file?.url}
              alt={article.fields.title}
              width={1200}
              height={800}
              className=" object-cover aspect-video rounded-2xl"
            />
          )}
          <div className="mt-6 flex items-start justify-start flex-col w-full gap-4 text-blue-950 [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>h1]:font-bold [&>h2]:font-semibold [&>h3]:font-semibold [&>p]:text-lg [&>p]:font-normal [&>ul]:list-disc">
            {article.fields.description &&
              documentToReactComponents(
                article.fields.description,
                richTextRenderOptions as any
              )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Article;
