"use client";

import {
  fadeUpVariants,
  transitionDefaultConfig,
} from "@/constants/animations";
import { HEADING } from "@/constants/interfaces";
import { MotionConfig, motion, useInView } from "framer-motion";
import { useRef } from "react";
import NavigateToPage from "../../common/navigation/NavigateToPage";

const SectionTitle = ({
  heading,
  title,
  subtitle,
  hasButton,
  accentBg,
}: {
  heading: HEADING;
  title: string;
  subtitle?: string;
  hasButton?: boolean;
  accentBg?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionConfig transition={transitionDefaultConfig}>
      <div
        ref={ref}
        className={`flex gap-6 text-center md:text-left ${accentBg ? "w-full flex-row items-center justify-between text-white" : "flex-col"}`}
      >
        <div className="space-y-6">
          {heading === HEADING.H1 ? (
            <motion.h1
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="title text-4xl font-bold leading-tight md:max-w-md md:text-5xl"
            >
              {title}
            </motion.h1>
          ) : (
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="title text-3xl font-bold leading-tight md:max-w-md md:text-4xl"
            >
              {title}
            </motion.h2>
          )}
          {subtitle ? (
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ delay: 0.4 }}
              className="subtitle text-lg text-neutral-darkBlue/60 md:max-w-sm"
            >
              {subtitle}
            </motion.p>
          ) : null}
        </div>
        {hasButton ? (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ delay: 0.8 }}
          >
            <NavigateToPage
              url="/contact"
              title="Get started"
              intent={accentBg ? "secondary" : "primary"}
            />
          </motion.div>
        ) : null}
      </div>
    </MotionConfig>
  );
};

export default SectionTitle;
