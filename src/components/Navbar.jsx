import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header className="header" data-aos="fade-down">
      <div className="container nav">
        <div className="brand">
          <Link to="/" className="prof-name">Inchara</Link>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/about" className="nav-btn">About</Link>
          <Link to="/projects" className="nav-btn">Projects</Link>
          <Link to="/Experience" className="nav-btn">Experience</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>

          <a className="nav-btn" href="/resume.pdf" download>Download Resume</a>
        </nav>

        <div className="controls">
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button className="hamburger" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
