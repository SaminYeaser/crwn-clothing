import React from 'react'

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import '../cart-icon/cart-icon.style.scss'

export const CartIcon = ()=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

