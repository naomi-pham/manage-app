"use client";

import { staggerChild, staggerParent } from "@/constants/animations";
import { ServiceData } from "@/constants/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerParent}
      className="flex flex-col gap-10 md:max-w-md lg:max-w-2xl"
    >
      {ServiceData.map((item) => (
        <motion.li key={item.id} variants={staggerChild}>
          <ServiceCard item={item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ServiceList;
