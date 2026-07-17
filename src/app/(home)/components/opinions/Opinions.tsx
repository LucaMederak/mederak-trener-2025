"use client";
import React, { useState } from "react";
import CardList from "@/components/cards/CardList";
import Image from "next/image";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";

//opinions
import Course12 from "@/assets/courses/course12.png";
import Course11 from "@/assets/courses/course11.jpg";
import Course1 from "@/assets/courses/course1.png";
import Course2 from "@/assets/courses/course2.png";
import Course3 from "@/assets/courses/course3.png";
import Course4 from "@/assets/courses/course4.png";
import Course5 from "@/assets/courses/course5.png";
import Course6 from "@/assets/courses/course6.png";
import Course7 from "@/assets/courses/course7.png";
import Course8 from "@/assets/courses/course8.jpg";
import Course9 from "@/assets/courses/course9.png";
import Course10 from "@/assets/courses/course10.png";

//icons
import { UnfoldVertical } from "lucide-react";

const courses = [
  { id: 12, src: Course12 },
  { id: 11, src: Course11 },
  { id: 7, src: Course7 },
  { id: 1, src: Course1 },
  { id: 2, src: Course2 },
  { id: 6, src: Course6 },
  { id: 5, src: Course5 },
  { id: 4, src: Course4 },
  { id: 8, src: Course8 },
  { id: 3, src: Course3 },
  { id: 10, src: Course10 },
  { id: 9, src: Course9 },
];

const Courses = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  return (
    <section id="courses" className="w-full py-8 md:py-12 bg-primary-50">
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
              className={`w-full h-56 absolute bottom-0 flex items-end pb-6 justify-center bg-gradient-to-t from-primary-50 via-primary-50/50 `}
            >
              <button
                onClick={() => setShowAllFeatures(true)}
                className="mt-16 bg-white border border-primary-200 px-4 py-2 rounded-lg text-primary-900 font-semibold text-base flex items-center gap-3 hover:bg-primary-50 shadow-lg shadow-primary-100"
              >
                Pokaż wszystkie
                <UnfoldVertical className="text-primary-900 h-4 w-4" />
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
              className="bg-white p-4 border border-primary-100 rounded-xl"
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
