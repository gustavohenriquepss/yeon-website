
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Add translations
const resources = {
  en: {
    translation: {
      appTitle: 'Yeon Calculator',
      tagline: 'Empowering Musicians with Data-Driven Insights',
      intro: 'Unlock your streaming potential. Estimate earnings, compare distributors, and optimize your music career with our powerful, intuitive calculator.',
      streamCount: 'Streams',
      calculateButton: 'Calculate Revenue',
      resetButton: 'Reset',
      estimatedRevenue: 'Estimated Revenue',
      totalRevenue: 'Total Revenue',
      disclaimerText: 'These estimations are based on current average payout rates and may vary based on your distribution agreement.',
      distributorFees: 'Distributor Fees',
      distributorFeesInfo: 'Compare how different distributors affect your revenue after taking their cut.',
      distributor: 'Distributor',
      fee: 'Fee',
      netRevenue: 'Net Revenue',
      breakdown: 'Breakdown',
      grossRevenue: 'Gross Revenue',
      feeAmount: 'Fee Amount',
    }
  },
  pt: {
    translation: {
      appTitle: 'Calculadora Yeon',
      tagline: 'Capacitando Músicos com Insights Baseados em Dados',
      intro: 'Desbloqueie seu potencial de streaming. Estime ganhos, compare distribuidores e otimize sua carreira musical com nossa calculadora poderosa e intuitiva.',
      streamCount: 'Streams',
      calculateButton: 'Calcular Receita',
      resetButton: 'Resetar',
      estimatedRevenue: 'Receita Estimada',
      totalRevenue: 'Receita Total',
      disclaimerText: 'Estas estimativas são baseadas nas taxas de pagamento médias atuais e podem variar de acordo com seu contrato de distribuição.',
      distributorFees: 'Taxas de Distribuição',
      distributorFeesInfo: 'Compare como diferentes distribuidores afetam sua receita após cobrar as taxas.',
      distributor: 'Distribuidor',
      fee: 'Taxa',
      netRevenue: 'Receita Líquida',
      breakdown: 'Detalhamento',
      grossRevenue: 'Receita Bruta',
      feeAmount: 'Valor da Taxa',
    }
  }
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
