
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;

