
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Bees & Bridges
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="section home">
          <div className="content">
            <h1>Bees & Bridges</h1>
            <p>Connecting people, businesses and pollinators.</p>
            <a className="button" href="#about">
              Discover More
            </a>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              Creating meaningful connections between
              communities and nature through urban beekeeping.
            </p>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="content">
            <h2>What We Do</h2>
            <p>
              Urban beekeeping, pollinator education,
              and biodiversity initiatives.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="content">
            <h2>Let's Connect</h2>
            <p>
              Interested in bringing bees and biodiversity
              to your organization?
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
