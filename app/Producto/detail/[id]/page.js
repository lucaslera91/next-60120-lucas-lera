import React from 'react'

const Detail = ({params}) => {
    const {id} = params
  return (
    <div>Producto con detalle {id}</div>
  )
}

export default Detail;