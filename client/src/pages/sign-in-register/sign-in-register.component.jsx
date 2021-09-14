import React from 'react'
// import './sign-in-register.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInRegisterContainer, SignInRegisterTitleContainer } from './sign-in-register.styles';
import { connect } from 'react-redux';
import { signInFailure, signUpFailure } from '../../redux/user/user.actions';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { useEffect } from 'react';

const SignInRegisterPage = ({resetSignInFailure, resetSignUpFailure, toggleCartHidden, hidden}) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
        resetSignInFailure(null)
        resetSignUpFailure(null)
    }, [toggleCartHidden, resetSignInFailure, resetSignUpFailure]);
    
    
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
    resetSignUpFailure: error => dispatch(signUpFailure(error)),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInRegisterPage)