import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', controlNavbar);
    } else {
      setShowNavbar(true);
    }
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, location.pathname]);

  const isBlogPage = location.pathname.startsWith('/blog');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`navbar ${showNavbar ? 'fade-in' : 'fade-out'} ${isBlogPage ? 'light' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">Astro Scope</span>
      </div>

      <ul>
        {!isBlogPage ? (
          <>
            <li><ScrollLink to="hero" smooth duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth duration={500}>About Me</ScrollLink></li>
            <li><ScrollLink to="testimonials" smooth duration={500}>Testimonials</ScrollLink></li>
            <li><ScrollLink to="services" smooth duration={500}>Services Offered</ScrollLink></li>
            <li><ScrollLink to="appointment" smooth duration={500}>Appointment Booking</ScrollLink></li>
            <li><RouterLink to="/blog">Blog/Insights</RouterLink></li>
            <li>
              <ScrollLink to="contact" smooth duration={500}>
                <button className="btn">Contact Us</button>
              </ScrollLink>
            </li>
          </>
        ) : (
          <li><RouterLink to="/">← Back to Home</RouterLink></li>
        )}
      </ul>

      <div className="profile-icon-wrapper">
        {user ? (
          <div className="profile-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
            👤
            {dropdownOpen && (
              <div className="dropdown">
                <RouterLink to="/my-bookings">My Bookings</RouterLink>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <RouterLink to="/login" className="login-link">Login</RouterLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
