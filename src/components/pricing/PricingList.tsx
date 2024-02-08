"use client";

import { PricingData } from "@/constants/data";
import PricingCard from "./PricingCard";

const PricingList = () => {
  return (
    <section className="container mx-auto mt-16 md:mt-24 max-w-7xl px-6">
      <div className="grid grid-cols-1 items-start gap-x-10 gap-y-16 md:grid-cols-3">
        {PricingData.map((item) => (
            <PricingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PricingList;
