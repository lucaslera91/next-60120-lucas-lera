import { getOrdersListApi } from "@/service/ordersService";
import React from "react";
import OrderItem from "../ui/OrderItem/OrderItem";

const OrderList = async() => {
    const initialUser = "user-name-random1";
    console.log('first')
    const ordersList = await getOrdersListApi(initialUser);
    console.log('O L', ordersList)
  
    return (
    <div>
      {!!ordersList && ordersList?.map((element) => (
        <OrderItem order={element} />
      ))}
    </div>
  );
};

export default OrderList;
