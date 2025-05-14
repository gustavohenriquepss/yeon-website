
interface TranslationObject {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export const translations: TranslationObject = {
  appTitle: {
    en: "Yeon Music",
    pt: "Yeon Music"
  },
  tagline: {
    en: "Revenue Calculator for Independent Artists",
    pt: "Calculadora de Receita para Artistas Independentes"
  },
  intro: {
    en: "Calculate how much you earned from your streams across different music platforms",
    pt: "Calcule quanto você ganhou com suas reproduções em diferentes plataformas de música"
  },
  calculateButton: {
    en: "Calculate Revenue",
    pt: "Calcular Receita"
  },
  resetButton: {
    en: "Reset",
    pt: "Limpar"
  },
  streamCount: {
    en: "Number of Streams",
    pt: "Número de Reproduções"
  },
  platformName: {
    en: "Platform",
    pt: "Plataforma"
  },
  streamRate: {
    en: "Per Stream Rate",
    pt: "Valor por Reprodução"
  },
  estimatedRevenue: {
    en: "Estimated Revenue",
    pt: "Receita Estimada"
  },
  totalRevenue: {
    en: "Total Revenue",
    pt: "Receita Total"
  },
  perStreamTooltip: {
    en: "Average amount paid per stream",
    pt: "Valor médio pago por reprodução"
  },
  ctaTitle: {
    en: "Take your music career further with Yeon",
    pt: "Leve sua carreira musical mais longe com a Yeon"
  },
  ctaDescription: {
    en: "Our suite of tools helps independent artists analyze, grow, and monetize their audience.",
    pt: "Nosso conjunto de ferramentas ajuda artistas independentes a analisar, crescer e monetizar seu público."
  },
  ctaButton: {
    en: "Explore More Tools",
    pt: "Explorar Mais Ferramentas"
  },
  moreInfo: {
    en: "More Info",
    pt: "Mais Informações"
  },
  disclaimerText: {
    en: "Rates are estimates based on industry averages and may vary.",
    pt: "As taxas são estimativas baseadas em médias do setor e podem variar."
  }
};
