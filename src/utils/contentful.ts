import { createClient } from "contentful";

export const contentfulDeliveryClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_KEY as string,
});
