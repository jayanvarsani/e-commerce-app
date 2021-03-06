import React, {useState} from 'react';
// import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorMessage from '../error-message/error-message.component';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSignInError } from '../../redux/user/user.selectors';

const SignIn = ({emailSignInStart, googleSignInStart, signInError}) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials

    const handleSubmit = async e => {
        e.preventDefault()
        emailSignInStart(email, password)
    }

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setCredentials({...userCredentials, [name]: value})
    }

    return (
        <SignInContainer>
            <h2 className='title'>Already have an account?</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required/>
                <FormInput
                    name='password'
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                {signInError ? 
                    <ErrorMessage error={signInError}/> : null}
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogle>Sign In With Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

const mapStateToProps = createStructuredSelector({
    signInError: selectSignInError,
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);