import React from "react";

const skillsData = [
  {
    title: "HTML5, CSS3, JavaScript",
    description: "Building responsive and interactive web applications.",
  },
  {
    title: "React.js",
    description: "Creating dynamic and fast user interfaces.",
  },
  {
    title: "Node.js, Express.js",
    description: "Developing robust server-side applications and RESTful APIs.",
  },
  {
    title: "SQL, NoSQL Databases",
    description:
      "Experience with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm <span className="highlight">Srujan Chakri</span>, a passionate
          web developer with a strong foundation in front-end and back-end
          technologies. I have a Bachelor's degree in Computer Science
        </p>
        <div className="skills">
          <p>My expertise includes:</p>
          <div className="skill-cards">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p>
          I love turning ideas into reality through code. When I'm not coding,
          you can find me exploring new technologies, reading tech blogs, or
          hiking in the great outdoors.
        </p>
      </div>
    </section>
  );
};

export default About;
