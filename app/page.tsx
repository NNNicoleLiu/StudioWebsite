const contactEmail = "info@mahuagamestudio.com";

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
          <a href="#about">About</a>
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
            <em>Big play.</em>
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
            <h3>Something delicious is nearly ready</h3>
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
            <h2>
              One studio.
              <br />
              <em>Many kinds of fun.</em>
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
            <span /> About Us
          </p>
          <h2>
            Small studio.
            <br />
            <em>Big play.</em>
          </h2>
          <p>
            Mahua Game Studio is a Brisbane-based independent studio creating
            engaging, polished, and memorable 2D and 3D games for mobile, iPad,
            and console.
          </p>
          <p>
            We are not defined by one genre. From cosy cooking games and
            thoughtful simulations to puzzles, competitive multiplayer, and
            entirely new adventures. We make playful worlds that are easy to
            pick up and hard to forget.
          </p>
          <p>
            Great games begin with thoughtful design, intuitive gameplay,
            distinctive worlds, and the small details that make every moment
            feel satisfying. That is the care we bring to every project.
          </p>
          <p>
            Our first title is only the beginning. As Mahua grows, we want to
            create original experiences that players around the world can enjoy,
            remember, and return to.
          </p>
          <p className="about-signoff">
            Thoughtful design · Joyful details · New worlds
          </p>
        </div>
      </section>

      <section
        className="meet-mahua section-shell"
        aria-labelledby="meet-mahua-title"
      >
        <span className="meet-sparkle" aria-hidden="true">
          ✦
        </span>
        <img className="meet-paw" src="/mahua-paw-light.png" alt="" />
        <div className="meet-mahua-content">
          <div className="meet-mahua-copy">
            <p className="eyebrow">
              <span /> Meet Mahua
            </p>
            <h2 id="meet-mahua-title">
              A small poodle
              <br />
              with <em>big energy.</em>
            </h2>
            <p>
              Mahua is the heart of our studio. Curious, playful, and full of
              joy—she is always ready for the next adventure.
            </p>
          </div>

          <div className="mahua-photo-board">
            <figure className="mahua-polaroid mahua-photo-one">
              <img src="/mahua1.png" alt="Mahua indoors with a tennis ball" />
              <figcaption>
                Curious <span>♥</span>
              </figcaption>
            </figure>
            <figure className="mahua-polaroid mahua-photo-two">
              <img src="/mahua2.png" alt="Mahua in a sunny park" />
              <figcaption>
                Stylish <span>♥</span>
              </figcaption>
            </figure>
            <figure className="mahua-polaroid mahua-photo-three">
              <img src="/mahua3.png" alt="Mahua playing on grass" />
              <figcaption>
                Chill <span>♥</span>
              </figcaption>
            </figure>
            <figure className="mahua-polaroid mahua-photo-four">
              <img src="/mahua4.png" alt="Mahua on a garden path" />
              <figcaption>
                Explorer <span>♥</span>
              </figcaption>
            </figure>
            <aside className="mahua-note mahua-note-right">
              Cute
              <br />
              Brave
              <br />
              Playful
              <br />
              Always ready
              <br />
              for adventure
              <br />♡
            </aside>
            <aside className="mahua-note mahua-note-left">
              Same
              <br />
              Pawsitive Vibes
              <br />
              in Every Game
              <br />♡
            </aside>
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
          <p>
            For business, player, or general enquiries, drop our little studio a
            line.
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

      <footer className="site-footer">
        <div className="footer-cta-panel">
          <div className="footer-content section-shell">
            <a className="brand footer-brand" href="#home">
              <img className="brand-mark" src="/mahua-mascot.png" alt="" />
              <span>
                Mahua
                <br />
                <em>Game Studio</em>
              </span>
            </a>
            <p className="footer-message">
              <span className="footer-message-text">
                <span>Let&apos;s make</span> <span>a brighter</span>{" "}
                <span>game world</span> <span>together.</span>
              </span>
              <img
                className="footer-message-paw"
                src="/footer-paw.png"
                alt=""
              />
              <span className="footer-message-underline" aria-hidden="true" />
            </p>
            <div className="footer-links">
              <a href="#games">Games</a>
              <a href="#about">About us</a>
              <a href="#contact">Contact us</a>
            </div>
          </div>
        </div>
        <small className="footer-copyright section-shell">
          © 2026 Mahua Game Studio. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
