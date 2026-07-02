const modulos = [
  "Saúde e Agendamento de Consultas",
  "Vacinação",
  "Farmácia Municipal",
  "Controle de Endemias",
  "Educação e Frequência Escolar",
  "Merenda Escolar",
  "Biblioteca",
  "CIPTEA",
  "Auxílio Transporte",
  "Assistência Social e Visitas",
  "Defesa Civil e Alertas",
  "Chamados do Cidadão",
  "Emprego e Renda",
  "Tributos (IPTU / ISS / Alvará)",
  "Conta de Água",
  "Projetos e Orçamento",
  "Serviços Públicos",
  "Mapas e Indicadores",
];

const solucoes = [
  {
    titulo: "Plataforma de gestão municipal",
    texto:
      "Sistema web completo para secretarias e gestores: cadastros, fluxos de atendimento, relatórios e painéis de indicadores em tempo real, com controle de acesso por perfil.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    titulo: "Aplicativo do cidadão",
    texto:
      "App mobile que aproxima a prefeitura da população: notificações, solicitações de serviço, consulta de tributos, agendamentos de saúde e informações da cidade na palma da mão.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    titulo: "Dados e inteligência territorial",
    texto:
      "Mapas de calor, georreferenciamento e dashboards que transformam os dados do município em decisões: onde investir, onde agir e o que priorizar.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z" />
        <path d="M9 6v14M15 4v14" />
      </svg>
    ),
  },
  {
    titulo: "Integração de sistemas legados",
    texto:
      "Rotinas de sincronização e ETL que conectam os sistemas que a prefeitura já usa — saúde, tributário, educação — consolidando tudo em uma base única e confiável.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 7h11M8 12h11M8 17h11" />
        <circle cx="4.5" cy="7" r="1.5" />
        <circle cx="4.5" cy="12" r="1.5" />
        <circle cx="4.5" cy="17" r="1.5" />
      </svg>
    ),
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto:
      "Entendemos a realidade do município: sistemas em uso, fluxos das secretarias e as dores de gestores e cidadãos.",
  },
  {
    numero: "02",
    titulo: "Implantação e integração",
    texto:
      "Colocamos a plataforma no ar e integramos os dados existentes, sem interromper a operação da prefeitura.",
  },
  {
    numero: "03",
    titulo: "Operação e evolução",
    texto:
      "Acompanhamos o uso no dia a dia, treinamos as equipes e evoluímos a plataforma junto com as necessidades da cidade.",
  },
];

const diferenciais = [
  {
    titulo: "Plataforma única e integrada",
    texto:
      "Todas as secretarias trabalham sobre a mesma base de dados — o cadastro do cidadão é um só, da saúde à educação.",
  },
  {
    titulo: "Feito para a realidade municipal",
    texto:
      "Nascemos dentro de prefeituras reais. Cada módulo resolve um problema concreto do dia a dia da gestão pública.",
  },
  {
    titulo: "Cidadão no centro",
    texto:
      "Aplicativo próprio da cidade, com notificações, serviços e transparência para a população.",
  },
  {
    titulo: "Segurança e controle de acesso",
    texto:
      "Perfis e permissões por função — do gestor ao professor, do farmacêutico ao agente de saúde — cada um vê o que precisa.",
  },
  {
    titulo: "Dados que já existem, melhor usados",
    texto:
      "Integramos os sistemas legados do município em vez de exigir recomeço do zero.",
  },
  {
    titulo: "Suporte próximo",
    texto:
      "Equipe acessível e evolução contínua: a plataforma cresce conforme a cidade precisa.",
  },
];

