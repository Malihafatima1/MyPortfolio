import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">

        <div className="reveal">
          <div className="section-label">What I've Built</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">

          <div className="project-card featured reveal">
            <div className="project-top">
              <div className="project-icon">🛍️</div>
              <div className="project-links">
                <a href="https://github.com/Malihafatima1/trend-hive-ecommerce" className="project-link" target="_blank" rel="noopener noreferrer">⌥</a>
                <a href="https://trend-hive-frontend-two.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">↗</a>
              </div>
            </div>

            <div className="project-body">
              <div>
                <div className="project-name">Trend-Hive E-Commerce</div>
                <div className="project-desc">
                  Full-stack MERN e-commerce platform with product listings, cart, checkout, and Stripe payments. Features secure JWT authentication, protected routes, admin dashboard for product &amp; order management, and a responsive React + Tailwind UI.
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-chip">React</span>
                <span className="tech-chip">Node.js</span>
                <span className="tech-chip">Express.js</span>
                <span className="tech-chip">MongoDB</span>
                <span className="tech-chip">Stripe</span>
                <span className="tech-chip">JWT</span>
              </div>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-1">
            <div className="project-top">
              <div className="project-icon">💪</div>
              <div className="project-links">
                <a href="https://github.com/Malihafatima1/Fitness_Tracker/" className="project-link" target="_blank" rel="noopener noreferrer">⌥</a>
                <a href="https://fitness-tracker-tiz8.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">↗</a>
              </div>
            </div>

            <div className="project-body">
              <div className="project-name">Fitness Tracker AI</div>
              <div className="project-desc">
                Full-stack fitness app to monitor calorie intake, workouts &amp; daily goals. Integrates Google Gemini AI to analyze food images and auto-estimate calories. Strapi backend + React/Tailwind frontend, deployed on Vercel.
              </div>

              <div className="project-tech">
                <span className="tech-chip">React</span>
                <span className="tech-chip">Tailwind</span>
                <span className="tech-chip">Strapi</span>
                <span className="tech-chip">Gemini AI</span>
                <span className="tech-chip">Vercel</span>
              </div>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-2">
            <div className="project-top">
              <div className="project-icon">🎓</div>
              <div className="project-links">
                <a href="https://github.com/Malihafatima1/GraduationPrediction" className="project-link" target="_blank" rel="noopener noreferrer">⌥</a>
                <a href="https://malihafatima1-graduationprediction-app-anscty.streamlit.app/" className="project-link" target="_blank" rel="noopener noreferrer">↗</a>
              </div>
            </div>

            <div className="project-body">
              <div className="project-name">Graduation Prediction ML</div>
              <div className="project-desc">
                Classification ML app that predicts student graduation outcomes using Logistic Regression, Decision Tree &amp; Random Forest. Includes data preprocessing, interactive Streamlit UI &amp; data visualizations.
              </div>

              <div className="project-tech">
                <span className="tech-chip">Python</span>
                <span className="tech-chip">Scikit-learn</span>
                <span className="tech-chip">Streamlit</span>
                <span className="tech-chip">Pandas</span>
              </div>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-3">
            <div className="project-top">
              <div className="project-icon">🍽️</div>
              <div className="project-links">
                <a href="https://github.com/Malihafatima1/Recipe-Finder" className="project-link" target="_blank" rel="noopener noreferrer">⌥</a>
                <a href="https://v533jg-5173.csb.app/" className="project-link" target="_blank" rel="noopener noreferrer">↗</a>
              </div>
            </div>

            <div className="project-body">
              <div className="project-name">Recipe Ideas App</div>
              <div className="project-desc">
                Search recipes by ingredient or name with random suggestion feature. Displays ingredients, instructions, and YouTube tutorials. Features animated cards, responsive UI, and smart search-type auto-detection via TheMealDB API.
              </div>

              <div className="project-tech">
                <span className="tech-chip">React</span>
                <span className="tech-chip">Vite</span>
                <span className="tech-chip">Tailwind</span>
                <span className="tech-chip">MealDB API</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;