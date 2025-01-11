"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchProduct from "./SearchProduct";
import LocationField from "./LocationField";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import SignInButton from "./SignInButton";
import Link from "next/link";
import { userCartItemsStore } from "@/store/cartItems";
import { itemsDummyData } from "@/utils/helper";
import { userWishListItemsStore } from "@/store/wishListItems";

const FirstNavbar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const cartIds = userCartItemsStore((state) => state.cartCardsDatas);
  const wishListIds = userWishListItemsStore((state) => state.wishListCardsDatas);  

  // const filteredCartItems = itemsDummyData.filter((matchedItems) =>
  //   cartIds.includes(matchedItems.id)
  // );

  return (
    <div className={`bg-white border-b pr-16 z-20 py-1 flex justify-between`}>
      <div className="text flex items-center justify-center w-1/2 gap-10">
        <div className="text">
          <Link href={"/"}>
            <img
              src="/final-copy.png"
              width={180}
              height={180}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="text w-3/5">
          <SearchProduct />
        </div>
      </div>
      <div className="text flex justify-between gap-5 items-center">
        <div className="text">
          <LocationField />
        </div>
        <Link href={"/customer/wishlist"}>
        <button
          onMouseEnter={() => {
            setIsHovered(true);
            setIndex(1);
          }}
          onMouseLeave={() => setIsHovered(false)}
          className="dark:text-white text-gray-700 gap-2 relative flex items-center "
          >
          <FaRegHeart className="text-3xl text-black dark:text-white" />
          <span
            className={`text-white w-6 h-6 rounded-full flex items-center justify-center bg-amber-700 ${
              isHovered && index === 1 && "bg-golden"
              } p-1 absolute left-4 -top-4 text-xs`}
              >
        {wishListIds.length > 0 && wishListIds.length < 100
          ? wishListIds.length
          : wishListIds.length > 100
          ? "99+"
          : 0}
          </span>
          Wishlist
        </button>
        </Link>
        <Link href={"/cart"}>
          <button
            onMouseEnter={() => {
              setIsHovered(true);
              setIndex(2);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="dark:text-white gap-2 relative flex items-center"
          >
            <MdOutlineShoppingCart className="text-3xl text-black dark:text-white" />
            Cart
            <span
              className={`text-white w-6 h-6 rounded-full flex items-center justify-center ${
                isHovered && index === 2 && "bg-golden"
                } bg-amber-700 p-1 absolute left-3 -top-4 text-xs`}
            >
              {cartIds.length > 0 && cartIds.length < 100
                ? cartIds.length
                : cartIds.length > 100
                ? "99+"
                : 0}
            </span>
          </button>
        </Link>
        <div className="text">
          <SignInButton text={"Sign In"} className={""} />
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
