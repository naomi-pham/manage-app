import { IPricingCard, PRICING_TIER } from "@/constants/interfaces";
import Button from "../common/Button";
import { IconCheck } from "../common/Icons";
import PricingTabs from "./PricingTabs";

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
      className={`mx-auto flex max-w-md flex-col rounded-xl ${item.title === PRICING_TIER.STANDARD ? "scale-110 bg-primary-brightRed text-zinc-100 shadow-xl" : "border border-zinc-400"} p-10`}
    >
      <div className="space-y-4 text-center">
        <p className="text-xl font-medium">{item.title}</p>

        {item.title !== PRICING_TIER.FREE ? (
          <PricingTabs item={item} />
        ) : (
          <p className="text-center text-2xl font-bold">{item.desc}</p>
        )}
      </div>

      <div className="mt-10 flex flex-col justify-between gap-10">
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
        >
          Get started with {item.title}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
