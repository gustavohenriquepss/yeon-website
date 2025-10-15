import React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Yeon</title>
        <meta name="description" content="Termos e Condições de Uso da plataforma Yeon. Leia os termos que regem o uso dos nossos serviços e ferramentas para artistas independentes." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://yeon-music.com/termos-de-uso" />
      </Helmet>
      <PageLayout>
        <main className="min-h-screen bg-yeon-dark-bg py-20">
          <div className="container px-4 max-w-4xl">
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviso Legal</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white/80">Termos e Condições de Uso</h2>
              </header>

              <section className="space-y-8 text-white/80">
                <p>
                  Bem-vindo(a) ao site da YEON, uma plataforma online que oferece ferramentas, recursos e oportunidades para artistas independentes. Estes Termos e Condições de Uso ("Termos") regem o uso do nosso site, localizado em www.yeon.live (o "Site").
                  Leia atentamente antes de acessar ou utilizar o Site.
                </p>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Aceitação dos Termos</h2>
                  <p>
                    Ao acessar ou usar o Site, você concorda em se vincular a estes Termos, que constituem um acordo legal entre você e a YEON.
                    Se você não concorda com algum ponto destes Termos, deve interromper imediatamente o uso do Site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Idade Mínima</h2>
                  <p>
                    O Site é destinado a pessoas com 13 anos de idade ou mais.
                    Se você tiver menos de 13 anos, só poderá usar o Site com a supervisão e consentimento de um dos pais ou responsável legal.
                    Ao utilizar o Site, você declara que tem pelo menos 13 anos ou possui o consentimento necessário para fazê-lo.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Privacidade</h2>
                  <p>
                    A YEON respeita sua privacidade e se compromete a proteger suas informações pessoais.
                    Nossa Política de Privacidade, incorporada a estes Termos por referência, descreve como coletamos, utilizamos e protegemos seus dados.
                    Ao acessar ou utilizar o Site, você concorda com os termos dessa política.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contas</h2>
                  <p>
                    Para acessar determinados recursos do Site, pode ser necessário criar uma conta.
                    Você concorda em fornecer informações verdadeiras, atualizadas e completas, e em manter seus dados sempre corretos.
                    É sua responsabilidade proteger suas credenciais de acesso (usuário e senha) e todas as atividades realizadas em sua conta.
                    Caso suspeite de uso indevido ou acesso não autorizado, notifique a YEON imediatamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Uso do Conteúdo</h2>
                  <p>
                    Todo o conteúdo presente no Site — incluindo textos, gráficos, logotipos, imagens, ícones e softwares — é propriedade da YEON ou de seus licenciadores, sendo protegido por leis de direitos autorais e propriedade intelectual.
                    É proibido copiar, distribuir, modificar, transmitir ou utilizar qualquer conteúdo do Site para fins comerciais sem autorização prévia e por escrito da YEON.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Conteúdo do Usuário</h2>
                  <p>
                    A YEON pode permitir que os usuários enviem ou publiquem conteúdos, como textos, imagens, vídeos, músicas e outros materiais ("Conteúdo do Usuário").
                    Ao enviar qualquer Conteúdo, você concede à YEON uma licença não exclusiva, gratuita, perpétua, irrevogável e sublicenciável para usar, reproduzir, adaptar, modificar, traduzir, distribuir e exibir esse conteúdo globalmente, em qualquer mídia.
                    Você declara que possui os direitos necessários sobre o Conteúdo e que ele não infringe direitos de terceiros.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Condutas Proibidas</h2>
                  <p className="mb-4">
                    Você se compromete a não utilizar o Site para fins ilegais ou que violem estes Termos.
                    Entre outras coisas, é proibido:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usar o Site para assediar, ameaçar ou intimidar outras pessoas;</li>
                    <li>Fingir ser outra pessoa ou representar falsamente uma entidade;</li>
                    <li>Enviar spam, "correntes" ou "esquemas de pirâmide";</li>
                    <li>Realizar atividades que prejudiquem, sobrecarreguem ou comprometam os servidores ou redes da YEON;</li>
                    <li>Tentar acessar sem autorização qualquer parte do Site, contas de usuários ou sistemas conectados;</li>
                    <li>Modificar, traduzir, ou fazer engenharia reversa de qualquer parte do Site;</li>
                    <li>Enviar vírus, worms, trojans ou qualquer código malicioso;</li>
                    <li>Usar bots, scrapers ou robôs automáticos para coletar dados ou interagir com o Site;</li>
                    <li>Vender, licenciar ou explorar comercialmente o Site ou seu conteúdo sem permissão;</li>
                    <li>Usar o Site para anúncios ou promoções sem autorização expressa;</li>
                    <li>Violar leis ou regulamentos aplicáveis.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Isenção de Garantias</h2>
                  <p>
                    O Site e seu conteúdo são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a, garantias de comercialização, adequação a um propósito específico ou não violação.
                    A YEON não garante que o Site será ininterrupto ou livre de erros, que falhas serão corrigidas ou que o servidor esteja livre de vírus ou componentes prejudiciais.
                    A YEON não se responsabiliza pela precisão, confiabilidade, integridade ou atualidade das informações disponibilizadas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Limitação de Responsabilidade</h2>
                  <p>
                    Na máxima extensão permitida por lei, a YEON não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou incapacidade de uso do Site, incluindo perda de lucros, dados ou outras perdas intangíveis, mesmo que tenha sido avisada sobre a possibilidade desses danos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Indenização</h2>
                  <p>
                    Você concorda em indenizar e isentar a YEON, seus diretores, sócios, funcionários, representantes e parceiros de quaisquer reivindicações, perdas, custos ou despesas (incluindo honorários advocatícios) resultantes do uso do Site ou do descumprimento destes Termos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Encerramento de Acesso</h2>
                  <p>
                    A YEON se reserva o direito de suspender ou encerrar o acesso de qualquer usuário, a qualquer momento e sem aviso prévio, por qualquer motivo.
                    Em caso de encerramento, todos os direitos de uso do Site cessarão imediatamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Legislação Aplicável e Foro</h2>
                  <p>
                    Estes Termos são regidos pelas leis do Brasil.
                    Quaisquer disputas decorrentes ou relacionadas a este documento deverão ser resolvidas no foro da cidade de Niterói, RJ, com renúncia a qualquer outro, por mais privilegiado que seja.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Alterações nos Termos</h2>
                  <p>
                    A YEON pode alterar ou atualizar estes Termos a qualquer momento, sem aviso prévio.
                    O uso contínuo do Site após a publicação das mudanças constitui aceitação integral das novas condições.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Acordo Integral</h2>
                  <p>
                    Estes Termos, juntamente com a Política de Privacidade, constituem o acordo completo entre você e a YEON sobre o uso do Site, substituindo quaisquer entendimentos ou comunicações anteriores.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contato</h2>
                  <p>
                    Se tiver dúvidas ou preocupações sobre estes Termos ou sobre o Site, entre em contato conosco:
                  </p>
                  <p className="mt-2">
                    📩 <a href="mailto:contato@yeon.live" className="text-yeon-purple hover:text-yeon-purple/80 transition-colors">contato@yeon.live</a>
                  </p>
                </section>
              </section>
            </article>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default TermsOfService;
