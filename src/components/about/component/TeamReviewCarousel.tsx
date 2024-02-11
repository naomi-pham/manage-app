"use client";

import { IconArrow } from "@/components/common/Icons";
import { transitionDefaultConfig } from "@/constants/animations";
import { TestimonialData } from "@/constants/data";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamReviewCard from "./TeamReviewCard";

const totalSlides = TestimonialData.length;

const TeamReviewCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    if (isInView) {
      setCurrentSlide(1);
    }
  }, [isInView]);

  return (
    <div className="group relative my-6 mt-10 max-w-[80%] mx-auto">
      <div className="absolute -left-60 bottom-2 z-10 flex h-[calc(100%-4rem)] items-center justify-center">
        <button
          onClick={moveToLeft}
          type="button"
          className="-rotate-180 text-primary-brightRed opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
          disabled={currentSlide === 0}
        >
          <IconArrow size={40} />
        </button>
      </div>
      <div className="absolute -right-60 bottom-2 z-10 flex h-[calc(100%-4rem)] items-center justify-center">
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
          x: `calc(-${currentSlide * 100}% - ${currentSlide * 10}rem)`,
        }}
        transition={transitionDefaultConfig}
        className="mb-8 flex flex-nowrap items-center gap-40"
      >
        {TestimonialData.map((item) => (
          <TeamReviewCard
            key={item.id}
            item={item}
            currentSlide={currentSlide}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default TeamReviewCarousel;
