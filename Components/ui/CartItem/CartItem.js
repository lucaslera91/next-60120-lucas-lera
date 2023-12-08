import React from "react";

const CartItem = ({ children, item }) => {
  const { title, description } = item || {};
  const imageSrc =
    "https://hips.hearstapps.com/hmg-prod/images/office-and-school-supplies-arranged-on-wooden-table-royalty-free-image-1687558904.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*";
  return (
    <div className="">
      <div className="flex bg-gray-200 p-2 m-2 rounded-md shadow-md justify-around">
        <img className="w-1/5 h-40 object-cover" src={imageSrc} alt={"title"} />
        <div className="px-6 py-4 w-7/10">
          <div className="font-bold text-xl text-black mb-2">{title}</div>

          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="w-1/10 flex justify-center items-center">
          <span className="text-blue-500">-</span>
          <p className="text-blue-200 p-2 m-2 bg-blue-600 rounded">
            {item.amount}
          </p>
          <span className="text-blue-500">+</span>

          <button className="text-red-200 p-2 m-2 bg-red-600 rounded">
            Eliminar
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CartItem;
