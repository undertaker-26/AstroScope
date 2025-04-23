import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program_1.jpeg';
import program_2 from '../../assets/program_2.jpeg';
import program_3 from '../../assets/program_3.jpeg';

const Programs = () => {
  return (
    <div className='programs'>
      <div className='service-card'>
        <div className="image-container">
          <img src={program_1} alt="Program 1" />
          <div className="caption">Vedic Horoscope Reading</div>
        </div>
      </div>

      <div className='service-card'>
        <div className="image-container">
          <img src={program_2} alt="Program 2" />
          <div className="caption">Numerology Consultation</div>
        </div>
      </div>

      <div className='service-card'>
        <div className="image-container">
          <img src={program_3} alt="Program 3" />
          <div className="caption">Relationship Compatibility</div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
