import React from 'react'

// import './checkout.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TestWarningContainer, TotalContainer } from './checkout.styles';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
        }
        <TotalContainer>
            <span>Total: £{(Math.round(total * 100) / 100).toFixed(2)}</span>
        </TotalContainer>

        <StripeCheckoutButton price={total} />
        <TestWarningContainer>
            Use the following test credit card to perform a payment
            <br />
            4242 4242 4242 4242
            <br />
            Expiry: 01/30
            <br />CVC: 123
        </TestWarningContainer>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)