import React from 'react'
import { AboutLine, AboutPageContainer, AboutParagraphContainer, AboutTitleContainer, Link } from './about.styles';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const AboutPage = ({ toggleCartHidden, hidden }) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
    }, [toggleCartHidden])
    const details = [
        'This app is made using React, Redux, Hooks, Router, Styled Components, GraphQL, Firebase, Stripe & more.',
        '',
        'Redux is used for local state management, with persistence.',
        'Styling is done via styled components.',
        'Firebase is used for user authentication and the database.',
        'GraphQL is used for the back-end server to faciliate Stripe payments.',
        'The app is deployed to Heroku.',
    ]
    return (<AboutPageContainer>
        <AboutTitleContainer>About This App</AboutTitleContainer>
        <AboutParagraphContainer>
        {
                details.map(line => <AboutLine key={line}>{line}</AboutLine>)
        }
        </AboutParagraphContainer>
        <AboutParagraphContainer>
            <AboutLine>{'•'}</AboutLine>
            <Link href='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'>{'Udemy Course'}</Link>
            <Link href='https://www.udemy.com/certificate/UC-245f2c73-abff-4448-83b8-005b38b237bb/'>{'Certificate'}</Link>
            <Link href='https://github.com/jayanvarsani/e-commerce-app'>{'Github Source Code'}</Link>
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