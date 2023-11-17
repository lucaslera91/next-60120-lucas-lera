import React from "react";

const AdminItem = ({ children, item }) => {
  const { title, description } = item || {};
  const imageSrc =
    "https://hips.hearstapps.com/hmg-prod/images/office-and-school-supplies-arranged-on-wooden-table-royalty-free-image-1687558904.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*";
  return (
    <div className="">
      <div className="flex bg-gray-200 p-2 m-2 rounded-md shadow-md">
        <img className="w-1/5 h-40 object-cover" src={imageSrc} alt={"title"} />
        <div className="w-3/4 px-6 py-4">
          <div className="font-bold text-xl text-black mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-center items-center ">
          <button className="rounded h-2/5 text-black text-blue-700 bg-blue-200">
            Edit product
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AdminItem;
