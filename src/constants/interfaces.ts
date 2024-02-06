export interface IServiceCard {
  id: number;
  title: string;
  desc: string;
}

export interface ITestimonialCard {
  id: number;
  author: string;
  content: string;
  avatar: string;
}

export interface IPricePerUser {
  monthly?: number;
  annually?: number;
}

export enum PRICING_TIER {
  FREE = "Free",
  STANDARD = "Standard",
  PLUS = "Plus",
}

export interface IPricingCard {
  id: number;
  title: PRICING_TIER;
  desc: string;
  features: Array<string>;
  pricePerUser?: IPricePerUser;
  team?: string;
}
