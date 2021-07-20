import React from 'react';
// import './collection-item.styles.scss'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { AddButton, BackgroundImage, CollectionFooter, CollectionItemContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const {price, imageUrl, name } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl = {imageUrl}/>
            <CollectionFooter>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>£{price}</PriceContainer>
            </CollectionFooter>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)