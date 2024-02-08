"use client";

import {
  fadeRightVariants,
  transitionDefaultConfig,
} from "@/constants/animations";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SectionImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transitionDefaultConfig}
      variants={fadeRightVariants}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};

export default SectionImage;
