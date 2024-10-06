import React, { useState, useEffect } from 'react';

const BlogForm = ({ addPost, updatePost, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  // Pre-fill the form if editing a post
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setAuthor(editingPost.author); // Set the author field
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, author };

    if (editingPost) {
      updatePost(newPost);  // Update the post
    } else {
      addPost(newPost);     // Add a new post
    }

    // Reset form after submission
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      
      <button type="submit">{editingPost ? 'Update Blog' : 'Add Blog'}</button>
    </form>
  );
};

export default BlogForm;
