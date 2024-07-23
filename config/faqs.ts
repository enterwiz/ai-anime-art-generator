export const FAQS_EN = [
  {
    title: "What is AI Anime Art Generator?",
    content:
      "AI Anime Art Generator is an advanced tool that uses artificial intelligence to create high-quality anime characters and scenes. It offers customization options and a user-friendly interface for both beginners and professionals.",
  },
  {
    title: "How does AI Anime Art Generator work?",
    content:
      "The generator uses state-of-the-art machine learning algorithms to analyze and replicate the intricate details of anime art. Users can select various styles and expressions to generate unique anime artwork.",
  },
  {
    title: "Is AI Anime Art Generator free to use?",
    content:
      "AI Anime Art Generator offers a freemium plan. Basic features are free to use, but premium options are available for users who want access to advanced features and capabilities.",
  },
  {
    title: "Can I customize the generated anime art?",
    content:
      "Yes, you can personalize your creations with a variety of styles and expressions to suit your preferences and artistic vision.",
  },
  {
    title: "How fast can I generate artwork using AI Anime Art Generator?",
    content:
      "The platform is designed for fast generation, allowing you to produce stunning anime art in a matter of seconds, saving you time and effort.",
  },
  {
    title: "Can I share my creations with others?",
    content:
      "Absolutely! AI Anime Art Generator includes a community feature where you can share your artwork, receive feedback, and connect with other anime art enthusiasts.",
  },
  {
    title: "Is AI Anime Art Generator suitable for professional artists?",
    content:
      "Yes, the tool is suitable for both hobbyists and professional artists. It can be used for a variety of purposes, including character design for anime and manga, custom avatars for social media, and professional art projects.",
  },
  {
    title: "What kind of support is available if I encounter issues?",
    content:
      "AI Anime Art Generator offers customer support to help you with any issues or questions you may have. You can reach out to our support team through the platform's help section.",
  },
  {
    title: "Can I use AI Anime Art Generator on multiple devices?",
    content:
      "Yes, AI Anime Art Generator is accessible on multiple devices, including desktops, tablets, and smartphones, so you can create art wherever you are.",
  },
  {
    title: "What are the premium features available in the freemium model?",
    content:
      "Premium features may include advanced customization options, higher resolution outputs, exclusive art styles, and additional community features. Details on these features can be found on our pricing page.",
  },
];

export const FAQS_AR = FAQS_EN;
export const FAQS_ES = FAQS_EN;
export const FAQS_JA = FAQS_EN;
export const FAQS_RU = FAQS_EN;
export const FAQS_ZH = FAQS_EN;
export const FAQS_HI = FAQS_EN;

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}

export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
  FAQS_JA,
  FAQS_AR,
  FAQS_ES,
  FAQS_RU,
  FAQS_HI,
};

