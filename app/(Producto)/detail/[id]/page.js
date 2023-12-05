// import { generateMetadata } from "@/app/utils/productUtils";
import { findItem } from "@/app/utils/utils";
import productList from "@/data/productList";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const data = findItem(productList, params?.id);
  return {
    title: "LibraryApp - " + data[0]?.title,
  };
};
const Detail = async({ params }) => {
  const { id } = params;
  
  const product = await fetch(`http:localhost:3000/api/detail/${id}`, {
    cache: "force-cache",
    next: { revalidate: 60000 },
  }).then((res) => res.json());

  return (
    <div className="flex flex-col bg-black-400 h-screen p-s">
      <h2 className="text-white">{product[0]?.title}</h2>
      <div className="w-100 flex p-4 m-4 justify-center">
        <img className="h-64 rounded" src={product[0]?.ImageUrl} alt={"title"} />
      </div>
      <div className="bg-white h-screen">
        <div>
          <p className="text-black">{product[0]?.description}</p>
        </div>
        <div>
          <h3 className="text-black">${product[0]?.price}</h3>
          <h3 className="text-black">{product[0]?.type}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
