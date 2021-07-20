import React from 'react'
import { withRouter } from 'react-router-dom'
import { BackgroundImageContainer, ContentContainer, ContentSubTitle, ContentTitle, MenuItemContainer } from './menu-item.styles';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer
            imageUrl={imageUrl}
            className='background-image'/>
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubTitle>SHOP NOW</ContentSubTitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem)