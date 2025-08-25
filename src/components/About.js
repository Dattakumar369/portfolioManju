import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-text-section">
              <div className="about-intro">
                <h3 className="about-subtitle">Who I Am</h3>
                <p className="about-description">
                  I'm Voda Manju, an enthusiastic and detail-oriented aspiring software engineer 
                  with a strong foundation in programming and web development. I'm passionate about 
                  creating innovative solutions and building user-friendly applications that make a difference.
                </p>
                
                <p className="about-description">
                  Currently working as an Associate Analyst at GlobalLogic Technologies Pvt. Ltd., 
                  I enjoy solving complex problems and collaborating with cross-functional teams to 
                  deliver exceptional results. My journey in tech started with curiosity and has evolved 
                  into a professional passion for clean code and best practices.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 1 1.946-.806 3.42 3.42 0 0 1 1.946.806 3.42 3.42 0 0 1 .806 1.946 3.42 3.42 0 0 1-.806 1.946 3.42 3.42 0 0 1-1.946.806 3.42 3.42 0 0 1-1.946-.806 3.42 3.42 0 0 1-.806-1.946 3.42 3.42 0 0 1 .806-1.946z"/>
                      <path d="M10 3v4a1 1 0 0 1-1 1H5m14 0a1 1 0 0 1-1-1V3m1 1v4a1 1 0 0 1-1 1h-4m-4 0a1 1 0 0 1-1-1V3m1 1v4a1 1 0 0 1-1 1H5"/>
                    </svg>
                  </div>
                  <div className="highlight-content">
                    <h4>Problem Solver</h4>
                    <p>Strong analytical thinking and creative solutions</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div className="highlight-content">
                    <h4>Fast Learner</h4>
                    <p>Quick to adapt to new technologies and frameworks</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div className="highlight-content">
                    <h4>Team Player</h4>
                    <p>Excellent communication and collaboration skills</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="about-image-container">
                <div className="about-image">
                  <div className="image-placeholder">
                    <span>👩‍💻</span>
                  </div>
                  <div className="image-decoration"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-education">
            <h3 className="education-title">Education Journey</h3>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="education-content">
                  <h4>B.Tech (Electronics & Communication Engineering)</h4>
                  <p className="education-school">Sridevi Women's Engineering College</p>
                  <p className="education-period">2019 – 2023</p>
                  <span className="education-grade">CGPA: 6.66</span>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="education-content">
                  <h4>Intermediate (12th Standard)</h4>
                  <p className="education-school">Sri Chaitanya Junior College</p>
                  <p className="education-period">2017 – 2019</p>
                  <span className="education-grade">Marks: 868</span>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="education-content">
                  <h4>SSC (10th Standard)</h4>
                  <p className="education-school">ST. Alphonsus High School</p>
                  <p className="education-period">2006 – 2017</p>
                  <span className="education-grade">CGPA: 8.5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-languages">
            <h3 className="languages-title">Languages I Speak</h3>
            <div className="languages-grid">
              <div className="language-item">
                <div className="language-flag">🇮🇳</div>
                <div className="language-info">
                  <h4>Telugu</h4>
                  <p>Native</p>
                </div>
              </div>
              
              <div className="language-item">
                <div className="language-flag">🇺🇸</div>
                <div className="language-info">
                  <h4>English</h4>
                  <p>Fluent</p>
                </div>
              </div>
              
              <div className="language-item">
                <div className="language-flag">🇮🇳</div>
                <div className="language-info">
                  <h4>Hindi</h4>
                  <p>Fluent</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Education</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 1 1.946-.806 3.42 3.42 0 0 1 1.946.806 3.42 3.42 0 0 1 .806 1.946 3.42 3.42 0 0 1-.806 1.946 3.42 3.42 0 0 1-1.946.806 3.42 3.42 0 0 1-1.946-.806 3.42 3.42 0 0 1-.806-1.946 3.42 3.42 0 0 1 .806-1.946z"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Programming Languages</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
