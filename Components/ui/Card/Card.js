import React from "react";
import Link from "next/link";
import CardButton from "./CardButton/CardButton";

const Card = ({ children, item }) => {
  const { title, description, imageUrl, price, stock, id} = item || {};
  console.log('item', item)
  const initialUser = "user-name-random1";
  const maxDescriptionLength = 30;
  return (
    <div className="max-w-sm bg-gray-700 rounded overflow-hidden shadow-lg m-4 p-4 h-full">
      <Link href={`/detail/${id}`} className="p-2">
        <div className="px-6 py-4 bg-gray-800 text-white font-bold text-xl">
          {title}
        </div>
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <p className="text-gray-400 text-base">
            {description.substring(0, 90)}
            {description < 35 ? "" : "..."}
          </p>
        </div>
      </Link>
      <p>{price}</p>
      <p>{stock}</p>
      <CardButton item={item} user={initialUser}/>
      {children}
    </div>
  );
};

export default Card;
