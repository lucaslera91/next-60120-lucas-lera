"use client";
import React, { useState } from "react";
import { useProductListAdminContext } from "@/Contexts/ProductListAdminProvider";
import AdminAddItem from "../ui/AdminItem/AdminAddItem";
const AddProductButton = () => {
  const { addProduct } = useProductListAdminContext();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const handleShowAddProduct = (e) => setShowAddProduct((prev) => !prev);

  return (
    <div className="w-full p-2">
      {!showAddProduct && (
        <button
          className="flex w-full rounded h-2/5 p-4 text-black text-blue-700 bg-blue-200"
          onClick={handleShowAddProduct}
        >
          Agregar producto
        </button>
      )}
      {showAddProduct && (
        <div className="flex flex-col items-center">
          <AdminAddItem  handleShowAddProduct={handleShowAddProduct} />
        </div>
      )}
    </div>
  );
};

export default AddProductButton;
