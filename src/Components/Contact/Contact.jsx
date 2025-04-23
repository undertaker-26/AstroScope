import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <span>Email:</span>
            <a href="mailto:yourname@example.com"> yourname@example.com</a>
          </div>
          <div className="info-item">
            <span>WhatsApp:</span>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Chat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
