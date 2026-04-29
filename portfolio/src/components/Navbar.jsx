import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <a className="nav-logo" href="#">
        MF<span>.</span>
      </a>

      <ul className="nav-links" id="navLinks">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
        className="nav-cta"
        href="mailto:malihafatima918@gmail.com"
      >
        Hire Me →
      </a>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;