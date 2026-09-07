const contactEmail = "hello@mahuagamestudio.com";

const playStyles = [
  [
    "01",
    "Cooking",
    "Cozy kitchens, colourful ingredients, and satisfying little wins.",
  ],
  ["02", "Simulation", "Living worlds made to explore at your own pace."],
  ["03", "Puzzle", "Curious challenges with a bright, playful twist."],
  ["04", "Online battle", "Big energy and good company, wherever you play."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mahua Game Studio home">
          <img className="brand-mark" src="/mahua-mascot.png" alt="" />
          <span>
            Mahua
            <br />
            <em>Game Studio</em>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
        <a className="header-cta" href={`mailto:${contactEmail}`}>
          Say hello <span>↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact us</a>
          </nav>
        </details>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Independent game studio · Brisbane, Australia
          </p>
          <h1>
            Small paws.
            <br />
            <i>Big play.</i>
          </h1>
          <p className="hero-lede">
            We make bright, big-hearted game worlds for every kind of player —
            from a cosy first bite to a legendary next adventure.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#games">
              Meet our first game <span>↓</span>
            </a>
            <a className="text-link" href="#about">
              Our story <span>→</span>
            </a>
          </div>
          <p className="hero-footnote">
            Mobile&nbsp; · &nbsp;iPad&nbsp; · &nbsp;Console
          </p>
        </div>
        <div
          className="hero-art"
          aria-label="Mahua Game Studio mascot and logo"
        >
          <span className="sun sun-one" aria-hidden="true" />
          <span className="sun sun-two" aria-hidden="true" />
          <span className="doodle doodle-one" aria-hidden="true">
            ✦
          </span>
          <span className="doodle doodle-two" aria-hidden="true">
            ✦
          </span>
          <img
            src="/mahua-logo.png"
            alt="Mahua Game Studio apricot poodle mascot"
          />
        </div>
      </section>

      <section className="featured section-shell" id="games">
        <div className="section-intro">
          <p className="eyebrow">
            <span /> First up
          </p>
          <h2>
            Something delicious
            <br />
            is nearly ready.
          </h2>
        </div>
        <article className="game-card">
          <div className="game-visual" aria-hidden="true">
            <span className="game-sun" />
            <span className="steam steam-a">~</span>
            <span className="steam steam-b">~</span>
            <span className="steam steam-c">~</span>
            <div className="pot">
              <span />
              <span />
            </div>
            <div className="tomato tomato-a" />
            <div className="tomato tomato-b" />
            <div className="leaf leaf-a" />
            <p>
              MAHUA
              <br />
              <b>KITCHEN</b>
            </p>
          </div>
          <div className="game-copy">
            <div className="status">
              <span /> Coming soon
            </div>
            <h3>
              Our first game
              <br />
              is cooking up.
            </h3>
            <p>
              We are putting the finishing touches on a cheerful cooking
              adventure full of flavour, friendship, and feel-good play.
            </p>
            <div className="platforms">
              <span>iPad</span>
            </div>
            <a className="text-link strong" href="#contact">
              Get launch news <span>→</span>
            </a>
          </div>
        </article>
      </section>

      <section className="play-section" aria-labelledby="play-title">
        <div className="section-shell">
          <div className="section-intro centered">
            <p className="eyebrow">
              <span /> More to play
            </p>
            <h2 id="play-title">
              One studio.
              <br />
              <i>Many kinds of fun.</i>
            </h2>
            <p>
              Our first game is only the beginning. Mahua is growing worlds
              across 2D and 3D, for players wherever they play.
            </p>
          </div>
          <div className="play-grid">
            {playStyles.map(([number, title, text]) => (
              <article className="play-card" key={title}>
                <span className="card-number">{number}</span>
                <div
                  className={`mini-illustration illustration-${number}`}
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <article className="play-card future-card">
              <span className="card-number">05</span>
              <div className="future-mark" aria-hidden="true">
                ?
              </div>
              <h3>More to come</h3>
              <p>We are always exploring the next bright idea.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-art" aria-hidden="true">
          <div className="paw">
            ●<span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <span className="about-orbit orbit-one" />
          <span className="about-orbit orbit-two" />
          <p>
            MAHUA
            <br />
            <b>
              GAME
              <br />
              STUDIO
            </b>
          </p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span /> About Mahua
          </p>
          <h2>
            A small studio
            <br />
            with <i>big imagination.</i>
          </h2>
          <p>
            Mahua Game Studio is an independent studio from Brisbane, Australia.
            We create welcoming games with personality: the kind that turn a
            spare moment into something brighter.
          </p>
          <p>
            From cosy 2D moments to vivid 3D adventures, we believe every game
            world should invite players in and leave a little joy behind.
          </p>
          <div className="values">
            <div>
              <b>Play with heart</b>
              <span>Memorable games, made with care.</span>
            </div>
            <div>
              <b>Stay curious</b>
              <span>Fresh ideas for every kind of player.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-paw" aria-hidden="true">
          ✦
        </div>
        <div className="section-shell contact-inner">
          <p className="eyebrow light">
            <span /> Contact us
          </p>
          <h2>
            Let&apos;s make
            <br />
            something <i>bright.</i>
          </h2>
          <p>
            For business, press, player, or general enquiries, drop our little
            studio a line.
          </p>
          <a className="email-link" href={`mailto:${contactEmail}`}>
            {contactEmail}
            <span>↗</span>
          </a>
          <p className="location">
            Mahua Game Studio &nbsp;·&nbsp; Brisbane, Queensland, Australia
          </p>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#home">
          <img className="brand-mark" src="/mahua-mascot.png" alt="" />
          <span>
            Mahua
            <br />
            <em>Game Studio</em>
          </span>
        </a>
        <p>Play a brighter tomorrow.</p>
        <div className="footer-links">
          <a href="#games">Games</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </div>
        <small>© 2026 Mahua Game Studio. All rights reserved.</small>
      </footer>
    </main>
  );
}
