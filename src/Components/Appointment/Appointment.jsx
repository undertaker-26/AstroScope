import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Clear message after 3s
  };

  return (
    <div className="appointment" id="appointment">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="date" name="dob" placeholder="Date of Birth" required />
        <input type="time" name="tob" placeholder="Time of Birth" required />
        <input type="text" name="pob" placeholder="Place of Birth" required />

        <select name="service" required>
          <option value="">Select a Service</option>
          <option value="Horoscope Reading">Horoscope Reading</option>
          <option value="Numerology">Numerology</option>
          <option value="Compatibility Analysis">Compatibility Analysis</option>
        </select>

        <input type="datetime-local" name="preferred_date" required />

        <textarea name="message" rows="4" placeholder="Any additional message (optional)" />

        <button type="submit" className="btn-submit">Book Now</button>

        {isSubmitted && <p className="success-message">Your appointment has been submitted!</p>}
      </form>
    </div>
  );
};

export default Appointment;
