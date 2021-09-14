import React from 'react'
import { AboutLine, AboutPageContainer, AboutParagraphContainer, AboutTitleContainer } from './about.styles';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const AboutPage = ({ toggleCartHidden, hidden }) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
    }, [toggleCartHidden])
    const details = [
        'This app is made using React, Redux, Router, Styled Components, GraphQL, Firebase, Stripe & More.',
        '',
        'Redux is used for local state management, with persistence.',
        'Styling is done via styled components.',
        'Firebase is used for user authentication and the database.',
        'GraphQL is used for the back-end server to faciliate Stripe payments.',
        'The app is deployed to Heroku.'
    ]
    return (<AboutPageContainer>
        <AboutTitleContainer>About This App</AboutTitleContainer>
        <AboutParagraphContainer>
        {
            details.map(line => <AboutLine key={line}>{line}</AboutLine>)
        }
        </AboutParagraphContainer>
    </AboutPageContainer>)
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)