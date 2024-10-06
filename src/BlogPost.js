import React from 'react';

const BlogPost = ({ title, content, onEdit, onDelete }) => {
  // Handle edit action
  const handleEdit = () => {
    onEdit({ title, content });
  };

  // Handle delete action
  const handleDelete = () => {
    onDelete(title); // Passing title directly for deletion
  };

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="post-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BlogPost;
