import React from 'react'
import './home-page.styles.scss'
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './home-page.styles';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useEffect } from 'react';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const HomePage = ({ toggleCartHidden, hidden }) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
    }, [toggleCartHidden])
    return (<HomePageContainer>
        <Directory />
    </HomePageContainer>)
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)