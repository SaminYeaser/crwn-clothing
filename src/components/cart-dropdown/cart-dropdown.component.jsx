import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import '../cart-dropdown/cart-dropdown.style.scss'

const CartDropdown = ()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
)
export default CartDropdown