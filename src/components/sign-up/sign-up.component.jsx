import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import ErrorMessage from '../error-message/error-message.component'

// import './sign-up.styles.scss'
import { SignUpContainer } from './sign-up.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props
        if (password !== confirmPassword) {
            this.setState({ errorMessage: "Passwords Don't Match!" });
            return;
        }
        signUpStart(displayName, email, password)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <SignUpContainer>
                <h2 className="title">Do not have an account?</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    {this.state.errorMessage ? 
                        <ErrorMessage error={this.state.errorMessage}/> : null}
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUp)