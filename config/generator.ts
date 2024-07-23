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

export const GENERATOR_ZH = GENERATOR_EN;
export const GENERATOR_JA = GENERATOR_EN;
export const GENERATOR_AR = GENERATOR_EN;
export const GENERATOR_ES = GENERATOR_EN;
export const GENERATOR_RU = GENERATOR_EN;
export const GENERATOR_HI = GENERATOR_EN;

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

