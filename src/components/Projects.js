import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1 goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2 goes here.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
