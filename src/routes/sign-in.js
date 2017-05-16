import React from 'react';
import SignInForm from '../components/sign-in-form'
import S from 'shorti'

const SignIn = () => {
  return (
    <div style={S('p-20')}>
      <SignInForm/>
      SignIn
    </div>
  );
};

export default SignIn;
