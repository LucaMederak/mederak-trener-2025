"use client";
import React from "react";
import { fadeItem } from "@/animations/fade";
import { motion } from "framer-motion";

//components
import Container from "@/components/container/Container";

//poster
import AboutImage from "@/assets/about/natalia-about.png";

// const offerVideoLink =
//   "https://firebasestorage.googleapis.com/v0/b/natalia-stebel.appspot.com/o/courseVideos%2Fwebinar-sibo.MP4?alt=media&token=29721377-b1e1-4e84-8184-86dc0aa2c11f";

// const offerVideoLink =
//   "https://natalia-stebel.s3.eu-central-1.amazonaws.com/webinar-sibo-landing-page/webinar-sibo(1).mp4";

const offerVideoLink =
  "https://natalia-platform.b-cdn.net/webinar-sibo-landing-page/webinar-sibo.MP4";

const OfferVideo = () => {
  return (
    <section
      id="video"
      className="w-full bg-gradient-to-b from-white to-primary-50 py-8 md:py-12"
    >
      <Container>
        <motion.video
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="aspect-video w-full rounded-xl shadow-xl border border-slate-200 "
          src={offerVideoLink}
          title="Natalia Stebel - video"
          playsInline
          typeof="video/mp4"
          controls
          poster={"miniature.jpeg"}
        />
      </Container>
    </section>
  );
};

export default OfferVideo;
