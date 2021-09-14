import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
// import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <CartDropdownContainer>
            <CartItems length={cartItems.length}>
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessage>CART IS EMPTY</EmptyMessage>
                }
            </CartItems>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartHidden()
            }
            }disabled={cartItems.length ? false : true}>CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));

