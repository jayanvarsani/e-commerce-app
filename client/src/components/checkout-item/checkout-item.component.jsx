import React from 'react'

// import './checkout-item.styles.scss'
import { addItem, removeProduct, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, removeProduct, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item" />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => {
                if (quantity > 1) { removeItem(cartItem); }
                else {
                    if (window.confirm("Are you sure you want to remove product from your cart?")) {
                        removeProduct(cartItem);
                    }
                }
                }}>
                    &#10094;
            </div>
            {quantity}
            <div onClick={()=>addItem(cartItem) }>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{`£${price}`}</TextContainer>
        <RemoveButtonContainer onClick={() => {
            if (window.confirm("Are you sure you want to remove product from your cart?")) {
                    removeProduct(cartItem);
                }
            }}>
            &#10005;
        </RemoveButtonContainer>
    </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (item) => dispatch(removeProduct(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)