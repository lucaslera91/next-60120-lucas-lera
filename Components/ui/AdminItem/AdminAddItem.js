"use client";
import { hasFalsyAttributes, generateId } from "@/app/utils/utils";
import { useAdminContext } from "@/Contexts/AdminProvider";
//import { generateBuildId } from "@/next.config";
import React, { useState } from "react";

const AddAdminItem = ({ children, handleShowAddProduct }) => {
  const { addItem } = useAdminContext();
  const [isError, setIsError] = useState(false);
  const errorMessage = "Debes completar todos los campos";
  const initialProductState = {
    title: "",
    description: "",
    imageUrl: "",
    stock: null,
    price: null,
    type: "",
    id: "no-id",
  };
  const [productData, setProductData] = useState(initialProductState);

  const handleChange = (e) => {
    //console.log(e);
    setProductData({ ...productData, [e.target.id]: e.target.value });
    //console.log(productData);
  };
  const addProductHandler = async () => {
    const newProduct = { ...productData, id: generateId() };
    console.log('new product', newProduct)
    await addItem(newProduct);
    setIsError(false);
    handleShowAddProduct()
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    hasFalsyAttributes(productData) ? setIsError(true) : addProductHandler();
  };
  return (
    <div className="w-full m-3">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input
          type="text"
          placeholder="Titulo"
          className="border flex w-full text-black rounded px-2 py-2 ml-1 m-2 mr-2"
          id="title"
        />
        <input
          type="text"
          placeholder="Descripcion"
          className="border flex w-full text-black rounded px-2 py-2 ml-1 m-2 mr-2"
          id="description"
        />
        <input
          type="text"
          placeholder="Imagen url"
          className="flex border w-full text-black rounded px-2 py-2 ml-1 m-2 mr-2"
          id="imageUrl"
        />
        <input
          type="text"
          placeholder="Stock"
          className="border flex w-full text-black rounded px-2 py-2 ml-1 m-2 mr-2"
          id="stock"
        />
        <input
          type="text"
          placeholder="Precio"
          className="border flex w-full text-black rounded px-2 py-2 ml-1 m-2 mr-2"
          id="price"
        />
        <input
          type="text"
          placeholder="tipo de producto"
          className="flex border w-full text-black rounded px-2 py-3 ml-1 m-2 mr-2"
          id="type"
        />
        <div className="flex w-full text-black justify-center">
          <button
            className="rounded h-2/4 w-2/5 m-3 p-4 text-black text-blue-700 bg-gray-200"
            type="submit"
          >
            Agregar
          </button>
          {isError && (
            <p className="flex text-red-500 items-center">{errorMessage}</p>
          )}
          <button
            className="rounded h-2/4 m-3 w-2/5 p-4 text-black text-blue-700 bg-gray-200"
            onClick={handleShowAddProduct}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdminItem;
