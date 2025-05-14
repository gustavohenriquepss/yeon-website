
interface TranslationObject {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export const translations: Record<string, Record<string, string>> = {
  appTitle: {
    en: "Yeon Music",
    pt: "Yeon Music"
  },
  tagline: {
    en: "Stream to Cash Calculator",
    pt: "Calculadora de Streams"
  },
  intro: {
    en: "See exactly how your music plays translate to your pockets across streaming platforms",
    pt: "Veja como seus streams se transformam em grana em cada plataforma"
  },
  calculateButton: {
    en: "Show Me The Money",
    pt: "Calcular"
  },
  resetButton: {
    en: "Start Fresh",
    pt: "Limpar"
  },
  streamCount: {
    en: "Your Streams",
    pt: "Suas Reproduções"
  },
  platformName: {
    en: "Platform",
    pt: "Plataforma"
  },
  streamRate: {
    en: "Pays Per Stream",
    pt: "Paga Por Stream"
  },
  estimatedRevenue: {
    en: "Your Earnings Breakdown",
    pt: "Detalhamento dos Seus Ganhos"
  },
  totalRevenue: {
    en: "Total Earnings",
    pt: "Ganhos Totais"
  },
  perStreamTooltip: {
    en: "Industry average payout per stream (rates may vary)",
    pt: "Pagamento médio por stream na indústria (taxas podem variar)"
  },
  ctaTitle: {
    en: "Ready to unleash your potential",
    pt: "Pronto pra botar ritmo na sua carreira"
  },
  ctaDescription: {
    en: "Turn up the volume on your success with Yeon's complete toolkit for indie artists.",
    pt: "Aumente o volume do seu sucesso com o kit completo da Yeon para artistas independentes."
  },
  ctaButton: {
    en: "Join Waitlist",
    pt: "Entrar na Lista de Espera"
  },
  moreInfo: {
    en: "Learn More",
    pt: "Saiba Mais"
  },
  disclaimerText: {
    en: "These numbers are industry estimates. Actual earnings may vary based on your agreements.",
    pt: "Estes números são estimativas da indústria. Os ganhos reais podem variar com base em seus contratos."
  },
  distributorFees: {
    en: "Distribution Take",
    pt: "Corte da Distribuição"
  },
  distributorFeesInfo: {
    en: "See how different distributors impact your final payout after their cut",
    pt: "Veja como diferentes distribuidores impactam seu pagamento final após a dedução deles"
  },
  distributorFeesDisclaimer: {
    en: "These fees reflect the starter/basic/free plans of these distributors.",
    pt: "Estas taxas refletem os planos iniciais/básicos/gratuitos destes distribuidores."
  },
  distributor: {
    en: "Distributor",
    pt: "Distribuidor"
  },
  fee: {
    en: "Their Cut",
    pt: "Corte Deles"
  },
  netRevenue: {
    en: "Your Take",
    pt: "Seu Ganho"
  },
  breakdown: {
    en: "Breakdown",
    pt: "Detalhamento"
  },
  grossRevenue: {
    en: "Total Generated",
    pt: "Total Gerado"
  },
  feeAmount: {
    en: "Platform Fee",
    pt: "Taxa da Plataforma"
  },
  menu: {
    en: 'Menu',
    pt: 'Menu'
  },
  languageEN: {
    en: 'EN-US',
    pt: 'EN-US'
  },
  languagePT: {
    en: 'PT-BR',
    pt: 'PT-BR'
  }
};
