import React from 'react';
import { Link } from 'react-router-dom';
import  {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import { connect } from 'react-redux'
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// if currentUser state is changed, re-render
const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
        {currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    { hidden ? null : <CartDropdown />}
  </div>
);

// catches the updated state and pulls out current user and pass it into Header
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

// connect returns a function which will connect the Header to mapStateToProps
// allows the state to be destructured as props and then connect that to Header
// allowing store to act as if we used default state management with state and props 
export default connect(mapStateToProps)(Header);