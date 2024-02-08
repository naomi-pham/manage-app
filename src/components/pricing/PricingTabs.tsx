"use client";

import { IPricingCard, PRICING_TIER } from "@/constants/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [{ id: "Monthly" }, { id: "Annually" }];

function PricingTabs({ item }: { item: IPricingCard }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="flex flex-col justify-center gap-4 text-center">
      <p className="text-2xl font-bold">
        $
        {activeTab === "Monthly"
          ? item.pricePerUser?.monthly
          : item.pricePerUser?.annually}{" "}
        per month
      </p>

      <p>Best for {item.team} users</p>

      {PRICING_TIER.STANDARD === item.title ? (
        <div className="relative flex items-center self-center rounded-full border bg-zinc-100 text-sm">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "text-white" : "text-primary-brightRed"
                } relative z-20 rounded-full px-4 py-1`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-10 rounded-full bg-primary-brightRed"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                  />
                )}
                {tab.id}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="self-center text-lg text-zinc-600">Annual billing only</p>
      )}
    </div>
  );
}

export default PricingTabs;
