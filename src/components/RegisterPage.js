import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Logo from './Logo';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <Logo />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
