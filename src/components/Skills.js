import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "C" }
      ]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot" },
        { name: "REST API" },
        { name: "Microservices" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL" },
        { name: "AWS" },
        { name: "Microsoft Azure" }
      ]
    }
  ];

  const certifications = [
    { name: "C Programming", issuer: "Certification Body" },
    { name: "Python Programming", issuer: "Certification Body" },
    { name: "Hands-on Linux", issuer: "Certification Body" },
    { name: "Fundamentals of Azure", issuer: "Microsoft" }
  ];

  const softSkills = [
    { skill: "Problem Solving", description: "Strong analytical and problem-solving skills" },
    { skill: "Fast Learning", description: "Eager to learn and adapt to new technologies" },
    { skill: "Team Player", description: "Excellent communication and collaboration" },
    { skill: "Time Management", description: "Strong organizational and time management skills" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-section">
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="soft-skills-section">
          <h3>Soft Skills & Strengths</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <h4>{skill.skill}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
