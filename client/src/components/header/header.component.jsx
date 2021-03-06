import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import { connect } from 'react-redux'
// import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

// if currentUser state is changed, re-render
const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/about'>ABOUT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
      <CartIcon/>
    </OptionsContainer>
    { hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// catches the updated state and pulls out current user and pass it into Header
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

// connect returns a function which will connect the Header to mapStateToProps
// allows the state to be destructured as props and then connect that to Header
// allowing store to act as if we used default state management with state and props 
export default connect(mapStateToProps, mapDispatchToProps)(Header);