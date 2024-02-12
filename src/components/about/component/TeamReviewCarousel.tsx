"use client";

import { IconArrow } from "@/components/common/Icons";
import { TestimonialData } from "@/constants/data";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamReviewCard from "./TeamReviewCard";

const totalSlides = TestimonialData.length;

const TeamReviewCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselVariants = {
    enter: (direction: number) => ({
      x: `${100 * direction}%`,
      opacity: 0,
      scale: 1.2,
    }),
    middle: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: `-${100 * direction}%`,
      opacity: 0,
      scale: 1,
    }),
  };

  const moveToRight = () => {
    enableAnimation();
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    setDirection(1);
  };

  const moveToLeft = () => {
    enableAnimation();
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1);
    } else setCurrentSlide(currentSlide - 1);
    setDirection(-1);
  };

  const cancelAnimation = () => {
    setIsAnimating(false);
  };

  const enableAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isInView) {
      setCurrentSlide(1);
    }
  }, [isInView]);

  return (
    <div className="group relative mx-auto my-6 mt-10 max-w-4xl">
      <MotionConfig
        transition={{ duration: 0.65, ease: [0.56, 0.03, 0.12, 1.04] }}
      >
        <div className="overflow-hidden">
          <AnimatePresence
            initial={false}
            mode="popLayout"
            custom={direction}
            onExitComplete={cancelAnimation}
          >
            <motion.div
              key={currentSlide}
              variants={carouselVariants}
              custom={direction}
              animate="middle"
              initial="enter"
              exit="exit"
              className="overflow-hidden"
            >
              <TeamReviewCard
                currentSlide={currentSlide}
                item={TestimonialData[currentSlide]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>

      <div className="absolute bottom-2 left-0 z-10 flex h-[calc(100%-4rem)] items-center justify-center lg:-left-12">
        <button
          onClick={moveToLeft}
          type="button"
          className="-rotate-180 text-primary-brightRed opacity-10 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
        >
          <IconArrow size={40} />
        </button>
      </div>
      <div className="absolute bottom-2 right-0 z-10 flex h-[calc(100%-4rem)] items-center justify-center lg:-right-12">
        <button
          onClick={moveToRight}
          type="button"
          className="text-primary-brightRed opacity-0 disabled:text-neutral-darkBlue/10 group-hover:opacity-100"
        >
          <IconArrow size={40} />
        </button>
      </div>
    </div>
  );
};

export default TeamReviewCarousel;
