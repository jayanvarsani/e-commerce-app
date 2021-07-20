import React from 'react';

// import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorMessage from '../error-message/error-message.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: '', errorMessage: ''})
        }
        catch (error) {
            console.log(error);
            this.setState({errorMessage: error.message})
        }
    }

    handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <h2 className='title'>Already have an account?</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required/>
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />
                    {this.state.errorMessage ? 
                        <ErrorMessage error={this.state.errorMessage}/> : null}
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle>Sign In With Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;