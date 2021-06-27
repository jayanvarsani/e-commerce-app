import React from 'react'
import './sign-in-register.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInRegisterPage = () => (
    <div className="main-container">
        <h1>Sign In Or Register</h1>
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInRegisterPage