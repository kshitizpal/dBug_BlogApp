import React, { useEffect, useState } from 'react';

const CreateBlog = ({ addPost, updatePost, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      // Creating the updated post object
      const updatedPost = { ...editingPost, title, content };
      console.log('Updating post:', updatedPost); // Debugging output
      updatePost(updatedPost);
    } else {
      addPost({ title, content });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        required
      />
      <button type="submit">{editingPost ? 'Update' : 'Create'} Blog</button>
    </form>
  );
};

export default CreateBlog;
