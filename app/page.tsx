import Image from "next/image";
import PhotoCarousel from "@/components/PhotoCarousel";

const whatsapp = "https://wa.me/message/5ZCQAQK7NF6JH1";
const instagram = "https://www.instagram.com/infotechtapera/";
const facebook = "https://www.facebook.com/481veiculos/?locale=pt_BR";
const maps = "https://www.google.com/maps/search/?api=1&query=Rua+Tiradentes%2C+30%2C+Tapera+-+RS%2C+99490-000";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.1 11.7a8.1 8.1 0 0 1-11.8 7.2L4 20l1.2-4.1a8.1 8.1 0 1 1 14.9-4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 8.1c-.4-.7-.7-.8-1-.8-.4 0-.8.2-1 1-.2.7.1 1.6.8 2.5 1.3 1.8 2.9 2.9 4.8 3.6.9.3 1.8.1 2.3-.4.5-.5.7-1 .6-1.2l-2.2-1.1c-.2-.1-.4-.1-.6.2l-.9 1c-1.4-.6-2.3-1.4-3-2.6l.7-.8c.2-.2.2-.4.1-.6L9 8.1Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.2 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H8V13h2.8v8h3.4Z" fill="currentColor" />
    </svg>
  );
}

const business = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: "Infotech Tapera",
  description: "Venda de celulares, computadores e eletrônicos e assistência técnica em Tapera, RS.",
  telephone: "+55-54-3385-3559",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Tiradentes, 30",
    addressLocality: "Tapera",
    addressRegion: "RS",
    postalCode: "99490-000",
    addressCountry: "BR",
  },
  sameAs: [instagram, whatsapp],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Infotech Tapera, voltar ao início">
            <span className="brand-mark"><Image src="/logo.png" alt="" width={42} height={42} priority /></span>
            <span className="brand-name"><strong>infotech</strong><small>TAPERA</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#produtos">Produtos</a>
            <a href="#assistencia">Assistência técnica</a>
            <a href="#localizacao">Localização</a>
          </nav>
          <a className="header-contact" href={whatsapp} target="_blank" rel="noopener noreferrer">
            <span>Fale com a gente</span><ArrowIcon />
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> TECNOLOGIA EM TAPERA, RS</div>
              <h1>Mais tecnologia <em>para o seu dia.</em></h1>
              <p>Celulares, computadores e eletrônicos para você escolher. Assistência técnica para cuidar do que já faz parte da sua rotina.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chamar no WhatsApp <ArrowIcon /></a>
                <a className="button button-text" href="#produtos">Conhecer a Infotech <ArrowIcon /></a>
              </div>
              <div className="hero-note"><span className="hero-note-icon">✳</span><span>Venda e assistência técnica<br /><strong>em um só lugar.</strong></span></div>
            </div>
            <div className="hero-visual">
              <PhotoCarousel />
              <span className="visual-decoration" aria-hidden="true">IT<span>·</span></span>
            </div>
          </div>
        </section>

        <section className="intro-strip" aria-label="O que você encontra na Infotech">
          <div className="container intro-strip-inner">
            <span>FEITO PARA O QUE VOCÊ PRECISA</span>
            <div><span>Celulares</span><i /> <span>Computadores</span><i /> <span>Eletrônicos</span><i /> <span>Assistência técnica</span></div>
          </div>
        </section>

        <section className="section products-section" id="produtos">
          <div className="container">
            <div className="section-heading">
              <div><span className="section-kicker">01 / PRODUTOS</span><h2>O que você procura<br /><em>está por aqui.</em></h2></div>
              <p>Da escolha de um novo aparelho aos itens que acompanham sua rotina, conte com a Infotech para encontrar opções em tecnologia.</p>
            </div>
            <div className="product-grid">
              <article className="product-card">
                <div className="product-icon"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="11" y="3" width="18" height="34" rx="3.5" stroke="currentColor" strokeWidth="1.7" /><path d="M17 32h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></div>
                <span className="card-number">01</span>
                <h3>Celulares</h3><p>Smartphones para se conectar, trabalhar e aproveitar cada momento.</p>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Perguntar sobre celulares pelo WhatsApp">Consultar opções <ArrowIcon /></a>
              </article>
              <article className="product-card">
                <div className="product-icon"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="5" y="7" width="30" height="21" rx="2.5" stroke="currentColor" strokeWidth="1.7" /><path d="M2 33h36M16 28l-1 5m9-5 1 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></div>
                <span className="card-number">02</span>
                <h3>Computadores</h3><p>Equipamentos para estudar, produzir e facilitar o seu dia.</p>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Perguntar sobre computadores pelo WhatsApp">Consultar opções <ArrowIcon /></a>
              </article>
              <article className="product-card">
                <div className="product-icon"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M10 25V14a10 10 0 0 1 20 0v11M10 25H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h3v13a3 3 0 0 0 3 3h2m15-5h3a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-3v14a5 5 0 0 1-5 5h-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <span className="card-number">03</span>
                <h3>Eletrônicos</h3><p>Outros dispositivos e acessórios que completam sua experiência.</p>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Perguntar sobre eletrônicos pelo WhatsApp">Consultar opções <ArrowIcon /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="service-section" id="assistencia">
          <div className="container service-grid">
            <div className="service-art" aria-hidden="true"><div className="service-orbit orbit-one" /><div className="service-orbit orbit-two" /><div className="service-orbit orbit-three" /><div className="service-core"><svg viewBox="0 0 64 64" fill="none"><path d="M39.8 13.5a15 15 0 0 0-17.7 19.1L10.7 44a5.6 5.6 0 1 0 7.9 7.9L30 40.5a15 15 0 0 0 19.1-17.7l-9.3 9.3-8.1-1.8-1.8-8.1 9.9-8.7Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" /></svg></div><span className="service-art-text">SUPORTE TÉCNICO / INFOTECH TAPERA</span></div>
            <div className="service-copy"><span className="section-kicker">02 / ASSISTÊNCIA TÉCNICA</span><h2>Seu aparelho merece<br /><em>o cuidado certo.</em></h2><p>Precisa de ajuda com um eletrônico? Nossa assistência técnica está aqui para avaliar o problema e orientar você sobre os próximos passos.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Solicitar atendimento <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="section contact-section" id="localizacao">
          <div className="container contact-grid">
            <div className="contact-copy"><span className="section-kicker">03 / CONTATO E LOCALIZAÇÃO</span><h2>Estamos perto<br /><em>de você.</em></h2><p>Passe na loja ou fale com a nossa equipe. Conte o que você procura e vamos ajudar com produtos ou assistência técnica.</p><div className="contact-methods"><div><span>VISITE A LOJA</span><address>Rua Tiradentes, 30<br />Tapera - RS · CEP 99490-000</address></div><div><span>FALE COM A GENTE</span><a href="tel:+555433853559">(54) 3385-3559</a></div></div><div className="contact-actions"><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Abrir WhatsApp <ArrowIcon /></a><a className="map-link" href={maps} target="_blank" rel="noopener noreferrer">Como chegar <ArrowIcon /></a></div></div>
            <div className="location-card"><div className="location-grid" aria-hidden="true" /><div className="location-pin" aria-hidden="true"><span /></div><div className="location-label"><span>ENCONTRE A INFOTECH</span><strong>Tapera <i>·</i> RS</strong><p>Rua Tiradentes, 30</p><a href={maps} target="_blank" rel="noopener noreferrer">Ver no mapa <ArrowIcon /></a></div></div>
          </div>
        </section>

        <section className="section social-section" id="redes-sociais">
          <div className="container">
            <div className="social-heading">
              <div><span className="section-kicker">04 / REDES SOCIAIS</span><h2>Acompanhe a Infotech<br /><em>de perto.</em></h2></div>
              <p>Escolha o canal que preferir para acompanhar as novidades ou falar com a nossa equipe.</p>
            </div>
            <div className="social-grid">
              <a className="social-link" href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Acessar o Instagram da Infotech Tapera">
                <span className="social-icon"><InstagramIcon /></span>
                <span className="social-text"><strong>Instagram</strong><small>@infotechtapera</small></span>
                <ArrowIcon />
              </a>
              <a className="social-link" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Infotech Tapera pelo WhatsApp">
                <span className="social-icon"><WhatsAppIcon /></span>
                <span className="social-text"><strong>WhatsApp</strong><small>Fale com a gente</small></span>
                <ArrowIcon />
              </a>
              <a className="social-link" href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Acessar a página no Facebook">
                <span className="social-icon"><FacebookIcon /></span>
                <span className="social-text"><strong>Facebook</strong><small>Visite a página</small></span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#inicio" aria-label="Infotech Tapera, voltar ao início"><span className="brand-mark"><Image src="/logo.png" alt="" width={38} height={38} /></span><span className="brand-name"><strong>infotech</strong><small>TAPERA</small></span></a><p>Venda de eletrônicos e assistência técnica em Tapera, RS.</p><span>© {new Date().getFullYear()} Infotech Tapera.</span></div></footer>
    </>
  );
}
