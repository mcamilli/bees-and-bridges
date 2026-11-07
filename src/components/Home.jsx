
import logo from "../assets/bees-and-bridges-logo.png";

function Home() {
  return (
    <section id="home" className="section home">
      <div className="content">
        <h1 className="sr-only">Bees & Bridges</h1>

        <img
          src={logo}
          alt="Bees & Bridges logo"
          className="home-logo"
        />

        <p>
          Connecting people, businesses and pollinators.
        </p>

        <a href="#about" className="button">
          Discover More
        </a>
      </div>
    </section>
  );
}

export default Home;
