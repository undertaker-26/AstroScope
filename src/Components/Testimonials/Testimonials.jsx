import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    text: "The horoscope reading was incredibly accurate. I finally got the clarity I was looking for!",
    name: "– Priya, Hyderabad",
  },
  {
    text: "Sir's guidance helped me through the toughest period in my life. Deeply grateful.",
    name: "– Rajesh, Chennai",
  },
  {
    text: "I have consulted many, but his predictions and solutions were practical and spot on.",
    name: "– Neha, Bangalore",
  },
  {
    text: "Very humble and spiritual in his approach. I felt very reassured after our session.",
    name: "– Anjali, Pune",
  },
  {
    text: "Truly a guiding light during my difficult times. Highly recommend!",
    name: "– Sameer, Delhi",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonialsData[(index + i) % testimonialsData.length]);
    }
    return visible;
  };

  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-carousel">
        <button className="arrow left" onClick={prevTestimonial}>&#10094;</button>

        <div className="testimonial-multi">
          {getVisibleTestimonials().map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextTestimonial}>&#10095;</button>
      </div>

      <div className="dots">
        {testimonialsData.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
