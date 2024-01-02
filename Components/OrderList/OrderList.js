import { getOrdersListApi } from "@/service/ordersService";
import React from "react";
import OrderItem from "../ui/OrderItem/OrderItem";

const OrderList = async () => {
  const initialUser = "user-name-random1";
  const uid = getCookie("libreriaAppCookie");
  const ordersList = await getOrdersListApi(uid);

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
          {!!ordersList &&
            ordersList?.map((element) => <OrderItem order={element} />)}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
