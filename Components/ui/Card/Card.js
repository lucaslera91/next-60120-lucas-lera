import React from "react";
import Link from "next/link";
import CardButton from "./CardButton/CardButton";
import styles from './Card.module.css'
import { H2_CLEAR } from "@/app/utils/constants";

const Card = ({ children, item }) => {
  const { title, description, imageUrl, price, stock, id} = item || {};
  const initialUser = "user-name-random1";
  const maxDescriptionLength = 30;
  return (
    <div className={`max-w-sm rounded m-4 p-4 ${styles.cardContainer}`}>
      <Link href={`/detail/${id}`} className="p-2">
        <div className="px-6 py-4 bg-gray-800 text-white font-bold text-xl">
        {title.substring(0, 25)}
        {title < 25 ? "" : "..."}
        </div>
        <div className={styles.imgContainer}>

        <img className={styles.cardImage} src={imageUrl} alt={title} />
        </div>
        <div className="px-6 py-4">
          <p className={`${styles.cardProductDescription} text-base` }>
            {description.substring(0, 90)}
            {description < 35 ? "" : "..."}
          </p>
        </div>
      </Link>
      <h2 className={H2_CLEAR}>$ {price}</h2>
      {/* <h4 className={H4_CLEAR}>{stock}</h4> */}
      <CardButton styles={styles} item={item} />
      {children}
    </div>
  );
};

export default Card;
