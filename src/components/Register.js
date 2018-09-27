import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Logo from './Logo';
import '../styles/Register.css';

const Register = () => {
  return (
    <div className="Register">
      <Logo />
      <RegisterForm />
    </div>
  );
};

export default Register;
