import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Voda Manju</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Software Engineer Trainee & Associate Analyst
            </h2>
            
            <p className="hero-description">
              Passionate about creating innovative solutions and building user-centric applications. 
              Specializing in Java, Python, JavaScript, and modern web technologies. 
              Currently working at GlobalLogic Technologies, delivering exceptional results through 
              analytical thinking and collaborative problem-solving.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Education</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary hero-btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              
              <button 
                className="btn btn-secondary hero-btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get In Touch</span>
                <span>💬</span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-avatar-container">
              <div className="hero-avatar">
                <div className="avatar-image">
                  <span>👩‍💻</span>
                </div>
                <div className="avatar-ring"></div>
                <div className="avatar-ring-2"></div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-icon floating-icon-1">⚡</div>
                <div className="floating-icon floating-icon-2">🚀</div>
                <div className="floating-icon floating-icon-3">💡</div>
                <div className="floating-icon floating-icon-4">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
