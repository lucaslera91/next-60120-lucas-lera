import React from "react";
import Link from "next/link";
import AddToCartButton from "../Button/AddToCartButton";
import OperationButton from "../Button/OperationButton";
import CardButton from "./CardButton/CardButton";

const Card = ({ children, item }) => {
  const { title, description } = item || {};
  const imageSrc =
    "https://hips.hearstapps.com/hmg-prod/images/office-and-school-supplies-arranged-on-wooden-table-royalty-free-image-1687558904.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*";

  const maxDescriptionLength = 30;
  return (
    <div className="max-w-sm bg-gray-700 rounded overflow-hidden shadow-lg m-4 p-4 h-full">
      <Link href={`/detail/${item.slug}`} className="p-2">
        <div className="px-6 py-4 bg-gray-800 text-white font-bold text-xl">
          {title}
        </div>
        <img className="w-full" src={imageSrc} alt={title} />
        <div className="px-6 py-4">
          <p className="text-gray-400 text-base">
            {description.substring(0, 90)}
            {description < 35 ? "" : "..."}
          </p>
        </div>
      </Link>
      <CardButton />
      {children}
    </div>
  );
};

export default Card;
