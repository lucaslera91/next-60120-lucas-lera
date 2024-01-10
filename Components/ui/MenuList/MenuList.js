"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import LogInButton from "../Button/LogInButton";
import LogOutButton from "../Button/LogOutButton";
import UserImage from "../UserImage/UserImage";

const MenuList = ({ data }) => {
  const { user, authCheck } = useAuthContext();

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
          <UserImage id={user.uid} />
          {data.map(
            (item, idx) =>
              item.name !== "Admin" && (
                <Link key={idx} href={item.tabUrl}>
                  <div className="text-white hover:text-gray-300">
                    {item.name}
                  </div>
                </Link>
              )
          )}
          {user?.isAdmin && (
            <Link href={"/Admin"}>
              <div className="text-white hover:text-gray-300">Admin</div>
            </Link>
          )}
          {user?.uid ? <LogOutButton /> : <LogInButton />}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
