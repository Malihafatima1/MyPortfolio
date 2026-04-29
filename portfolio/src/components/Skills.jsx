import React from "react";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        
        <div className="reveal">
          <div className="section-label">What I Know</div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">

          <div className="skill-category reveal">
            <div className="skill-cat-icon">🌐</div>
            <div className="skill-cat-title">Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div className="skill-category reveal reveal-delay-1">
            <div className="skill-cat-icon">⚙️</div>
            <div className="skill-cat-title">Backend</div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>

          <div className="skill-category reveal reveal-delay-2">
            <div className="skill-cat-icon">🗄️</div>
            <div className="skill-cat-title">Databases</div>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQLite</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-category reveal reveal-delay-3">
            <div className="skill-cat-icon">🤖</div>
            <div className="skill-cat-title">AI / ML</div>
            <div className="skill-tags">
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">NLTK</span>
              <span className="skill-tag">TF-IDF</span>
              <span className="skill-tag">Logistic Regression</span>
              <span className="skill-tag">Streamlit</span>
            </div>
          </div>

          <div className="skill-category reveal">
            <div className="skill-cat-icon">🛠️</div>
            <div className="skill-cat-title">DevOps &amp; Tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Vercel</span>
            </div>
          </div>

          <div className="skill-category reveal reveal-delay-1">
            <div className="skill-cat-icon">💡</div>
            <div className="skill-cat-title">Languages</div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;