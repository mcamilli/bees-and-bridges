
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-container">

        <div className="about-intro">
          <span className="about-label">
            ABOUT US
          </span>

          <h2>Bridging people and nature.</h2>

          <p>
            At Bees & Bridges, we believe businesses
            and communities can play an important role
            in supporting pollinators and biodiversity.
          </p>

          <p>
            Based in Windsor-Essex, we bring together
            scientific knowledge, practical beekeeping,
            and community engagement to create
            meaningful connections with nature.
          </p>

          <a href="#services" className="about-link">
            Explore our services <span>→</span>
          </a>
        </div>

        <div className="about-values">
          <div className="value-card">
            <span className="value-number">01</span>
            <h3>Science-driven</h3>
            <p>
              Applying research and evidence-based
              approaches to beekeeping.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">02</span>
            <h3>Beekeeping expertise</h3>
            <p>
              Over a decade of hands-on beekeeping
              and honey bee research experience.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">03</span>
            <h3>Community connection</h3>
            <p>
              Bringing businesses, people, and
              pollinators closer together.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
