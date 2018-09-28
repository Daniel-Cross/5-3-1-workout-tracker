import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styles/Logout.css';

import '../styles/Back.css';

const Logout = () => {
  return (
    <div className="Logout">
      <Link to="/" className="logout-link">
        <Button
          variant="extendedFab"
          aria-label="Delete"
          className="logout-button"
        >
          Back To Login
        </Button>
      </Link>
    </div>
  );
};

export default Logout;
