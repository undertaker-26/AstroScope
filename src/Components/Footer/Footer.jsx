import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-stars"></div> {/* Glowy star strip */}

      <div className="footer-top">
        <h2>Astro Scope</h2>
        <p>Your journey to clarity through astrology and numerology</p>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#appointment">Book a Session</a>
      </div>

      <div className="footer-social">
        <a href="#"><i className="fab fa-whatsapp"></i></a>
        <a href="#"><i className="far fa-envelope"></i></a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astro Scope. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
