import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="home section" data-aos="fade-up">
      <div className="container home-grid">
        <div className="intro">
          <h1>Hello, I'm Inchara M</h1>
          <p><strong>Hi, I'm Inchara M,</strong> a passionate Frontend Developer who loves turning 
            ideas into interactive, user-friendly web experiences. I specialize in React.js, 
            JavaScript, HTML, and CSS, with a focus on creating clean, responsive, and accessible designs.</p>
          <div className="cta">
            <a className="btn" href="/projects">View Projects</a>
            <a className="btn ghost" href="/contact">Contact Me</a>
          </div>
        </div>
        
        
        <div className="hero" data-aos="zoom-in">
          <img
            src={profilePic}
            alt="Inchara Manjunath"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}
