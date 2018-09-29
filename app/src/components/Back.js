import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styles/Back.css';

import '../styles/Back.css';

const Back = () => {
  return (
    <div className="Back">
      <Link to="/" className="back-link">
        <Button
          variant="extendedFab"
          aria-label="Delete"
          className="back-button"
        >
          Back To Login
        </Button>
      </Link>
    </div>
  );
};

export default Back;
