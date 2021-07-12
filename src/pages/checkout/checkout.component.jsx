import React from 'react'

import './checkout.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
        }
        <div className="total">
            <span>Total: £{(Math.round(total * 100) / 100).toFixed(2)}</span>
        </div>
        <StripeCheckoutButton price={total} />
        <div className="test-warning">
            Use the following test credit card to perform a payment
            <br />
            4242 4242 4242 4242 | Expiry: 01/30 | CVC: 123

        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)