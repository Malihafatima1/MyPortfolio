import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="container">

        <div className="reveal">
          <div className="section-label">Academic Background</div>
          <h2 className="section-title">
            My <span>Education</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="edu-grid">

          <div className="edu-card reveal">
            <div className="edu-degree">
              Master of Computer Applications (MCA)
            </div>
            <div className="edu-school">
              Sharnbasava University, Kalaburagi
            </div>
            <div className="edu-meta">
              📅 2023 – 2025 &nbsp;|&nbsp; 📍 Kalaburagi
            </div>
            <div className="edu-cgpa">
              ⭐ CGPA &nbsp;<span>9.23 / 10</span>
            </div>
          </div>

          <div className="edu-card reveal reveal-delay-1">
            <div className="edu-degree">
              Bachelor's in Computer Science
            </div>
            <div className="edu-school">
              Gulbarga University, Kalaburagi
            </div>
            <div className="edu-meta">
              📅 2020 – 2023 &nbsp;|&nbsp; 📍 Sedam
            </div>
            <div className="edu-cgpa">
              ⭐ CGPA &nbsp;<span>8.47 / 10</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;