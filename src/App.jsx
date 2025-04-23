// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetail from './Pages/Blogs/BlogDetail';
import Login from './Pages/Login/Login';
import MyBookings from './Pages/MyBookings/MyBookings';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
