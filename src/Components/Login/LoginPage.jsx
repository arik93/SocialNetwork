import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../Forms/LoginForm';

export default function LoginPage(props) {
  const {
    login,
    isAuth
  } = props;

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
    console.log(formData);
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
