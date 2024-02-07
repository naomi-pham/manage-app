"use client";

import { IconArrow } from "@/components/common/Icons";
import { TestimonialData } from "@/constants/data";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion, useInView } from "framer-motion";
import { transitionDefaultConfig } from "@/constants/animations";

const totalSlides = TestimonialData.length;

const TestimonialCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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

  // useEffect(() => {
  //   if (isInView) {
  //     setCurrentSlide(1);
  //   }
  // }, [isInView]);

  return (
    <div className="group relative my-6 mt-10 max-w-[60%] md:max-w-[calc(40%-2rem)]">
      <div className="absolute -left-20 bottom-2 z-10 flex h-[calc(100%-4rem)] items-center justify-center">
        <button
          onClick={moveToLeft}
          type="button"
          className="-rotate-180 text-primary-brightRed opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
          disabled={currentSlide === 0}
        >
          <IconArrow size={40} />
        </button>
      </div>
      <div className="absolute -right-20 bottom-2 z-10 flex h-[calc(100%-4rem)] items-center justify-center">
        <button
          onClick={moveToRight}
          type="button"
          className="text-primary-brightRed opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
          disabled={currentSlide === totalSlides - 1}
        >
          <IconArrow size={40} />
        </button>
      </div>
      <motion.ul
        ref={ref}
        animate={{
          x: `calc(-${currentSlide * 100}% - ${currentSlide * 6}rem)`,
        }}
        transition={transitionDefaultConfig}
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
