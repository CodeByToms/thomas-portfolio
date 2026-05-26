// App.js

import React from "react";
import "./App.css";

function App() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Java",
    "C",
    "Git & GitHub",
    "Data Structures",
    "MySQL",
  ];

  const projects = [
    {
      title: "Activity Point Management System",
      description:
        "A web application developed to automate student activity point management, certificate verification, approval tracking, and transparency.",
        image: "/images/landing.png",
    },

  ];

  const certificates = [
    {
      name: "Virtual Internship Certificate",
      image: "/images/internship.png",
    },
    {
      name: "ML Certificate",
      image: "/images/ml.png",
    },
    {
      name: "Infosys Python Certificate",
      image: "/images/python.png",
    },
    {
      name: "Introduction to AI Certificate",
      image: "/images/ai.png",
    },
    {
      name: "CSS,Java script and Python Certificate",
      image: "/images/css.png",
    },
  ];

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="text-content">
            <h1>Thomas AC</h1>

            <p>
              BTech Computer Science student passionate about Full Stack
              Development, Software Engineering, and Machine Learning.
              Skilled in React, Node.js, Python, and FastAPI with hands-on
              project experience.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/CodeByToms"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/thomas-a-c/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="image-content">
            <img
              src="/images/profile.png"
              alt="Thomas AC"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <h2>About Me</h2>

        <p>
          I am a BTech CSE student interested in building scalable web
          applications and intelligent systems. I enjoy working on full stack
          projects and continuously learning modern technologies to improve my
          development skills.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section">
        <h2>Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img
          src={project.image}
          alt={project.name}
        />
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
<section className="section">
  <h2>Certificates</h2>

  <div className="certificate-container">
    {certificates.map((certificate, index) => (
      <div className="certificate-card" key={index}>
        <img
          src={certificate.image}
          alt={certificate.name}
        />

        <h3>{certificate.name}</h3>
      </div>
    ))}
  </div>
</section>

{/* CONTACT SECTION */}
<section className="section">
  <h2>Contact me</h2>

  <div className="contact-container">
    <p>Email: thomasac@example.com</p>


  </div>
</section>
    </div>
  );
}

export default App;
