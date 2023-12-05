import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuList = ({data}) => {
  return (
    <div>
      <div className="flex-container flex items-center justify-between p-4 bg-blue-500">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {data.map((item) => (
            <Link href={item.tabUrl}>
              <div className="text-white hover:text-gray-300">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
