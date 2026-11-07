
import "./Services.css";

const businessServices = [
  {
    title: "Hands-on Beekeeping",
    description:
      "Connect your team with honey bees through guided hive experiences.",
  },
  {
    title: "Environmental Data",
    description:
      "Hive observations, environmental indicators, and accessible reporting.",
  },
  {
    title: "Branded Honey",
    description:
      "Create a unique connection between your brand and locally produced honey.",
  },
  {
    title: "Honey & Hive Products",
    description:
      "Honey harvesting, beeswax candle making, and interactive workshops.",
  },
  {
    title: "Pollinator Habitats",
    description:
      "Create flowering spaces that provide food and habitat for pollinators.",
  },
  {
    title: "Biodiversity Monitoring",
    description:
      "Explore wild pollinator diversity and plant resources through surveys and pollen DNA analysis.",
  },
];

function Services() {
  return (
    <section id="services" className="section services">
      <div className="services-container">

        <div className="services-heading">
          <span className="services-label">
            02 / OUR SERVICES
          </span>

          <h2>More than beekeeping.</h2>

          <p>
            Connecting businesses, schools, and communities
            with nature through science, education, and
            meaningful experiences.
          </p>
        </div>

        <div className="services-grid">

          {/* Business services */}
          <article className="service-card business-card">
            <span className="service-number">01 / BUSINESS</span>

            <h3>For Businesses</h3>

            <p className="service-intro">
              Bring biodiversity into your organization
              through beekeeping, education, and
              environmental initiatives.
            </p>

            <div className="business-list">
              {businessServices.map((service) => (
                <div className="business-item" key={service.title}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="services-right">

            {/* Education */}
            <article className="service-card education-card">
              <span className="service-number">
                02 / EDUCATION
              </span>

              <h3>For Education</h3>

              <p>
                Inspiring curiosity through real-world
                science and hands-on learning.
              </p>

              <ul>
                <li>School visits and bee experiences</li>
                <li>Interactive pollinator education</li>
                <li>Collaborative scientific projects</li>
              </ul>
            </article>

            {/* Community initiative */}
            <article className="service-card cause-card">
              <span className="service-number">
                03 / COMMUNITY
              </span>

              <h3>Bees for a Cause</h3>

              <p>
                Bringing the joy of bees into senior living
                communities through creativity, learning,
                and shared experiences.
              </p>

              <ul>
                <li>Hive painting and decoration</li>
                <li>Honey recipes and tasting</li>
                <li>Beeswax candle making</li>
                <li>Guided beekeeping experiences</li>
              </ul>

              <a href="#contact" className="cause-link">
                Connect with us <span aria-hidden="true">→</span>
              </a>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

