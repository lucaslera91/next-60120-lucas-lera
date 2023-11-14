import productList from '@/data/productList'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  console.log(productList)
  return (
    <div>
        {productList.map(element => <ProductCard item={element}/>)}
    </div>
  )
}

export default ProductList