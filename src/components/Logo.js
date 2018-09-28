import React from 'react';
import '../styles/Logo.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/workout">
        <Button
          variant="contained"
          color="secondary"
          className="login-button"
          type="submit"
        >
          home
        </Button>
      </Link>
      <div className="title">5-3-1</div>
      <div className="tagline">Track your development.</div>
    </div>
  );
};

export default Logo;
