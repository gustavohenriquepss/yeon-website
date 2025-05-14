
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
  ctaNewDescription: {
    en: "The complete app will be released soon, subscribe to our newsletter to be the first to know",
    pt: "O app completo será lançado em breve, inscreva-se na newsletter e fique sabendo primeiro"
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
  },
  // Revenue Boost Insights translations
  boostRevenue: {
    en: "Want to earn more?",
    pt: "Quer ganhar mais?"
  },
  insightBetterPlatforms: {
    en: "Redirect your audience",
    pt: "Redirecione sua audiência"
  },
  insightBetterPlatformsDesc: {
    en: "You're getting lots of streams on platforms with lower payouts. Consider encouraging fans to stream on",
    pt: "Você está tendo muitos streams em plataformas com pagamentos mais baixos. Considere incentivar os fãs a ouvir no"
  },
  insightBetterPlatformsExpanded: {
    en: "Different streaming platforms pay artists at different rates. By encouraging your fans to use platforms with higher payouts, you could increase your earnings without needing more listeners. Try mentioning your preferred platforms on social media or in your newsletters.",
    pt: "Diferentes plataformas de streaming pagam os artistas em taxas diferentes. Ao incentivar seus fãs a usar plataformas com pagamentos mais altos, você pode aumentar seus ganhos sem precisar de mais ouvintes. Tente mencionar suas plataformas preferidas nas redes sociais ou em suas newsletters."
  },
  insightMissingPlatforms: {
    en: "Expand your reach",
    pt: "Expanda seu alcance"
  },
  insightMissingPlatformsDesc: {
    en: "You're not distributing to all platforms. Consider adding",
    pt: "Você não está distribuindo para todas as plataformas. Considere adicionar"
  },
  insightMissingPlatformsExpanded: {
    en: "Some of the platforms you're not using have high per-stream rates. Make sure your music is available everywhere your fans might want to listen. Talk to your distributor about adding these platforms to your distribution package.",
    pt: "Algumas das plataformas que você não está usando têm altas taxas por stream. Certifique-se de que sua música esteja disponível em todos os lugares onde seus fãs possam querer ouvir. Fale com seu distribuidor sobre adicionar essas plataformas ao seu pacote de distribuição."
  },
  insightDirectSales: {
    en: "Sell direct to fans",
    pt: "Venda diretamente para os fãs"
  },
  insightDirectSalesDesc: {
    en: "Platforms like Bandcamp let you keep 85-90% of sales revenue. Worth exploring!",
    pt: "Plataformas como Bandcamp permitem que você fique com 85-90% da receita de vendas. Vale a pena explorar!"
  },
  insightDirectSalesExpanded: {
    en: "While streaming is important for discovery, direct sales through platforms like Bandcamp can be much more lucrative. A single $10 album sale can equal thousands of streams in revenue. Consider special releases, merchandise bundles, or exclusive content to incentivize direct purchases.",
    pt: "Embora o streaming seja importante para a descoberta, as vendas diretas por meio de plataformas como o Bandcamp podem ser muito mais lucrativas. Uma única venda de álbum de $10 pode equivaler a milhares de streams em receita. Considere lançamentos especiais, pacotes de merchandise ou conteúdo exclusivo para incentivar compras diretas."
  },
  insightProPublishing: {
    en: "Register with a PRO",
    pt: "Registre-se em uma associação"
  },
  insightProPublishingDesc: {
    en: "Publishing royalties can significantly boost your income. Register with ECAD/ABRAMUS/UBC.",
    pt: "Direitos autorais de publicação podem aumentar significativamente sua renda. Registre-se no ECAD/ABRAMUS/UBC."
  },
  insightProPublishingExpanded: {
    en: "Performance Rights Organizations collect royalties when your music is played on radio, TV, venues, and even some streaming services. These royalties are separate from your streaming revenue and can be substantial. Make sure you're registered and your songs are properly documented.",
    pt: "Organizações de Direitos de Execução coletam royalties quando sua música é tocada no rádio, TV, locais e até mesmo em alguns serviços de streaming. Esses royalties são separados da sua receita de streaming e podem ser substanciais. Certifique-se de estar registrado e que suas músicas estejam devidamente documentadas."
  },
  and: {
    en: " and ",
    pt: " e "
  }
};
