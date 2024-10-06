import React from 'react';

const BlogList = ({ posts, editPost, deletePost }) => {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <div key={index} className="blog-item">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="edit-button" onClick={() => editPost(post)}>Edit</button>
          <button className="delete-button" onClick={() => deletePost(post.title)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
