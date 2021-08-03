import React from 'react'
// import './sign-in-register.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInRegisterContainer, SignInRegisterTitleContainer } from './sign-in-register.styles';

const SignInRegisterPage = () => (
    <div>
        <SignInRegisterTitleContainer>Sign In Or Register</SignInRegisterTitleContainer>
        <SignInRegisterContainer>
            <SignIn />
            <SignUp />
        </SignInRegisterContainer>
    </div>
)

export default SignInRegisterPage