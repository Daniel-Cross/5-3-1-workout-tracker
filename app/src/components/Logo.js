import React from 'react';
import '../styles/Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/workout" />
      <div className="title">5-3-1</div>
      <div className="tagline">Track your development.</div>
    </div>
  );
};

export default Logo;
