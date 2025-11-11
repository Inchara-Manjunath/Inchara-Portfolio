import React from "react";
import "../styles/contact.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact section" data-aos="fade-up">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Get in touch with me on these platforms 👇</p>

        <div className="contact-details">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+919901574636">+91-9901574636</a>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="incharamanjunath0808@gmail.com">incharamanjunath0808@gmail.com</a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/inchara-m" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/Inchara-Manjunath" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
