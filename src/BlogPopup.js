import React from 'react';
import './Popup.css';

const BlogPopup = ({ post, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>{post.title}</h2>
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> {post.date}</p>
        <p>{post.content}</p> {}
        <button className="close-button" onClick={onClose}>Close</button> {}
      </div>
    </div>
  );
};

export default BlogPopup;
