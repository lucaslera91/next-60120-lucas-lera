"use client";
import { useOrdersContext } from "@/Contexts/OrdersProvider";
import { getOrdersListApi } from "@/service/ordersService";
import React, { useEffect } from "react";
import OrderItem from "../ui/OrderItem/OrderItem";

const OrderList = () => {
  //const initialUser = "user-name-random1";
  //const uid = getCookie("libreriaAppCookie");
  const { getOrders, ordersList } = useOrdersContext();
  //const ordersList = await getOrdersListApi(uid);
  useEffect(() => {
    getOrders();
  }, []);

  // return ordersList.length < 1 ? (
  //   <tr className="text-gray-600 text-sm font-light">Crea to primera orden</tr>
  // ) : (
  //   ordersList?.map((element, idx) => (
  //     <tr className="text-gray-600 text-sm font-light">
  //       <OrderItem key={idx} order={element} />
  //     </tr>
  //   ))
  // );
  return ordersList.length < 1 ? (
    <tr>
      <td colSpan="2" className="py-2 px-4">
        <div className="bg-white p-4 rounded">
          <p className="text-gray-500">Crea tu primera orden.</p>
        </div>
      </td>
    </tr>
  ) : (
    ordersList.map((element, idx) => {
      const { total, status, id, items } = element;
      return (
        <tr idx={idx}>
          <td colSpan="2" className="py-3 text-left px-6">
            <p>${total}</p>
          </td>
          <td colSpan="2" className="py-3 text-left px-6">
            <p className="text-gray-500">{id}</p>
          </td>
          <td colSpan="2" className="py-3 text-left px-6">
            <p className="text-gray-500">{status}</p>
          </td>
          <td colSpan="2" className="py-3 text-left px-6">
            <p className="text-gray-500">{items}</p>
          </td>
        </tr>
      );
    })
  );
};

export default OrderList;
