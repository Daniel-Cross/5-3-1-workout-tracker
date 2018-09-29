import React from 'react';
import RegisterForm from './RegisterForm';
import Back from './Back';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <RegisterForm />
      <Back />
    </div>
  );
};

export default RegisterPage;
