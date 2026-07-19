import { serviceOffers, getServiceOffer } from "@/data/serviceOffers";
import { notFound } from "next/navigation";
import OfferPageContent from "./OfferPageContent";

type OfferPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () =>
  serviceOffers.map((offer) => ({
    slug: offer.slug,
  }));

export const generateMetadata = async ({ params }: OfferPageProps) => {
  const { slug } = await params;
  const offer = getServiceOffer(slug);

  if (!offer) {
    return {
      title: "Oferta | Łukasz Męderak",
    };
  }

  return {
    title: `${offer.shortTitle} | Łukasz Męderak`,
    description: offer.description,
  };
};

const OfferPage = async ({ params }: OfferPageProps) => {
  const { slug } = await params;
  const offer = getServiceOffer(slug);

  if (!offer) {
    notFound();
  }

  return <OfferPageContent offer={offer} />;
};

export default OfferPage;
