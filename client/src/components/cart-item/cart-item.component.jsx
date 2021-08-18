import React from 'react';
import { CartItemContainer, ItemCost, ItemDetails, ItemName } from './cart-item.styles';
// import './cart-item.styles.scss'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <ItemCost>Quantity: {quantity} | £{(Math.round(price*quantity * 100) / 100).toFixed(2)}</ItemCost>
        </ItemDetails>
    </CartItemContainer>
);

export default React.memo(CartItem);