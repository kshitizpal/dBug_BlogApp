import React from 'react';

const BlogPost = ({ title, content, onEdit, onDelete }) => {
 
  const handleEdit = () => {
    onEdit({ title, content });
  };

  
  const handleDelete = () => {
    onDelete(title); 
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
