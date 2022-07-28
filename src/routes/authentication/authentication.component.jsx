import React from 'react';
import './authontication.styles.scss'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const AuthenticationComponent = () => {
  return (
    <div className={'authentication-container'}>
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default AuthenticationComponent;
