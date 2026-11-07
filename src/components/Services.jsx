import "./Services.css";
import honeyJar from "../assets/your-brand-honey.webp";

const businessServices = [
  { title: "Hands-on Beekeeping", description: "Guided hive experiences that connect your team with honey bees." },
  { title: "Environmental Data", description: "Hive observations, environmental indicators, and accessible reports." },
  { title: "Branded Honey", description: "Honey with a custom label that tells your organization's story." },
  { title: "Honey & Hive Products", description: "Honey harvesting, beeswax candle making, and interactive workshops." },
  { title: "Pollinator Habitats", description: "Create flowering spaces that support bees and other pollinators." },
  { title: "Biodiversity Monitoring", description: "Wild-pollinator surveys and plant-resource insights from pollen DNA." },
];

export default function Services() {
  return (
    <section id="services" className="section business-section">
      <div className="business-shell">
        <div className="business-copy">
          <span className="business-kicker"> FOR BUSINESSES</span>
          <h2>Bring nature to your business.</h2>
          <p className="business-lead">
            Connect your organization with beekeeping, biodiversity,
            and hands-on experiences backed by science.
          </p>

          <div className="business-feature-grid">
            {businessServices.map((service) => (
              <div className="business-feature" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <a className="business-cta" href="#contact">
            Let's work together <span aria-hidden="true">→</span>
          </a>
        </div>

        <figure className="business-photo">
          <img
            src={honeyJar}
            alt="Illustrative honey jar with a YOUR BRAND custom label"
            loading="lazy"
          />
          <figcaption>Your brand. Your honey. A unique local connection.</figcaption>
        </figure>
      </div>
    </section>
  );
}
