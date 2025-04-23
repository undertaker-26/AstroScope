import React from 'react';
import './About.css';
import guruImg from '../../assets/logo.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            With the blessings of my father and first Guru, Dr. C. Krishna Murthy, I bring over three decades of deep research,
            experience, and intuitive understanding in both Astrology and Numerology. My journey began with a strong spiritual
            foundation and has evolved through the study of thousands of horoscopes.
          </p>
          <p>
            My unique approach combines Vedic principles with Numerological techniques and current planetary positions (Gochara)
            to offer accurate and practical guidance. I also mentor students and guide individuals in Telugu, Tamil, Hindi, and English.
          </p>
          <p><strong>Location:</strong> Hyderabad, Telangana</p>
          <p><strong>Languages:</strong> Telugu, Tamil, Hindi, English</p>

          {/* Optional: Add download button later */}
          {/* <a href="/your-profile.pdf" download className="btn-download">Download My Profile</a> */}
        </div>

        
        
        <div className="about-img">
          <img src={guruImg} alt="Consultant" />
        </div>
       
      </div>
    </div>
  );
};

export default About;
