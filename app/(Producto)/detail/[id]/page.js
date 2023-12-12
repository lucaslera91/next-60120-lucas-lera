// import { generateMetadata } from "@/app/utils/productUtils";
import { findItem } from "@/app/utils/utils";
import AddToCartButton from "@/Components/ui/Button/AddToCartButton";
import CardButton from "@/Components/ui/Card/CardButton/CardButton";
import productList from "@/data/productList";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const data = findItem(productList, params?.id);
  return {
    title: "LibraryApp - " + data[0]?.title,
  };
};
const Detail = async ({ params }) => {
  const { id } = params;
  const initialUser = "user-name-random1";

  const product = await fetch(`http:localhost:3000/api/detail/${id}`, {
    cache: "no-cache",
    // next: { revalidate: 60000 },
  }).then((res) => res.json());
  console.log('productos', product)

  return (
    <div className="flex flex-col bg-black-400 h-screen p-s">
      <h2 className="text-white">{product.title}</h2>
      <div className="w-100 flex p-4 m-4 justify-center">
        <img
          className="h-64 rounded"
          src={product?.imageUrl}
          alt={"title"}
        />
      </div>
      <div className="bg-white h-screen p-5">
        <div>
          <p className="text-black">{product?.description}</p>
        </div>
        <div>
          <h3 className="text-black text-3xl font-bold text-center my-8">
            ${product?.price}
          </h3>
          <p className="text-black">Type - {product?.type}</p>
        </div>
        <CardButton item={product} user={initialUser} bg='clear' />
      </div>
    </div>
  );
};

export default Detail;
