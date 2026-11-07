import "./Programs.css";

const programs = [
  {
    category: "01 / EDUCATION",
    title: "For Education",
    description: "Learning about pollinators through science and hands-on experiences.",
    activities: ["School visits and bee experiences", "Pollinator education", "Collaborative scientific projects"],
    cta: "Explore school programs",
  },
  {
    category: "02 / RESIDENTIAL",
    title: "Rent Your Hive",
    description: "A seasonal hive in your backyard, with professional care and guidance.",
    activities: ["Hive rental and installation", "Inspections and maintenance", "Honey harvesting when available", "Pollination for gardens and orchards"],
    cta: "Ask about hive rental",
    note: "Subject to site suitability and Ontario regulations.",
  },
  {
    category: "03 / COMMUNITY",
    title: "Bees for a Cause",
    description: "Engaging seniors and communities through creativity, learning, and nature.",
    activities: ["Hive painting", "Honey recipes and tasting", "Beeswax candle making", "Guided bee experiences"],
    cta: "Connect with us",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section programs-section">
      <div className="programs-shell">
        <div className="programs-header">
          <span className="programs-kicker">PEOPLE & COMMUNITY</span>
          <h2>Experiences that bring us together.</h2>
          <p>Explore bees through education, your own backyard, and community projects.</p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <span className="program-category">{program.category}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <ul>
                {program.activities.map((activity) => <li key={activity}>{activity}</li>)}
              </ul>
              {program.note && <p className="program-note">{program.note}</p>}
              <a href="#contact" className="program-link">
                {program.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
