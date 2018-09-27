import React, { Component } from 'react';
import '../styles/LoginPage.css';
import Logo from './Logo';
import Login from './Login';
import SignUp from './SignUp';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <Logo />
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default LoginPage;
