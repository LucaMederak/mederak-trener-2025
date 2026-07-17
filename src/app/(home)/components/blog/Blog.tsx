"use client";
import CardList from "@/components/cards/CardList";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { EntryArticleCollection } from "@/types/article.types";
import React from "react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";
import Image from "next/image";
import Button, { sizeStyles, variantStyles } from "@/components/button/Button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Blog = ({ articles }: { articles: EntryArticleCollection[] }) => {
  return (
    <>
      <section id="blog" className="w-full py-8 md:py-12">
        <Container>
          <PageHeading
            title="Zapoznaj się z wpisami na blogu"
            description="Artykuły dotyczące m.in planowania żywienia, suplementacji oraz różnych tematów związanych z treningiem"
            headerType="h2"
            position="center"
            badgeType="default"
            badgeText="Blog"
          />
          <CardList className={`relative xl:grid-cols-auto-fill-image`}>
            {articles.map((article) => (
              <motion.div
                variants={fadeItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={article.sys.id}
                className="bg-primary-50 p-4 border border-primary-100 rounded-xl flex items-center justify-start flex-col gap-4"
              >
                {article.fields.image?.fields.file?.url && (
                  <Image
                    key={article.sys.id}
                    src={`https:` + article.fields.image?.fields.file?.url}
                    alt={`Artykuł ${article.fields.title}`}
                    width={500}
                    height={500}
                    className="aspect-video object-cover rounded-xl"
                  />
                )}
                <h2 className="text-blue-950 font-semibold text-2xl text-center">
                  {article.fields.title}
                </h2>
                <p className="text-blue-950 font-normal text-base text-center line-clamp-5">
                  {article.fields.shortDescription}
                </p>
                <Link
                  href={`/blog/${article.fields.slug}`}
                  className=" bg-white border border-primary-200 px-4 py-2 rounded-lg text-primary-900 font-semibold text-sm flex items-center gap-3 hover:bg-primary-50"
                >
                  Więcej
                </Link>
              </motion.div>
            ))}
          </CardList>
        </Container>
      </section>
    </>
  );
};

export default Blog;
