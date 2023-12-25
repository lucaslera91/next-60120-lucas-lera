import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute';
import React from 'react'
import CartList from '../../Components/CartList/CartList';

const Carrito = () => {
  return (
    <>
    <ProtectedRoute />
    <CartList />
    </>
  )
}

export default Carrito;