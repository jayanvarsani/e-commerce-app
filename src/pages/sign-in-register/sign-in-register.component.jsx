import React from 'react'
// import './sign-in-register.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInRegisterContainer, SignInRegisterTitleContainer } from './sign-in-register.styles';

const SignInRegisterPage = () => (
    <SignInRegisterContainer>
        <SignInRegisterTitleContainer>Sign In Or Register</SignInRegisterTitleContainer>
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    </SignInRegisterContainer>
)

export default SignInRegisterPage