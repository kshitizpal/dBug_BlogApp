import React, { useState } from 'react';
import BlogForm from './BlogForm';
import Sidebar from './Sidebar';
import BlogPopup from './BlogPopup'; // Importing the BlogPopup component
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null); // State for the selected post

  // Add a new post
  const addPost = (post) => {
    const newPost = {
      ...post,
      date: new Date().toLocaleDateString(), // Automatically add the current date
    };
    setPosts([...posts, newPost]);
    setCurrentPage('home');
  };

  // Update an existing post
  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => 
      post.title === editingPost.title ? updatedPost : post
    ));
    setEditingPost(null);
    setCurrentPage('home');
  };

  // Delete a post
  const deletePost = (postToDeleteTitle) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.title !== postToDeleteTitle));
    }
  };

  // Edit a post
  const editPost = (post) => {
    setEditingPost(post);
    setCurrentPage('create');
  };

  // Handle page change from sidebar
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Profile section
  const profileSection = (
    <div className="profile-section">
      <h2>Profile</h2>
      <p><strong>Name:</strong> Kshitij Pal</p>
      <p><strong>Roll No.:</strong> RA2311032010004</p>
    </div>
  );

  return (
    <div className="app">
      <Sidebar onPageChange={handlePageChange} />
      <div className="main-content">
        <header className="app-header">
          <h1>Blog Central</h1>
          <h2>Your One-Stop Destination for Your Blogging Journey</h2>
          <p>by Kshitij Pal</p>
        </header>
        {currentPage === 'home' && (
          <>
            <h1>Your Blogs</h1>
            <div className="blog-list">
              {posts.length === 0 ? (
                <p>No blogs to display</p>
              ) : (
                posts.map((post, index) => (
                  <div key={index} className="blog-item" onClick={() => setSelectedPost(post)}>
                    <h2>{post.title}</h2>
                    <p><strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}</p> {/* Display author and date */}
                    <p>{post.content.substring(0, 100)}...</p> {/* Show preview */}
                    <button className="edit-button" onClick={(e) => { e.stopPropagation(); editPost(post); }}>Edit</button>
                    <button className="delete-button" onClick={(e) => { e.stopPropagation(); deletePost(post.title); }}>Delete</button>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {currentPage === 'create' && (
          <BlogForm 
            addPost={addPost} 
            updatePost={updatePost} 
            editingPost={editingPost} 
          />
        )}

        {selectedPost && ( // Popup display logic
          <BlogPopup post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}

        {/* Display Profile Section when 'profile' is selected in Sidebar */}
        {currentPage === 'profile' && profileSection}
      </div>
    </div>
  );
};

export default App;
