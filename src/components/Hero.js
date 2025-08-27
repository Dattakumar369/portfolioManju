import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">👋 Welcome to my portfolio</div>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Voda Manju</span>
            </h1>
            <p className="hero-subtitle">Software Engineer Trainee / Associate Analyst</p>
            <p className="hero-description">
              Enthusiastic and detail-oriented aspiring software engineer with a strong foundation in programming and web development. 
              Proficient in Java, Python, JavaScript, HTML, CSS. Strong interest in software design, coding best practices, and building user-centric applications.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Languages</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch 💬
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-avatar-container">
              <div className="hero-avatar">
                <div className="avatar-image">👩‍💻</div>
                <div className="avatar-ring"></div>
                <div className="avatar-ring-2"></div>
              </div>
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
      
      <div className="hero-scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow" onClick={scrollToAbout}>⬇️</div>
      </div>
    </section>
  );
};

export default Hero;
