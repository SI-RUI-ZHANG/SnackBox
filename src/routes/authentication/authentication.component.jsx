import React from 'react';
import {AuthenticationContainer} from "./authontication.styles";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const AuthenticationComponent = () => {
  return (
    <AuthenticationContainer>
      <SignInForm/>
      <SignUpForm/>
    </AuthenticationContainer>
  );
};

export default AuthenticationComponent;
