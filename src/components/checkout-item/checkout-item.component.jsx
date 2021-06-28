import React from 'react'

import './checkout-item.styles.scss'
import { addItem, removeProduct, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeProduct, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => {
                    if (quantity > 1) { removeItem(cartItem); }
                    else {
                        if (window.confirm("Are you sure you want to remove product from your cart?")) {
                            removeProduct(cartItem);
                        }
                    }
                }}
                className="arrow">&#10094;</div>
                {quantity}
                <div onClick={()=>addItem(cartItem) } className="arrow">&#10095;</div>
            </span>
        <span className="price">{price}</span>
            <div onClick={() => {
                if (window.confirm("Are you sure you want to remove product from your cart?")) {
                    removeProduct(cartItem)}                }
            }
            className="remove-button">&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (item) => dispatch(removeProduct(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)