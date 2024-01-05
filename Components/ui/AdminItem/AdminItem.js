import { useAdminContext } from "@/Contexts/AdminProvider";
import { collectionGroup } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const AdminItem = ({ children, item }) => {
  const { title, description, imageUrl, id, price, stock } = item || {};

  const { deleteItem, editItem } = useAdminContext();
  const [isEditMode, setEditMode] = useState(false);
  const initialData = {
    title,
    description,
    imageUrl,
    id,
    price,
    stock,
  };
  const [data, setData] = useState({
    title,
    description,
    imageUrl,
    id,
    price,
    stock,
  });
  const handleDeleteItem = () => {
    console.log(id)
    deleteItem(id);
  };
  const handleEditItem = async (e) => {
    console.log(e.target);
    //const data = { title: "yay" };
    await editItem(id, data);
    setEditMode((prev) => !prev);
  };
  const handleSetEdit = () => {
    setEditMode((prev) => !prev);
    setData(initialData);
  };
  const handleChange = (e) => {
    setData({
      ...data,
      title: e.target.form[0].value,
      description: e.target.form[1].value,
      price: parseInt(e.target.form[2].value),
      stock: parseInt(e.target.form[3].value),
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="">
      {isEditMode ? (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 to-gray-200 p-4 m-4 rounded-md shadow-lg">
          <img
            className="w-full md:w-1/5 max-w-full h-auto object-cover rounded-lg border border-gray-200 shadow-lg mb-4 md:mb-0"
            src={imageUrl}
            alt={"title"}
          />
          <div className="w-full md:w-3/4 px-6 py-4">
            <form onChange={handleChange}>
              <div className="w-full md:w-3/4 px-6 py-4 flex flex-col">
                <input
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 outline-none bg-transparent text-xl md:text-2xl text-gray-800 mb-2 pb-1"
                  placeholder={title}
                  id="test"
                  value={data.title}
                />
                <textarea
                  onChange={handleChange}
                  className="border-2 border-gray-300 outline-none bg-transparent text-base md:text-lg mb-3 p-2"
                  placeholder={description}
                  value={data.description}
                />
                <input
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 outline-none bg-transparent text-base md:text-lg m-3 pb-1"
                  placeholder={price}
                  value={data.price}
                />
                <input
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 outline-none bg-transparent text-base md:text-lg m-3 pb-1"
                  placeholder={stock}
                  value={data.stock}
                />
              </div>
            </form>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleEditItem}
              className="h-12 md:h-16 w-24 md:w-32 p-3 md:p-4 text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-md shadow-md transition duration-300"
            >
              Confirmar
            </button>
            <button
              onClick={handleSetEdit}
              className="h-12 md:h-16 w-24 md:w-32 p-3 md:p-4 text-white bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-md shadow-md transition duration-300"
            >
              Cancelar
            </button>
            <button
              onClick={handleDeleteItem}
              className="h-12 md:h-16 w-24 md:w-32 p-3 md:p-4 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-md shadow-md transition duration-300"
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 to-gray-200 p-4 m-4 rounded-md shadow-lg">
          <img
            className="w-full md:w-1/5 max-w-full h-auto object-cover md:h-40 mb-4 md:mb-0 rounded-lg border border-gray-300 shadow-lg transition duration-300 transform hover:scale-105"
            src={imageUrl}
            alt={"title"}
          />
          <div className="w-full md:w-3/4 px-6 py-4">
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
              {description}
            </p>
            <p className="text-blue-600 text-lg mb-2">Price: ${price}</p>
            <p className="text-green-600 text-lg mb-2">Stock: {stock}</p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleSetEdit}
              className="h-12 md:h-16 lg:h-20 w-24 md:w-32 lg:w-40 p-2 md:p-4 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-md shadow-md transition duration-300"
            >
              Editar
            </button>

            <button
              onClick={handleDeleteItem}
              className="h-12 md:h-16 lg:h-20 w-24 md:w-32 lg:w-40 p-2 md:p-4 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-md shadow-md transition duration-300"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default AdminItem;
