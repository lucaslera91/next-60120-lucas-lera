import React from "react";

const Card = ({ children, item }) => {

  const { title, description } = item || {};
  const imageSrc =
    "https://hips.hearstapps.com/hmg-prod/images/office-and-school-supplies-arranged-on-wooden-table-royalty-free-image-1687558904.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*";
  return (
    <div className="">
      <div className="h-80 overflow-hidden max-w-xs bg-white p-4 m-2 rounded-md shadow-md">
        <div className="font-bold text-xl mb-2 text-black">{title}</div>
        <img
          className="w-full h-30 rounded object-cover"
          src={imageSrc}
          alt={"title"}
        />
        <div className="">

          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
