import React from 'react';
import SignUpForm from '../components/signUpForm'
import S from 'shorti'

const SignUp = () => {
  return (
    <div style={S('p-20 pt-80')}>
      <SignUpForm/>
    </div>
  );
};

export default SignUp;