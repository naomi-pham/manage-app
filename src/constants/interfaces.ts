export interface IServiceCard {
  id: number;
  title: string;
  desc: string;
}

export interface ITestimonialCard {
  id: number;
  author: string;
  content?: string;
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
  desc?: string;
  features: Array<string>;
  pricePerUser?: IPricePerUser;
  team?: string;
}

export interface IPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: {
    html: string;
  };
  coverPhoto: {
    url: string;
  };
}

export interface ICategory {
  title: string;
  slug: string;
  posts: IPost[];
}

export enum HEADING {
  H1,
  H2,
}

export const FIELD_TYPE = {
  INPUT: "FormInput",
  TEXT_AREA: "FormTextArea",
};

export interface FormInput {
  __typename: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}

export interface FormTextArea {
  __typename: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}

export interface IContactForm {
  title: string;
  fields?: (FormInput | FormTextArea)[];
}

export interface ISolution {
  id: string | number;
  title: string;
  slug: string;
  description: string;
}

export interface INavDropdown {
  id: string;
  navDropdown?: (IPost | ISolution)[];
}

export interface INavItem {
  id: string;
  title: string;
  slug: string;
  dropdown?: INavDropdown;
}

export interface ITeam {
  id: number;
  avatar: string;
  name: string;
  position: string;
}
