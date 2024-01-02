// import { generateMetadata } from "@/app/utils/productUtils";
import { H2_CLEAR, H3_DARK } from "@/app/utils/constants";
import { findItem } from "@/app/utils/utils";
import AddToCartButton from "@/Components/ui/Button/AddToCartButton";
import CardButton from "@/Components/ui/Card/CardButton/CardButton";
import productList from "@/data/productList";
import Image from "next/image";
import React from "react";
import styles from './page.module.css'

export const generateMetadata = async ({ params }) => {
  const data = findItem(productList, params?.id);
  return {
    title: "LibraryApp - " + data[0]?.title,
  };
};
const Detail = async ({ params }) => {
  const { id } = params;
  // const initialUser = "user-name-random1";

  const product = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/detail/${id}`, {
    cache: "no-cache",
    // next: { revalidate: 60000 },
  }).then((res) => res.json());

  return (
    // <div className="flex flex-col bg-black-400 full-screen p-s">
    <div className={`${styles.detailContainer} p-s`}>
      <h2 className={H2_CLEAR}>{product.title}</h2>
      <div className="bg-white w-100 flex p-4 m-4 justify-center">
        <img
          className="h-64 rounded"
          src={product?.imageUrl}
          alt={"title"}
        />
      </div>
      <div className="h-screen p-5">
        <div>
          <p className="text-black">{product?.description}</p>
        </div>
        <div>
          <h3 className={H3_DARK}>
            ${product?.price}
          </h3>
        </div>
        {/* <CardButton item={product} user={initialUser} bg='clear' /> */}
        <CardButton item={product} bg='clear' />
      </div>
    </div>
  );
};

export default Detail;
