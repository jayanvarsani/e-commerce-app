import React from 'react'
import './home-page.styles.scss'
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './home-page.styles';

const HomePage = () => {
    return (<HomePageContainer>
        <Directory />
    </HomePageContainer>)
}

export default HomePage