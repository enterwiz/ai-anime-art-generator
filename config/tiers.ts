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

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费版",
    price: "免费",
    href: FREE_VERSION_LINK,
    description: "适合初学者，免费体验基本的AI动漫艺术生成功能。",
    features: [
      "100点积分（10次生成）",
      "基本自定义选项",
      "标准分辨率输出",
      "基本客户支持",
    ],
    buttonText: "立即使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "标准版",
    href: PRO_VERSION_LINK,
    description:
      "适合标准用户，提供增强功能，用于更详细和个性化的动漫艺术创作。",
    price: "每月 $4.9",
    features: [
      "包含免费版所有功能",
      "每月500点积分",
      "私密生成",
      "高级自定义选项",
      "优先客户支持",
    ],
    buttonText: "立即升级",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "高级版",
    href: WAITLIST_FORM_LINK,
    description: "适合专业用户，提供全面的AI动漫艺术生成和管理解决方案。",
    price: "每月 $14.9",
    features: [
      "包含标准版所有功能",
      "每月5000点积分",
      "独家艺术风格",
      "智能艺术优化",
      "优先功能请求",
    ],
    buttonText: "联系我们",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "無料版",
    price: "無料",
    href: FREE_VERSION_LINK,
    description:
      "初心者向け、基本的なAIアニメアート生成機能を無料で体験できます。",
    features: [
      "100クレジット（10回の生成）",
      "基本的なカスタマイズオプション",
      "標準解像度の出力",
      "基本的なカスタマーサポート",
    ],
    buttonText: "今すぐ使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "スタンダード版",
    href: PRO_VERSION_LINK,
    description:
      "標準ユーザー向け、より詳細でパーソナライズされたアニメアートのための拡張機能を提供します。",
    price: "月額 $4.9",
    features: [
      "無料版のすべての機能",
      "月500クレジット",
      "プライベート生成",
      "高度なカスタマイズオプション",
      "優先カスタマーサポート",
    ],
    buttonText: "今すぐアップグレード",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "プレミアム版",
    href: WAITLIST_FORM_LINK,
    description:
      "プロユーザー向け、包括的なAIアニメアート生成と管理ソリューションを提供します。",
    price: "月額 $14.9",
    features: [
      "スタンダード版のすべての機能",
      "月5000クレジット",
      "独占アートスタイル",
      "インテリジェントアート最適化",
      "優先機能リクエスト",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "النسخة المجانية",
    price: "مجاناً",
    href: FREE_VERSION_LINK,
    description:
      "مناسبة للمبتدئين، تجربة مجانية لوظائف توليد الفن الأنمي الأساسية بالذكاء الاصطناعي.",
    features: [
      "100 رصيد (10 عمليات توليد)",
      "خيارات تخصيص أساسية",
      "مخرجات بدقة قياسية",
      "دعم عملاء أساسي",
    ],
    buttonText: "استخدم الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "النسخة القياسية",
    href: PRO_VERSION_LINK,
    description:
      "مناسبة للمستخدمين القياسيين، توفر ميزات محسنة لفن أنمي أكثر تفصيلاً وتخصيصاً.",
    price: "$4.9/شهرياً",
    features: [
      "جميع ميزات النسخة المجانية",
      "500 رصيد/شهرياً",
      "توليد خاص",
      "خيارات تخصيص متقدمة",
      "دعم عملاء ذو أولوية",
    ],
    buttonText: "الترقية الآن",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "النسخة المتميزة",
    href: WAITLIST_FORM_LINK,
    description:
      "مناسبة للمستخدمين المحترفين، توفر حلولاً شاملة لتوليد وإدارة فن الأنمي بالذكاء الاصطناعي.",
    price: "$14.9/شهرياً",
    features: [
      "جميع ميزات النسخة القياسية",
      "5000 رصيد/شهرياً",
      "أنماط فنية حصرية",
      "تحسين ذكي للفن",
      "طلبات ميزات ذات أولوية",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Versión Gratuita",
    price: "Gratis",
    href: FREE_VERSION_LINK,
    description:
      "Adecuada para principiantes, experiencia gratuita de funciones básicas de generación de arte anime con IA.",
    features: [
      "100 créditos (10 generaciones)",
      "Opciones básicas de personalización",
      "Salidas de resolución estándar",
      "Soporte al cliente básico",
    ],
    buttonText: "Usar Ahora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Versión Estándar",
    href: PRO_VERSION_LINK,
    description:
      "Adecuada para usuarios estándar, ofrece funciones mejoradas para arte anime más detallado y personalizado.",
    price: "$4.9/mes",
    features: [
      "Todas las funciones de la Versión Gratuita",
      "500 créditos/mes",
      "Generaciones privadas",
      "Opciones avanzadas de personalización",
      "Soporte al cliente prioritario",
    ],
    buttonText: "Actualizar Ahora",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Versión Premium",
    href: WAITLIST_FORM_LINK,
    description:
      "Adecuada para usuarios profesionales, proporciona soluciones integrales de generación y gestión de arte anime con IA.",
    price: "$14.9/mes",
    features: [
      "Todas las funciones de la Versión Estándar",
      "5000 créditos/mes",
      "Estilos de arte exclusivos",
      "Optimización inteligente del arte",
      "Solicitudes de funciones prioritarias",
    ],
    buttonText: "Contáctanos",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатная версия",
    price: "Бесплатно",
    href: FREE_VERSION_LINK,
    description:
      "Подходит для начинающих, бесплатный опыт использования базовых функций генерации аниме-арта с помощью ИИ.",
    features: [
      "100 кредитов (10 генераций)",
      "Базовые настройки персонализации",
      "Стандартное разрешение выходных изображений",
      "Базовая поддержка клиентов",
    ],
    buttonText: "Использовать сейчас",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Стандартная версия",
    href: PRO_VERSION_LINK,
    description:
      "Подходит для стандартных пользователей, предлагает расширенные функции для более детального и персонализированного аниме-арта.",
    price: "$4.9/месяц",
    features: [
      "Все функции Бесплатной версии",
      "500 кредитов/месяц",
      "Приватные генерации",
      "Расширенные настройки персонализации",
      "Приоритетная поддержка клиентов",
    ],
    buttonText: "Обновить сейчас",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Премиум версия",
    href: WAITLIST_FORM_LINK,
    description:
      "Подходит для профессиональных пользователей, предоставляет комплексные решения для генерации и управления аниме-артом с помощью ИИ.",
    price: "$14.9/месяц",
    features: [
      "Все функции Стандартной версии",
      "5000 кредитов/месяц",
      "Эксклюзивные стили арта",
      "Интеллектуальная оптимизация арта",
      "Приоритетные запросы на новые функции",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

export const TIERS_HI: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "मुफ्त संस्करण",
    price: "मुफ्त",
    href: FREE_VERSION_LINK,
    description:
      "शुरुआती उपयोगकर्ताओं के लिए उपयुक्त, बुनियादी AI एनीमे कला निर्माण कार्यों का मुफ्त अनुभव।",
    features: [
      "100 क्रेडिट (10 जनरेशन)",
      "बुनियादी अनुकूलन विकल्प",
      "मानक रिज़ॉल्यूशन आउटपुट",
      "बुनियादी ग्राहक सहायता",
    ],
    buttonText: "अभी उपयोग करें",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "मानक संस्करण",
    href: PRO_VERSION_LINK,
    description:
      "मानक उपयोगकर्ताओं के लिए उपयुक्त, अधिक विस्तृत और व्यक्तिगत एनीमे कला के लिए उन्नत सुविधाएँ प्रदान करता है।",
    price: "₹399/माह",
    features: [
      "मुफ्त संस्करण की सभी सुविधाएँ",
      "500 क्रेडिट/माह",
      "निजी जनरेशन",
      "उन्नत अनुकूलन विकल्प",
      "प्राथमिकता ग्राहक सहायता",
    ],
    buttonText: "अभी अपग्रेड करें",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "प्रीमियम संस्करण",
    href: WAITLIST_FORM_LINK,
    description:
      "पेशेवर उपयोगकर्ताओं के लिए उपयुक्त, व्यापक AI एनीमे कला निर्माण और प्रबंधन समाधान प्रदान करता है।",
    price: "₹1199/माह",
    features: [
      "मानक संस्करण की सभी सुविधाएँ",
      "5000 क्रेडिट/माह",
      "विशेष कला शैलियाँ",
      "बुद्धिमान कला अनुकूलन",
      "प्राथमिकता सुविधा अनुरोध",
    ],
    buttonText: "हमसे संपर्क करें",
    buttonColor: "secondary",
    buttonVariant: "solid",
  },
];

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

