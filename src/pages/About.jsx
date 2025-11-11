import React from "react";

export default function About() {
  return (
    <section className="about section" data-aos="fade-up">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Frontend Developer specializing in React and modern JavaScript frameworks.
          I enjoy writing clean, maintainable code and building responsive web applications
          with a strong focus on performance and accessibility.
        </p>

        <h3>Skills</h3>
        <ul className="skills">
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, Python, Java, AI & Machine Learning </li>
          <li><strong>Web Development:</strong> UI/UX Design, Responsive Development, REST API Integration, JSON Handling </li>
          <li><strong>Frameworks:</strong> React.js, Node.js, Angular, Tailwind CSS, Bootstrap, Jasmine, Scikit-learn, TensorFlow</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, npm, Babel, Ubuntu (Linux), Docker, Vercel, Render </li>
          <li><strong>Soft Skills:</strong> Time Management, Communication, Project Coordination, Decision Making, Leadership</li>
        </ul>


        <a className="btn" href="/resume.pdf" download>Download Resume</a>
      </div>
    </section>
  );
}
