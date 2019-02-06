import React from 'react';

import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const SignInPage = props => {
  return (
    <div>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
};

export default SignInPage;
