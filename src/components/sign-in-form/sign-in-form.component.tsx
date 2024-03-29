import React from 'react';
import {useState, FormEvent, ChangeEvent} from "react";
import FormInput from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInFormContainer, ButtonContainer} from './sign-in-form.styles'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {googleSignInStart, emailSignInStart} from "../../store/user/user.action";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  const dispatch = useDispatch()
  const nav = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log('user sign in failed ', error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignInFormContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type={'email'}
          required
          onChange={handleChange}
          name={'email'}
          value={email}
        />
        <FormInput
          label={'Password'}
          type={'password'}
          required
          onChange={handleChange}
          name={'password'}
          value={password}
        />
        <ButtonContainer>
          <Button type={'submit'}>Sign In</Button>
          <Button type={'button'}
                  onClick={signInWithGoogle}
                  buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;