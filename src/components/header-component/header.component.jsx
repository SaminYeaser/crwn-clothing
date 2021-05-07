import React from 'react'
import { connect } from 'react-redux'
import { Link }from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCartHiddne } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { ReactComponent as Logo } from '../../assets/crown-Copy.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.style.scss'



const HeaderComponent = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : 
            <CartDropdown/>
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddne
})
export default connect(mapStateToProps)(HeaderComponent)