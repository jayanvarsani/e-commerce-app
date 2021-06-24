import React from 'react'
import './error-message.styles.scss'

const ErrorMessage = ({error}) => (
    <div className="error-container">
        <span>
            {error}
        </span>
    </div>
)

export default ErrorMessage