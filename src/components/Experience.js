import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "GlobalLogic Technologies Pvt. Ltd.",
      position: "Associate Analyst",
      period: "Jan 2025 - Present",
      description: "Working as an Associate Analyst, focusing on data analysis, client support, and process improvements. Collaborating with cross-functional teams to deliver exceptional results.",
      achievements: [
        "Analyze and review client data, content, and system performance",
        "Assist in identifying trends and inconsistencies through audits and reports",
        "Collaborate with cross-functional teams to support process improvements",
        "Meet client requirements and deliver high-quality results"
      ],
      technologies: ["Data Analysis", "Client Support", "Process Improvement", "Cross-functional Collaboration"]
    }
  ];

  const education = [
    {
      degree: "B.Tech (Electronics & Communication Engineering)",
      school: "Sridevi Women's Engineering College",
      period: "2019 - 2023",
      description: "Completed B.Tech in ECE with a CGPA of 6.66. Studied electronics, communication systems, and engineering fundamentals."
    },
    {
      degree: "Intermediate (12th Standard)",
      school: "Sri Chaitanya Junior College",
      period: "2017 - 2019",
      description: "Completed intermediate education with 868 marks. Focused on science and mathematics."
    },
    {
      degree: "SSC (10th Standard)",
      school: "ST. Alphonsus High School",
      period: "2006 - 2017",
      description: "Completed secondary education with a CGPA of 8.5. Strong foundation in core subjects."
    }
  ];

  const extraActivities = [
    "JAM Event (Vidyouth 2.0)",
    "Bootcamp on Soft Skills"
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My professional journey</p>
        </div>
        
        <div className="experience-content">
          <div className="work-experience">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h4 className="position">{exp.position}</h4>
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p className="description">{exp.description}</p>
                    <div className="achievements">
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-items">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="school">{edu.school}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="extra-activities">
          <h3>Extra Activities & Achievements</h3>
          <div className="activities-grid">
            {extraActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">🎯</div>
                <span className="activity-text">{activity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-summary">
          <div className="summary-card">
            <h4>Career Highlights</h4>
            <div className="highlights-grid">
              <div className="highlight">
                <span className="highlight-number">1+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Projects Delivered</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">4+</span>
                <span className="highlight-text">Certifications</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Languages Known</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
