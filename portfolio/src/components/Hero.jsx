import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="hero-content">
        <div className="hero-badge">Available for opportunities</div>

        <h1 className="hero-name">
          Maliha
          <span className="hero-name-accent">Fatima</span>
        </h1>

        <div className="hero-role">
          <span id="typedRole"></span>
        </div>

        <p className="hero-desc">
          MCA graduate passionate about crafting full-stack applications that
          are fast, elegant, and user-centric. From Python APIs to React
          frontends. I love building things that actually work beautifully.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View My Work ✦
          </a>
          <a href="/Resume.pdf" download className="btn-secondary">
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        scroll
      </div>
    </section>
  );
};

export default Hero;
