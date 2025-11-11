import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Developed and deployed a full-stack e-commerce application with dynamic product management and cart operations.",
    repo: "https://github.com/Inchara-Manjunath/E-Commerce-Website.git",
    live: "https://e-commerce-website-1-th9o.onrender.com",
  },
  {
    title: "Chatbot Web App",
    desc: "Developed an interactive chatbot web app capable of processing user queries and generating responses and stores data.",
    repo: "https://github.com/Inchara-Manjunath/simple-chatbot.git",
    live: "https://simple-chatbot1.netlify.app/",
  },
  {
    title: "Movie Finder App",
    desc: "Developed and deployed a full-stack Netflix-style movie discovery app with search, Wishlist, and like features.",
    repo: "https://github.com/Inchara-Manjunath/Movie-Finder.git",
    live: "https://movie-finder1.netlify.app",
  },
];

export default function Projects() {
  return (
    <section className="projects section" data-aos="fade-up">
      <div className="container">
        <h2>Projects</h2>
        <div className="cards">
          {projects.map((p, i) => (
            <article className="card" key={i} data-aos="fade-up" data-aos-delay={i*100}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.repo} target="_blank" rel="noreferrer">GitHub➡️</a>
              <br />
              <a href={p.live} target="_blank" rel="noreferrer">Demo➡️</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
