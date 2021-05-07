import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import '../cart-dropdown/cart-dropdown.style.scss'
import { selectCartItems } from '../../redux/cart/cart.selector'

const CartDropdown = ({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(carItem => <CartItem key={carItem.id} item={carItem}/>)
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown)