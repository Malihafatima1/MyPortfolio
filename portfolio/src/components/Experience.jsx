import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">

        <div className="reveal">
          <div className="section-label">My Journey</div>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">

          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Apr 2025 – Jul 2025</div>
            <div className="timeline-company">Technosoft</div>
            <div className="timeline-role">Software Development Intern</div>
            <div className="timeline-loc">📍 Kalaburagi, India</div>

            <div className="timeline-card">
              <ul>
                <li>Built and supported web application modules using Python and Django following SDLC phases.</li>
                <li>Implemented REST APIs, database operations, and reusable components.</li>
                <li>Participated in Agile sprints, code reviews, and version control using Git/GitHub.</li>
                <li>Debugged issues, improved application reliability, and contributed to testing &amp; documentation.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal reveal-delay-1">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Dec 2024 – Jan 2025</div>
            <div className="timeline-company">
              FUEL (Friends Union for Energizing Lives)
            </div>
            <div className="timeline-role">Python Django Trainee</div>
            <div className="timeline-loc">📍 Hubli, Karnataka (On-site)</div>

            <div className="timeline-card">
              <ul>
                <li>Developed backend services and APIs using Django and SQLite.</li>
                <li>Worked with GitHub version control, branching, and collaborative workflows.</li>
                <li>Followed Agile-based project tasks and delivered working software increments.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;