
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [showAllTeam, setShowAllTeam] = useState(false);
  
  // Team members data - 10 members total
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      bio: "Músico e desenvolvedor com mais de 10 anos de experiência na indústria musical brasileira.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3" 
    },
    {
      name: "Ana Oliveira",
      role: "Diretora de Tecnologia",
      bio: "Especialista em desenvolvimento de produtos digitais para o mercado de entretenimento.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Roberto Mendes",
      role: "Diretor de Parcerias",
      bio: "Ex-executivo de grandes gravadoras, especialista em negócios da indústria musical.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Juliana Costa",
      role: "Designer de Produto",
      bio: "Especialista em UX/UI com foco em experiências digitais para músicos e fãs.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Lucas Santos",
      role: "Desenvolvedor Full Stack",
      bio: "Engenheiro de software apaixonado por música e novas tecnologias.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Mariana Alves",
      role: "Growth Specialist",
      bio: "Especialista em marketing digital para artistas independentes.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Paulo Ferreira",
      role: "Analista de Dados",
      bio: "Especialista em análise de dados e métricas para a indústria musical.",
      imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Fernanda Lima",
      role: "Gestora de Comunidade",
      bio: "Responsável pelo relacionamento com artistas e fãs na plataforma.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Ricardo Gomes",
      role: "Diretor Financeiro",
      bio: "Especialista em modelos de negócio e estratégias financeiras para startups.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Camila Torres",
      role: "Especialista em Conteúdo",
      bio: "Jornalista especializada em música independente e novas tendências.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];
  
  // Show only 6 members initially, all if showAllTeam is true
  const displayedMembers = showAllTeam ? teamMembers : teamMembers.slice(0, 6);
  
  return <main className="bg-yeon-dark-bg">
      {/* Hero Section - Quem Somos */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('about.whoWeAreTitle')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-white/70 mb-4">
              Somos uma equipe de artistas independentes apaixonados que entendem bem as dificuldades da jornada artística. Ajudamos outros artistas a se organizarem e lançarem faixas de sucesso que façam sua música ser ouvida e expandam seus negócios e realizem seus sonhos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Manifesto Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Manifesto
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Princípios */}
            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Princípios</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="soberania" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Soberania do Artista
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Soberania é o poder do artista de moldar o seu mundo e os sistemas ao seu redor como achar melhor. Um estado de autodeterminação.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Independência de verdade não é só assinar contrato sozinho — é montar sua própria estrutura, fazer do seu jeito, sem ter que sacrificar visão ou saúde no processo. Esse princípio vale pro estúdio, palco, financeiro e pra vida. Entender contratos, cuidar da mente e ter clareza sobre o que se quer: isso é soberania. Tamo aqui pra garantir isso com ferramenta, conteúdo e suporte.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conhecimento" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Livre Conhecimento
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      O compartilhamento aberto de informações e conhecimento promove um ecossistema mais saudável e inovador para os artistas.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      A cultura open source provou isso há anos. Se você aprendeu uma parada, compartilha. Alguém vai devolver na mesma moeda, com outra chave. Conhecimento livre cria uma cena forte. Quanto mais você ensina, mais você aprende. Quanto mais você doa, mais você inspira.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gestao-projeto" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Gestão de Projeto
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Organizar é tão importante quanto criar. Pra transformar ideia em lançamento, a caminhada precisa de clareza.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Hoje tudo ainda tá espalhado: Drive, WhatsApp, planilha, e-mail… O artista vira malabarista e ainda falta visibilidade real do projeto. A gente acredita que gestão de projeto no mundo da música precisa ser visual, prática e integrada com a criação. Sem isso, o risco de travar lá na frente é alto.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="educacao" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Educação
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      O fato é que mercado da música é um jogo mal explicado. Tem livro, podcast, mas e o mentor? E o espaço seguro pra errar e aprender?
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Alguns setores da indústria evitam ativamente fazer perguntas. Essa atmosfera promove principalmente o aprendizado na raça e na osmose. Aqui a gente nada contra a maré e credita que educação prática é o que muda o jogo. A gente não quer manter ninguém no escuro — queremos formar artistas e gestores preparados pra ritmar com consciência e estratégia.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="insights" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Insights Acionáveis
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Maximizar o alcance artístico e construir negócios em torno de um artista requer as melhores ferramentas.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Hoje, o que se chama de "insight" no mercado é só uma tabelinha rasa. nome, idade, cidade e acabou. A gente quer mais: entender comportamento real, identificar oportunidades e agir com base em dados. Não dá mais pra seguir só o que "sempre funcionou". A nova música exige inteligência de verdade na tomada de decisão.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="colaboracao" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Gestão de Colaboração
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Criação boa é criação bem documentada porque muita coisa se perde no corre da criação: quem fez o quê, quem tava na sala, quem deu ideia e não foi creditado.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Essa bagunça vira disputa, dor de cabeça e confusão nos lançamentos. Na YEON MUSIC, a gente trata colaboração como algo sagrado. Botar ordem no processo criativo desde a primeira ideia é cuidar da galera e evitar crise lá na frente. Não adianta só organizar depois — o cuidado começa na fonte.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Pilares */}
            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Pilares</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ouvir" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Ouvir os artistas
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm font-medium mb-3">Artistas importam</p>
                    <p className="text-muted-foreground text-sm">
                      Artista não é só "criador de conteúdo". Artista é mente criativa, é força estratégica, é o centro do movimento. São cantores, produtores, dançarinos, empresários, advogados, designers, A&Rs... Tudo ao mesmo tempo. Eles pensam, executam, decidem, inspiram. Incluir eles no processo. Criar junto. E, acima de tudo, aprender com quem vive isso na pele é fundamental.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="responsabilidade" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Conhecimento possibilita a responsabilização
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm font-medium mb-3">Responsabilidade importa</p>
                    <p className="text-muted-foreground text-sm">
                      Quando a gente entende o que precisa e tem espaço pra pedir, cria uma base sólida pra qualquer parceria dar certo. Essa clareza vira combustível pra relações mais honestas, acessíveis e transparentes. Ninguém fica no escuro. Ninguém entra no jogo sem saber as regras. Porque quando a gente sabe no que tá se metendo, pode assumir o que vem em troca.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comando" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Artistas estão no comando
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm font-medium mb-3">Tudo se resume a isso</p>
                    <p className="text-muted-foreground text-sm">
                      Na YEON, somos uma equipe de artistas que decidiu empreender sem deixar a criatividade de lado. Pelo contrário: foi ouvindo a nossa própria voz criativa que entendemos o poder de reconhecer a dos outros. Quanto mais a gente valoriza nossa própria visão, mais enxerga a dos parceiros, dos amigos, da comunidade. Honramos essa troca ouvindo de verdade, com presença, respeito e afeto. Nossos produtos seguem a mesma lógica: não é sobre impor soluções, é sobre cocriar com quem tá do outro lado.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comunidade" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Comunidade = Harmonia
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm font-medium mb-3">Comunidade importa</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Acreditamos que toda expressão artística é um ato de coragem. Valorizar a arte é reconhecer o esforço humano de abrir o coração e criar pontes com o outro, com empatia, verdade e respeito.
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Por isso, usar nossa plataforma pra jogar luz em questões sistêmicas não é um gesto extra é parte do nosso compromisso.
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      A arte tem o poder de mover estruturas. E a gente quer estar do lado certo da mudança.
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Nos comprometemos a agir de forma intencional e responsável para:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      <li>Identificar e investir em iniciativas que redirecionem capital público e privado para organizações focadas em arte, cultura, educação e saúde mental</li>
                      <li>Apoiar negócios liderados por pessoas pretas, mulheres, LGBTQIAPN+ e outros grupos historicamente marginalizados</li>
                      <li>Fortalecer projetos cívicos e políticos locais que atuem na reforma da justiça social e criminal</li>
                    </ul>
                    <p className="text-muted-foreground text-sm mt-3">
                      Esse compromisso é vivo. Ele exige presença, escuta e ação constante. Estamos aqui pra aprender, colaborar e fazer parte da mudança com arte, com voz e com atitude.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl font-semibold">
              A indústria não foi feita para todos — então estamos construindo algo novo.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Acreditamos que acesso, propriedade e suporte não devem ser reservados para poucos.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Conhecemos a correria. Conhecemos a dor. E sabemos que, com a orientação, a tecnologia e a equipe certas por trás de você, esse sonho é possível.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Não estamos aqui para jogar.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Estamos aqui para reescrever as regras.
            </p>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('about.whatWeDoTitle')}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white/70">
              {t('about.whatWeDo')}
            </p>
          </div>
          
          {/* What We Do Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Capturar e engajar fãs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo1')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Monetizar diretamente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo2')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Analisar e Crescer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo3')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Conectar-se a comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo4')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Community Section - REMOVIDA */}
      
      {/* Nosso Time Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Nosso Time
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white/70">
              Somos artistas e amantes da música especialistas em produto e tecnologia construíndo o futuro da indústria musical no Brasil
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-yeon-purple font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* See More / See Less Button */}
          {teamMembers.length > 6 && (
            <div className="flex justify-center mt-10">
              <Button 
                variant="outline" 
                className="border-yeon-purple text-yeon-purple hover:bg-yeon-purple/10"
                onClick={() => setShowAllTeam(!showAllTeam)}
              >
                {showAllTeam ? "Ver menos" : "Ver mais"}
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Us Section - CTA */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t('about.joinTitle')}</h2>
            
            <Card className="border-0 bg-card overflow-hidden">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-base md:text-lg mb-4">
                  {t('about.join1')}
                </p>
                <p className="text-muted-foreground text-base md:text-lg mb-8">
                  {t('about.join2')}
                </p>
                <p className="font-semibold text-yeon-purple text-xl">
                  {t('about.join3')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>;
};

const About: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <>
      <Helmet>
        <title>Sobre a Yeon Music | Plataforma para Artistas Independentes</title>
        <meta name="description" content="A Yeon Music é dedicada a ajudar artistas a entender e maximizar seu potencial de receita com streaming. Conheça nossa missão e visão." />
        <link rel="canonical" href="https://yeon-music.com/about" />
      </Helmet>
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>;
};

export default About;
