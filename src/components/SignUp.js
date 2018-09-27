import React from 'react';
import '../styles/SignUp.css';
import { Link, Route } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="apply">
        DON'T HAVE AN ACCOUNT?{' '}
        <Link to="/register" className="signUp-link">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
