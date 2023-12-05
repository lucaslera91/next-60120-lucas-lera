import { cartMockData } from '@/data/cartMockData'
import React from 'react'
import CartItem from '../ui/CartItem/CartItem'

const CartList = () => {

  //get cart list

  return (
    <div className=''>
    {cartMockData.map(element => <CartItem item={element}/>)}
</div>
  )
}

export default CartList