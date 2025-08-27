import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  // Debug: Log the public URL
  console.log('Public URL:', process.env.PUBLIC_URL);

  const projects = [
    {
      id: 1,
      title: "Microcontroller Based Automatic Sun Tracking Solar Panel",
      description: "A major project using ESP32 microcontroller, servo motors, and LDR sensors to automatically track the sun's position and optimize solar energy absorption. The system continuously adjusts the solar panel angle for maximum efficiency.",
      image: "☀️",
      category: "hardware",
      technologies: ["ESP32", "Servo Motor", "LDR Sensors", "C Programming", "IoT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "IoT Based Smart Shoes for the Blind",
      description: "An innovative IoT-enabled smart shoes project designed to assist visually impaired individuals. Features solar power generation and intelligent navigation assistance through embedded sensors and connectivity.",
      image: "👟",
      category: "iot",
      technologies: ["IoT", "Solar Power", "Embedded Systems", "Sensors", "C Programming"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "GroceryOL.in",
      description: "A full-stack e-commerce website for grocery shopping built with Spring Boot Java backend, React frontend, and deployed on AWS. Features include user authentication, product management, shopping cart, and secure payment integration.",
      image: `${process.env.PUBLIC_URL}/groceryol-logo.png`,
      category: "web",
      technologies: ["Spring Boot", "Java", "React", "AWS", "MySQL", "REST API"],
      liveUrl: "https://groceryol.in",
      githubUrl: "#",
      isImage: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'hardware', label: 'Hardware' },
    { key: 'iot', label: 'IoT' },
    { key: 'web', label: 'Web Development' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.isImage ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-logo"
                    style={{ border: '3px solid red' }}
                    onLoad={(e) => {
                      console.log('✅ GroceryOL logo loaded successfully:', project.image);
                      console.log('📏 Image element:', e.target);
                      console.log('📐 Natural dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight);
                      console.log('🎨 Computed styles:', window.getComputedStyle(e.target));
                      console.log('🔍 Parent element:', e.target.parentNode);
                    }}
                    onError={(e) => {
                      console.error('❌ Failed to load GroceryOL logo:', e.target.src);
                      console.error('🚫 Error details:', e);
                      console.error('🌐 Current URL:', window.location.href);
                      console.error('📁 Public folder:', process.env.PUBLIC_URL);
                      console.error('🖼️ Image path being used:', project.image);
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'project-icon';
                      fallback.textContent = '🛒';
                      fallback.style.border = '3px solid blue';
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                ) : (
                  <div className="project-icon">{project.image}</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Interested in working together? Let's discuss your project!</p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
