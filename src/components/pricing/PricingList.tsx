"use client";

import { PricingData } from "@/constants/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import PricingCard from "./PricingCard";

const staggerPricingCards = stagger(0.1, { from: "center", startDelay: 0.15, ease: "easeOut" });

function usePricingAnimation(isInView: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".pricing-card",
      isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 600, scale: 0.3 },
      {
        duration: 0.4,
        delay: isInView ? staggerPricingCards : 0,
      },
    );
  }, [isInView]);

  return scope;
}

const PricingList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const scope = usePricingAnimation(isInView);

  return (
    <section ref={ref} className="container mx-auto mt-32 max-w-7xl px-6">
      <motion.ul ref={scope} className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {PricingData.map((item) => (
          <li key={item.id} className="pricing-card">
            <PricingCard item={item} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default PricingList;
