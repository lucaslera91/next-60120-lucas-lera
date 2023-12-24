import React from "react";
import styles from "./OrderItem.module.css";

const OrderItem = ({ order }) => {
  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          $ {order.total}
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          {order.status}
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">{order.items}</td>
      </tr>
    </>
  );
};

export default OrderItem;
