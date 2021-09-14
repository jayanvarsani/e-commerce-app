import React from 'react'
// import './sign-in-register.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInRegisterContainer, SignInRegisterTitleContainer } from './sign-in-register.styles';
import { connect } from 'react-redux';
import { signInFailure, signUpFailure } from '../../redux/user/user.actions';

const SignInRegisterPage = ({resetSignInFailure, resetSignUpFailure}) => {
    resetSignInFailure(null)
    resetSignUpFailure(null)
    return (<div>
        <SignInRegisterTitleContainer>Sign In Or Register</SignInRegisterTitleContainer>
        <SignInRegisterContainer>
            <SignIn />
            <SignUp />
        </SignInRegisterContainer>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    resetSignInFailure: error => dispatch(signInFailure(error)),
    resetSignUpFailure: error => dispatch(signUpFailure(error))
})

export default connect(null, mapDispatchToProps)(SignInRegisterPage)