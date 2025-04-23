import React from 'react';
import './Blogs.css';
import blogPosts from '../../data/blogs';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-heading">Blog & Insights</h1>
      <div className="blog-grid">
        {blogPosts.map((blog) => (
          <div className="blog-post" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
