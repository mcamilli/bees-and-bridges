

import icon from "../assets/bees-and-bridges-icon.png";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img
          src={icon}
          alt=""
          className="navbar-logo"
        />
        <span>Bees & Bridges</span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;

