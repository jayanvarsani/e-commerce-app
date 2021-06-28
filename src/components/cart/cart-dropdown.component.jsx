import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className='cart-dropdown'>
            <div className={`cart-items ${cartItems.length ? '' : 'empty'}`}>
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className="empty-message">CART IS EMPTY</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartHidden()
            }
            }disabled={cartItems.length ? false : true}>CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));