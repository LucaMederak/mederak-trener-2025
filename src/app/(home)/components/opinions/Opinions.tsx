"use client";
import React, { useState } from "react";
import CardList from "@/components/cards/CardList";
import Image from "next/image";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";

//opinions
import Course1 from "@/assets/courses/course1.png";
import Course2 from "@/assets/courses/course2.png";
import Course3 from "@/assets/courses/course3.png";
import Course4 from "@/assets/courses/course4.png";
import Course5 from "@/assets/courses/course5.png";
import Course6 from "@/assets/courses/course6.png";

//icons
import { UnfoldVertical } from "lucide-react";

const courses = [
  { id: 15, src: Course6 },
  { id: 16, src: Course5 },
  { id: 17, src: Course4 },
  { id: 22, src: Course3 },
  { id: 23, src: Course2 },
  { id: 24, src: Course1 },
];

const Courses = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  return (
    <section id="courses" className="w-full py-8 md:py-12">
      <Container>
        <PageHeading
          title="Kursy i szkolenia"
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText="Kursy"
        />
        <CardList
          className={`relative ${
            !showAllFeatures && "overflow-hidden h-[56rem]"
          } xl:grid-cols-auto-fill-image`}
        >
          {!showAllFeatures && (
            <div
              className={`w-full h-56 absolute bottom-0 flex items-end pb-6 justify-center bg-gradient-to-t from-white via-white/50 `}
            >
              <button
                onClick={() => setShowAllFeatures(true)}
                className="mt-16 bg-white border border-slate-300 px-4 py-2 rounded-lg text-slate-600 font-semibold text-base flex items-center gap-3 hover:bg-slate-50 shadow-lg shadow-slate-200"
              >
                Pokaż wszystkie
                <UnfoldVertical className="text-slate-600 h-4 w-4" />
              </button>
            </div>
          )}

          {courses.map((course) => (
            <motion.div
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={course.id}
              className="bg-slate-100 p-4 border border-slate-200 rounded-xl"
            >
              <Image
                key={course.id}
                src={course.src}
                alt={`Kurs ${course.id}`}
                width={500}
                height={500}
                className="aspect-auto object-contain rounded-xl"
              />
            </motion.div>
          ))}
        </CardList>
      </Container>
    </section>
  );
};

export default Courses;
