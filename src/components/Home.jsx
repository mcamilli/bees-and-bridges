
import "./Home.css";
import heroImage from "../assets/bees-and-bridges-logo.png";

function Home() {
  return (
    <section
      id="home"
      className="section hero-section"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 30, 19, 0.75) 0%,
            rgba(5, 30, 19, 0.35) 50%,
            rgba(5, 30, 19, 0.05) 100%
          ),
          url("${heroImage}")
        `,
      }}
    >
      <div className="hero-inner">

        <span className="hero-eyebrow">
          WINDSOR-ESSEX · ONTARIO
        </span>

        <h1 className="hero-title">
          Bees & Bridges
        </h1>

        <p className="hero-description">
          Connecting businesses, communities and nature
          through beekeeping, biodiversity and education.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="hero-primary">
            Explore Services
          </a>

          <a href="#about" className="hero-secondary">
            Learn More →
          </a>
        </div>

      </div>

      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Home;
