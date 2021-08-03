import React from 'react'
import { ErrorMessageContainer } from './error-message.styles';
import './error-message.styles.scss'

const ErrorMessage = ({error}) => (
    <ErrorMessageContainer>
        <span>
            {error}
        </span>
    </ErrorMessageContainer>
)

export default ErrorMessage