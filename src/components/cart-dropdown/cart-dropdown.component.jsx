import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

import '../cart-dropdown/cart-dropdown.style.scss'

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
const mapStateToProps = ({cart: {cartItems}})=>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)