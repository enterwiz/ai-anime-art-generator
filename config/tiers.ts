import { Tier, TiersEnum } from "@/types/pricing";

const FREE_VERSION_LINK = "#Workbench";
// const PRO_VERSION_LINK = "https://forms.gle/KR8N9PpNLGwECyJt5";
// export const WAITLIST_FORM_LINK = "https://forms.gle/KR8N9PpNLGwECyJt5";
const PRO_VERSION_LINK = "/waitlist";
export const WAITLIST_FORM_LINK = "/waitlist";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free Version",
    price: "Free",
    href: FREE_VERSION_LINK,
    description:
      "Suitable for beginners, free experience of basic AI anime art generation functions.",
    features: [
      "100 credits (10 generations)",
      "Basic customization options",
      "Standard resolution outputs",
      "Basic customer support",
    ],
    buttonText: "Use Now",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Standard Version",
    href: PRO_VERSION_LINK,
    description:
      "Suitable for standard users, offering enhanced features for more detailed and personalized anime art.",
    price: "$4.9/month",
    features: [
      "All features of the Free Version",
      "500 credits/month",
      "Private generations",
      "Advanced customization options",
      "Priority customer support",
    ],
    buttonText: "Upgrade Now",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Version",
    href: WAITLIST_FORM_LINK,
    description:
      "Suitable for professional users, providing comprehensive AI anime art generation and management solutions.",
    price: "$14.9/month",
    features: [
      "All features of the Standard Version",
      "5000 credits/month",
      "Exclusive art styles",
      "Intelligent art optimization",
      "Priority feature requests",
    ],
    buttonText: "Contact Us",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_ZH = TIERS_EN;
export const TIERS_JA = TIERS_EN;
export const TIERS_AR = TIERS_EN;
export const TIERS_ES = TIERS_EN;
export const TIERS_RU = TIERS_EN;
export const TIERS_HI = TIERS_EN;

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU,
  TIERS_HI,
};

