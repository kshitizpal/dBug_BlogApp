
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onPageChange }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => onPageChange('home')}><a href="#home">Home</a></li>
        <li onClick={() => onPageChange('create')}><a href="#create">Create Blog</a></li>
        <li onClick={() => onPageChange('explore')}><a href="#explore">Explore</a></li>
        <li onClick={() => onPageChange('profile')}><a href="#profile">Profile</a></li> {}
        <li onClick={() => onPageChange('about')}><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
