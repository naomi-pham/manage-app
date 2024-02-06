"use client";

import { IconArrow } from "@/components/common/Icons";
import { TestimonialData } from "@/constants/data";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const TestimonialCarousel = () => {
  const totalSlides = TestimonialData.length;

  const [currentSlide, setCurrentSlide] = useState(1);

  const moveToRight = () => {
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide(currentSlide + 1);
  };

  const moveToLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1);
    } else setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="group relative w-full mt-10 my-6 max-w-[calc(33%-2rem)]">
      <div className="absolute -left-16 z-10 flex h-[calc(100%-4rem)] bottom-2 items-center justify-center">
        <button
          onClick={moveToLeft}
          type="button"
          className="-rotate-180 text-neutral-darkBlue/40 opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
          disabled={currentSlide === 0}
        >
          <IconArrow size={40} />
        </button>
      </div>
      <div className="absolute -right-16 z-10 flex h-[calc(100%-4rem)] bottom-2 items-center justify-center">
        <button
          onClick={moveToRight}
          type="button"
          className="text-neutral-darkBlue/40 opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
          disabled={currentSlide === totalSlides - 1}
        >
          <IconArrow size={40} />
        </button>
      </div>
      <motion.ul
        animate={{
          x: `calc(-${currentSlide * 100}% - ${currentSlide * 6}rem)`,
        }}
        transition={{ stiffness: 0, transition: 0.65 }}
        className="mb-8 flex flex-nowrap items-center gap-24"
      >
        {TestimonialData.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
            currentSlide={currentSlide}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default TestimonialCarousel;
