import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Calculator</h3>
          <p>Designed a Calculator using react js</p>
          <a href="https://calculator-pi-nine-81.vercel.app/">Calculator</a>
        </div>
        <div className="project-card">
          <h3>Age Calculator</h3>
          <p>Designed a Calculator using react js</p>
          <a href="https://age-calculator-five-mauve.vercel.app/">
            Age Calculator
          </a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
