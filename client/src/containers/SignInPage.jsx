import React from 'react';

import NameHeader from '../components/NameHeader';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const SignInPage = props => {
  return (
    <>
      <NameHeader />
      <div className="signin-container">
        <LoginForm />
        <RegistrationForm />
      </div>
    </>
  );
};

export default SignInPage;
