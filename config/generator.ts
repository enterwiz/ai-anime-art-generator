export const GENERATOR_EN = {
  title: "Generate Now",
  textFullFeature:
    "Full features available after login. Generation takes about 30 seconds.",
  label: "Input",
  description: "A princess dressed stands in the garden of an ancient palace.",
  buttonTextGenerate: "Generate",
  buttonTextGenerating: "Generating",
  buttonTextCopy: "Copy Art",
  resultTitle: "Generated Art",
};

export const GENERATOR_ZH = {
  title: "立即生成",
  textFullFeature: "登录后可使用全部功能。生成大约需要30秒。",
  label: "输入",
  description: "一位身着礼服的公主站在古老宫殿的花园里。",
  buttonTextGenerate: "生成",
  buttonTextGenerating: "正在生成",
  buttonTextCopy: "复制作品",
  resultTitle: "生成的作品",
};

export const GENERATOR_JA = {
  title: "今すぐ生成",
  textFullFeature:
    "ログイン後に全機能が利用可能です。生成には約30秒かかります。",
  label: "入力",
  description: "古い宮殿の庭園に立つドレスを着た姫。",
  buttonTextGenerate: "生成",
  buttonTextGenerating: "生成中",
  buttonTextCopy: "作品をコピー",
  resultTitle: "生成された作品",
};

export const GENERATOR_AR = {
  title: "إنشاء الآن",
  textFullFeature:
    "جميع الميزات متاحة بعد تسجيل الدخول. يستغرق الإنشاء حوالي 30 ثانية.",
  label: "إدخال",
  description: "أميرة ترتدي فستانًا تقف في حديقة قصر قديم.",
  buttonTextGenerate: "إنشاء",
  buttonTextGenerating: "جاري الإنشاء",
  buttonTextCopy: "نسخ الفن",
  resultTitle: "الفن المُنشأ",
};

export const GENERATOR_ES = {
  title: "Generar ahora",
  textFullFeature:
    "Todas las funciones están disponibles después de iniciar sesión. La generación tarda unos 30 segundos.",
  label: "Entrada",
  description:
    "Una princesa vestida de gala se encuentra en el jardín de un antiguo palacio.",
  buttonTextGenerate: "Generar",
  buttonTextGenerating: "Generando",
  buttonTextCopy: "Copiar arte",
  resultTitle: "Arte generado",
};

export const GENERATOR_RU = {
  title: "Создать сейчас",
  textFullFeature:
    "Полный функционал доступен после входа в систему. Генерация занимает около 30 секунд.",
  label: "Ввод",
  description: "Принцесса в платье стоит в саду древнего дворца.",
  buttonTextGenerate: "Создать",
  buttonTextGenerating: "Создание",
  buttonTextCopy: "Копировать изображение",
  resultTitle: "Созданное изображение",
};

export const GENERATOR_HI = {
  title: "अभी जनरेट करें",
  textFullFeature:
    "लॉगिन के बाद पूर्ण सुविधाएँ उपलब्ध हैं। जनरेशन में लगभग 30 सेकंड लगते हैं।",
  label: "इनपुट",
  description: "एक राजकुमारी पोशाक पहने प्राचीन महल के बगीचे में खड़ी है।",
  buttonTextGenerate: "जनरेट करें",
  buttonTextGenerating: "जनरेट हो रहा है",
  buttonTextCopy: "कला कॉपी करें",
  resultTitle: "जनरेट की गई कला",
};

interface GeneratorCollection {
  [key: `GENERATOR_${string}`]: {
    title: string;
    textFullFeature: string;
    label: string;
    description: string;
    buttonTextGenerate: string;
    buttonTextGenerating: string;
    buttonTextCopy: string;
    resultTitle: string;
  };
}

export const ALL_GENERATOR: GeneratorCollection = {
  GENERATOR_EN: GENERATOR_EN,
  GENERATOR_ZH: GENERATOR_ZH,
  GENERATOR_JA: GENERATOR_JA,
  GENERATOR_AR: GENERATOR_AR,
  GENERATOR_ES: GENERATOR_ES,
  GENERATOR_RU: GENERATOR_RU,
  GENERATOR_HI: GENERATOR_HI,
};

