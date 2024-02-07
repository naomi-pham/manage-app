import { IPricingCard, PRICING_TIER } from "@/constants/interfaces";
import React from "react";
import { IconCheck } from "../common/Icons";
import Button from "../common/Button";

const PricingCard = ({ item }: { item: IPricingCard }) => {
  const renderPreviousPricingTier = () => {
    switch (item.title) {
      case PRICING_TIER.STANDARD:
        return PRICING_TIER.FREE;
      case PRICING_TIER.PLUS:
        return PRICING_TIER.STANDARD;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col max-w-md mx-auto justify-between rounded-xl ${item.title === PRICING_TIER.STANDARD ? "scale-110 bg-primary-brightRed text-zinc-100 shadow-xl" : "border border-zinc-400"} p-10`}
    >
      <div className="space-y-3 text-center">
        <p className="text-xl font-medium">{item.title}</p>
        <p className="text-2xl font-bold">{item.desc}</p>
        {item?.team ? <p>Best for {item.team} users</p> : null}
      </div>

      {item.title === PRICING_TIER.STANDARD ? (
        <div className="mt-8 flex items-center self-center rounded-full border bg-zinc-100 text-sm">
          <button className="tex-white rounded-full bg-primary-brightRed px-4 py-1">
            Monthly
          </button>
          <button
            className={`${item.title === PRICING_TIER.STANDARD ? "text-primary-brightRed" : ""} px-4 py-1`}
          >
            Annually
          </button>
        </div>
      ) : null}

      {item.title === PRICING_TIER.PLUS ? (
        <p className="mt-8 self-center text-lg text-zinc-600">
          Annual billing only
        </p>
      ) : null}

      <div className="mt-10 flex gap-10 flex-col justify-between">
        <div className="self-center">
          {item.title !== PRICING_TIER.FREE ? (
            <p>Everything in {renderPreviousPricingTier()}, plus...</p>
          ) : null}
          <ul className="mt-1 space-y-1">
            {item?.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <span>
                  <i
                    className={`${item.title === PRICING_TIER.STANDARD ? "text-zinc-100" : "text-primary-brightRed"}`}
                  >
                    <IconCheck size={16} />
                  </i>
                </span>
                <p>{feature}</p> 
              </li>
            ))}
          </ul>
        </div>

        <Button
          intent={
            item.title === PRICING_TIER.STANDARD ? "secondary" : "primary"
          }
          shadow="none"
        >
          Get started with {item.title}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
