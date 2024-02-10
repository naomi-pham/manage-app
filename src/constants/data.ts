import { PRICING_TIER } from "./interfaces";

export const NavData = [
  {
    id: 0,
    title: "Pricing",
    slug: "/pricing",
  },
  {
    id: 1,
    title: "Solutions",
    slug: "/solutions",
    dropdown: [
      {
        id: 0,
        slug: "/solutions/engineering",
        title: "Engineering",
        description: "Engineering",
      },
      {
        id: 1,
        slug: "/solutions/design",
        title: "Design",
        description: "Design",
      },
      {
        id: 2,
        slug: "/solutions/product-management",
        title: "Product management",
        description: "Product management",
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    slug: "/about-us",
  },
  {
    id: 3,
    title: "Careers",
    slug: "/careers",
  },
  {
    id: 4,
    title: "Blog",
    slug: "/blog",
  },
];

export const ServiceData = [
  {
    id: 0,
    title: "Track company-wide progress",
    desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 1,
    title: "Advanced built-in reports",
    desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 2,
    title: "Everything you need in one place",
    desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const TestimonialData = [
  {
    id: 0,
    avatar: "/landing/avatar-anisha.png",
    author: "Anisha Li",
    content:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 1,
    avatar: "/landing/avatar-ali.png",
    author: "Ali Bravo",
    content:
      "We've been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused",
  },
  {
    id: 2,
    avatar: "/landing/avatar-richard.png",
    author: "Richard Watts",
    content:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    id: 3,
    avatar: "/landing/avatar-shanai.png",
    author: "Shanai Gough",
    content:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive",
  },
];

export const FooterLinks = {
  left: [
    {
      id: 0,
      label: "Home",
      url: "/home",
    },
    {
      id: 1,
      label: "Pricing",
      url: "/pricing",
    },
    {
      id: 2,
      label: "Solutions",
      url: "/solutions",
    },
    {
      id: 3,
      label: "About Us",
      url: "/about-us",
    },
  ],
  right: [
    {
      id: 0,
      label: "Careers",
      url: "/careers",
    },
    {
      id: 1,
      label: "Pricing",
      url: "/pricing",
    },
    {
      id: 2,
      label: "Privacy Policy",
      url: "/privacy-policy",
    },
  ],
};

export const IconData = [
  {
    id: 0,
    url: "/",
    label: "facebook",
    icon: "landing/icon-facebook.svg",
  },
  {
    id: 1,
    url: "/",
    label: "youtube",
    icon: "landing/icon-youtube.svg",
  },
  {
    id: 2,
    url: "/",
    label: "twitter",
    icon: "landing/icon-twitter.svg",
  },
  {
    id: 3,
    url: "/",
    label: "pinterest",
    icon: "landing/icon-pinterest.svg",
  },
  {
    id: 4,
    url: "/",
    label: "instagram",
    icon: "landing/icon-instagram.svg",
  },
];

export const PricingData = [
  {
    id: 0,
    title: PRICING_TIER.FREE,
    desc: "Free for everyone",
    features: [
      "Unlimited members",
      "250 issues (+unlimited archived)",
      "Import and export",
      "All integrations, APIs, and webhooks",
    ],
  },
  {
    id: 1,
    title: PRICING_TIER.STANDARD,
    features: [
      "Unlimited issues and file uploads",
      "Guest accounts, private teams",
      "Admin roles",
    ],
    pricePerUser: {
      monthly: 10,
      annually: 8,
    },
    team: "1-50",
  },
  {
    id: 2,
    title: PRICING_TIER.PLUS,
    features: [
      "SAML / Single Sign On",
      "Advanced authentication controls",
      "Advanced authentication controls",
      "Manage insights",
      "Manage asks",
      "Priority support",
    ],
    pricePerUser: {
      monthly: 14,
      annually: 14,
    },
    team: "50+",
  },
];
