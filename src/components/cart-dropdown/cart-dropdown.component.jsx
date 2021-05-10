import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import '../cart-dropdown/cart-dropdown.style.scss'
import { selectCartItems } from '../../redux/cart/cart.selector'


const CartDropdown = ({cartItems, history})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length ?
                cartItems.map(carItem => (<CartItem key={carItem.id} item={carItem}/>))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>Go to Checkout</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))