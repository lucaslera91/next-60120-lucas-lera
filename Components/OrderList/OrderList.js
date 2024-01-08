"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useOrdersContext } from "@/Contexts/OrdersProvider";
import { getOrdersListApi } from "@/service/ordersService";
import React, { useEffect } from "react";
import OrderItem from "../ui/OrderItem/OrderItem";
import Spinner from "../ui/Spinner/Spinner";

const OrderList = () => {
  const { getOrders, ordersList } = useOrdersContext();
  const { authCheck, user} = useAuthContext();

  useEffect(() => {
    authCheck();
  }, []);

  useEffect(() => {
    user?.uid && getOrders();
  }, [user]);

  return !ordersList[0] ? (
    <tr>
      <td colSpan="2" className="py-2 px-4">
        <div className="bg-white p-4 rounded">
          <Spinner />
        </div>
      </td>
    </tr>
  ) : ordersList.length < 1 ? (
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
        <tr key={idx}>
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
