import React from "react";

const Card = ({ children, item }) => {

  const { title, description } = item || {};
  const imageSrc =
    "https://hips.hearstapps.com/hmg-prod/images/office-and-school-supplies-arranged-on-wooden-table-royalty-free-image-1687558904.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*";
  return (
    <div className="">
      <div className="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg my-8">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt={"title"}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>

          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
