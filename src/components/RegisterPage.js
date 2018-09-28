import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Logo from './Logo';
import Back from './Back';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <Logo />
      <RegisterForm />
      <Back />
    </div>
  );
};

export default RegisterPage;
