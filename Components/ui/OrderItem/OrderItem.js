import React from 'react'
import styles from './OrderItem.module.css'

const OrderItem = ({order}) => {
console.log(order)
  return (
    <div className={`max-w-2xl mx-auto bg-white shadow-md rounded my-8`}>
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Total</th>
          <th className="py-3 px-6 text-left">Id</th>
          <th className="py-3 px-6 text-left"> Status</th>
          <th className="py-3 px-6 text-left">Items</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left whitespace-nowrap">$ {order.total}</td>
          <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
          <td className="py-3 px-6 text-left whitespace-nowrap">{order.status}</td>
          <td className="py-3 px-6 text-left whitespace-nowrap">{order.items}</td>
        </tr>
      </tbody>
    </table>
  </div>

  )
}

export default OrderItem