function Logo() {
  return (
    <span className="logo">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect x="3" y="14" width="7" height="15" rx="1.5" fill="url(#g1)" />
        <rect x="12.5" y="7" width="7" height="22" rx="1.5" fill="url(#g1)" opacity="0.75" />
        <rect x="22" y="2" width="7" height="27" rx="1.5" fill="url(#g1)" opacity="0.5" />
      </svg>
      Urban<strong>Labs</strong>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#" aria-label="UrbanLabs — início">
            <Logo />
          </a>
          <nav className="nav">
            <a href="#solucoes">Soluções</a>
            <a href="#bigmap">BigMap</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <a href="#contato" className="btn btn-primary btn-sm">
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-inner">
            <span className="badge">Govtech para cidades brasileiras</span>
            <h1>
              Tecnologia que transforma a{" "}
              <span className="grad">gestão pública municipal</span>
            </h1>
            <p className="hero-sub">
              A UrbanLabs desenvolve plataformas digitais para prefeituras — da
              saúde à educação, da assistência social aos tributos — colocando
              dados e serviços na mão do gestor e do cidadão.
            </p>
            <div className="hero-cta">
              <a href="#bigmap" className="btn btn-primary">
                Conheça o BigMap
              </a>
              <a href="#contato" className="btn btn-ghost">
                Fale com a gente
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>18+</strong>
                <span>módulos de gestão</span>
              </div>
              <div>
                <strong>1</strong>
                <span>plataforma integrada</span>
              </div>
              <div>
                <strong>Web + App</strong>
                <span>gestor e cidadão conectados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes" className="section">
          <div className="container">
            <span className="section-tag">O que fazemos</span>
            <h2>Soluções completas para a prefeitura digital</h2>
            <p className="section-sub">
              Do back-office das secretarias ao aplicativo no celular do
              cidadão, cobrimos todo o ciclo da gestão municipal.
            </p>
            <div className="grid grid-4">
              {solucoes.map((s) => (
                <article key={s.titulo} className="card">
                  <div className="card-icon">{s.icone}</div>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BigMap */}
        <section id="bigmap" className="section section-dark">
          <div className="container">
            <span className="section-tag tag-light">Nosso produto</span>
            <h2>
              BigMap: a cidade inteira em{" "}
              <span className="grad">uma só plataforma</span>
            </h2>
            <p className="section-sub sub-light">
              O BigMap é o hub de cidade inteligente da UrbanLabs. Ele reúne os
              serviços de todas as secretarias em um único sistema — com painéis
              para o gestor, ferramentas para as equipes e um aplicativo para o
              cidadão. Já em operação em municípios do interior de São Paulo.
            </p>
            <div className="chips">
              {modulos.map((m) => (
                <span key={m} className="chip">
                  {m}
                </span>
              ))}
            </div>
            <div className="grid grid-3 bigmap-destaques">
              <div className="mini-card">
                <h4>Painéis e mapas de calor</h4>
                <p>
                  Indicadores por bairro e por secretaria: endemias, visitas
                  sociais, frequência escolar e muito mais, geolocalizados.
                </p>
              </div>
              <div className="mini-card">
                <h4>Aplicativo da cidade</h4>
                <p>
                  O cidadão consulta tributos, recebe alertas da Defesa Civil,
                  agenda consultas e abre solicitações direto do celular.
                </p>
              </div>
              <div className="mini-card">
                <h4>Alertas automáticos</h4>
                <p>
                  Rotinas inteligentes avisam as equipes sobre estoques de
                  merenda, prazos e ocorrências — antes de virarem problema.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="section">
          <div className="container">
            <span className="section-tag">Como funciona</span>
            <h2>Da assinatura ao ar em semanas, não em anos</h2>
            <div className="grid grid-3 steps">
              {etapas.map((e) => (
                <article key={e.numero} className="step">
                  <span className="step-num">{e.numero}</span>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais + Sobre */}
        <section id="sobre" className="section section-alt">
          <div className="container">
            <span className="section-tag">Por que a UrbanLabs</span>
            <h2>Feita por quem entende de cidade</h2>
            <p className="section-sub">
              A UrbanLabs nasceu da prática: construímos nossas soluções lado a
              lado com servidores e gestores municipais, resolvendo problemas
              reais de saúde, educação, assistência social e atendimento ao
              cidadão. Acreditamos que toda cidade — de qualquer porte — merece
              tecnologia de ponta.
            </p>
            <div className="grid grid-3">
              {diferenciais.map((d) => (
                <article key={d.titulo} className="card card-flat">
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contato */}
        <section id="contato" className="section">
          <div className="container cta-box">
            <h2>Vamos transformar a sua cidade?</h2>
            <p>
              Fale com a nossa equipe e veja uma demonstração do BigMap aplicada
              à realidade do seu município.
            </p>
            <a
              href="mailto:guipaglioni@gmail.com?subject=Quero%20conhecer%20o%20BigMap"
              className="btn btn-primary"
            >
              Agendar uma conversa
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <p>
            © {new Date().getFullYear()} UrbanLabs. Tecnologia para gestão
            pública municipal.
          </p>
        </div>
      </footer>
    </>
  );
}
