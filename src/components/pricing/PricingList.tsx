import { PricingData } from "@/constants/data";
import React from "react";
import PricingCard from "./PricingCard";

const PricingList = () => {
  return (
    <section className="container mx-auto mt-32 max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PricingData.map((item) => (
          <PricingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PricingList;
