import React from 'react'
import { CartList } from '../components/cart/CartList';
import { CartEmpty } from '../components/cart/CartEmpty';
import { useCart } from '../contexts';
import { useTitle } from '../hooks/useTitle';


export const CartPage = () => {
  const {cartlist }= useCart()

  useTitle(`Cart(${cartlist.length})`)

  return (
    <main>       
      { cartlist.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}