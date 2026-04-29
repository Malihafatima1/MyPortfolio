import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-visual">
            <div className="about-avatar-ring">
              <div className="about-avatar-inner">👩‍💻</div>
            </div>
            <div className="about-badge-float">⚡ 9.23 CGPA</div>
            <div className="about-badge-float">🚀 Full Stack Dev</div>
          </div>

          <div className="about-text reveal">
            <div className="section-label">About Me</div>

            <h2 className="section-title">
              Crafting code,<br />
              <span>one pixel at a time</span>
            </h2>

            <div className="section-line"></div>

            <p>
              Hey there! I'm Maliha Fatima a Full Stack Developer based in Kalaburagi, India.
              I recently completed my MCA with a stellar 9.23 CGPA and I'm now on a mission
              to build scalable, delightful software products.
            </p>

            <p>
              My stack spans from Python &amp; Django on the backend to React &amp; Next.js
              on the frontend. I've shipped real-world apps during internships, tackled ML
              problems, and love experimenting with new tech.
            </p>

            <p>
              When I'm not coding, you'll find me exploring AI papers or finding new ways
              to merge design with engineering.
            </p>

            <div className="about-stats">
              <div className="stat-card reveal reveal-delay-1">
                <span className="stat-num">9.23</span>
                <span className="stat-label">MCA CGPA</span>
              </div>

              <div className="stat-card reveal reveal-delay-2">
                <span className="stat-num">4+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>

              <div className="stat-card reveal reveal-delay-3">
                <span className="stat-num">2</span>
                <span className="stat-label">Internships</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;