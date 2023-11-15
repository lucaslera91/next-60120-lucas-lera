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
const Detail = ({ params }) => {
  const { id } = params;
  const item = productList.filter((item) => item?.slug === id)[0];
  const url =
    "https://d1amk1w0mr5k0.cloudfront.net/blog/wp-content/uploads/2018/08/GettyImages-802465010-1.jpg";
  return (
    <div className="flex flex-col bg-black-400 h-screen p-s">
      <h2 className="text-white">{item?.title}</h2>
      <div className="w-100 flex p-4 m-4 justify-center">
        <img className="h-64 rounded" src={url} alt={"title"} />
      </div>
      <div className="bg-white h-screen">
        <div>
          <p className="text-black">{item?.description}</p>
        </div>
        <div>
          <h3 className="text-black">${item?.price}</h3>
          <h3 className="text-black">{item?.type}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
