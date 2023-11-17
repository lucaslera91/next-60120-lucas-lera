import productList from '@/data/productList'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  return (
    <div className='display flex w-100 overflow-hidden flex-wrap justify-center'>
        {productList.map(element => <ProductCard item={element}/>)}
    </div>
  )
}

export default ProductList