import React from 'react'
import AddToCartButton from '../ui/Button/AddToCartButton'
import OperationButton from '../ui/Button/OperationButton'
import Card from '../ui/Card/Card'

const ProductCard = ({item}) => {
  return (
    <div className='p-2'>
        <Card item={item}/>
        <div className='flex w-100 justify-around'>
          <OperationButton operation='substract' side='left'/> 
          <AddToCartButton/>
          <OperationButton operation='add' side='right'/>
        </div>
    </div>
  )
}

export default ProductCard