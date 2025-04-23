import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../../data/blogs';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="blog-detail">Blog not found.</div>;
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-container">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <p>{blog.content}</p>
        <Link to="/blog" className="back-btn">← Back to Blogs</Link>
      </div>
    </div>
  );
};

export default BlogDetail;
