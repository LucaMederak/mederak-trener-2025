import { Asset, AssetLink, Entry, EntryFieldTypes, EntrySys } from "contentful";
import * as RichTextType from "@contentful/rich-text-types";

type EntryArticleFields = {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  shortDescription?: EntryFieldTypes.Text;
  description?: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
};

export type EntryArticleSkeleton = {
  contentTypeId: "blog";
  fields: EntryArticleFields;
};

export type EntryArticleCollection = {
  sys: EntrySys;
  fields: {
    title: string;
    slug: string;
    shortDescription?: string;
    description?: RichTextType.Document;
    image: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> | undefined;
  };
};
