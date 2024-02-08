"use client";

import { PricingData } from "@/constants/data";
import PricingCard from "./PricingCard";

const PricingList = () => {
  return (
    <section className="container mx-auto mt-32 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {PricingData.map((item) => (
            <PricingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PricingList;
