import { deleteCartItemService } from "@/service/cartService";
import React from "react";
import DeleteButton from "../Button/DeleteButton";

const CartItem = ({ children, item }) => {
  const { title, description, price } = item || {};

  const initialUser = "user-name-random1";

  return (
    <div className="">
      <div className="flex bg-gray-200 p-2 m-2 rounded-md shadow-md justify-around">
        <img className="w-1/5 h-40 object-cover" src={item.imageUrl} alt={"title"} />
        <div className="px-6 py-4 w-7/10">
          <div className="font-bold text-xl text-black mb-2">{title}</div>

          <p className="text-gray-700 text-base">{description}</p>
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">$ {price}</h4>
        </div>
        <div className="w-1/10 flex justify-center items-center">
          {/* <span className="text-blue-500">-</span> */}
          <p className="text-blue-200 p-2 m-2 bg-blue-600 rounded">
            {item.amount}
          </p>
          {/* <span className="text-blue-500">+</span> */}

          <DeleteButton item={item} user={initialUser} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default CartItem;
