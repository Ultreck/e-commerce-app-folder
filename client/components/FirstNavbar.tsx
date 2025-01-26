"use client";
import React, { useEffect, useState } from "react";
import SearchProduct from "./SearchProduct";
import LocationField from "./LocationField";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import SignInButton from "./SignInButton";
import Link from "next/link";
import { userCartItemsStore } from "@/store/cartItems";
import { userWishListItemsStore } from "@/store/wishListItems";
import AccountModalDialog from "./customerAccount/AccountModalDialog";
import SupportDropdown from "./SupportDropdown";
import DropdownElement from "./DropdownElement";
import { TbHexagonLetterSFilled } from "react-icons/tb";

const FirstNavbar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [wishListIds, setWishListIds] = useState<string[]>([]);
 

  useEffect(() => {
    const cartStoredData = userCartItemsStore.getState().cartCardsDatas;
    setCartIds(cartStoredData);
  }, []);

  useEffect(() => {
   const wishListStoredData = userWishListItemsStore.getState().wishListCardsDatas;
    setWishListIds(wishListStoredData);
  }, []);
  

  return (
    <div
      className={`bg-white sticky top-0 border-b px-16 z-20 py-1 flex justify-between`}
    >
      <div className="text flex items-center justify-center w-1/2 gap-5">
        <div className="text">
          <Link href={"/"}>
            <div className="text flex gap-1 font-mono">
              <TbHexagonLetterSFilled size={48} className="text-amber-700" />
              <div className="text  ">
                <p className="text-2xl font-bold">Shoplicity</p>
                <p className="text-xs">Click.Shop.Smile</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text">
          <DropdownElement />
        </div>
        <div className="text w-3/5">
          <SearchProduct />
        </div>
      </div>
      <div className="text flex justify-between gap-5 items-center">
        <SupportDropdown />
        <div className="text">
          <AccountModalDialog />
        </div>
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
            className="dark:text-white text-gray-500 gap-2 relative text-sm flex items-center "
          >
            <FaRegHeart size={20} className="text-gray-500 dark:text-white" />
            <span
              className={`text-white w-5 h-5 rounded-full flex items-center justify-center bg-amber-700 ${
                isHovered && index === 1 && "bg-golden"
              } p-1 absolute left-2 -top-3 text-xs`}
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
            className="dark:text-white text-gray-500 gap-2 relative text-sm flex items-center"
          >
            <MdOutlineShoppingCart
              size={20}
              className="text-gray-500 dark:text-white"
            />
            Cart
            <span
              className={`text-white w-5 h-5 rounded-full flex items-center justify-center ${
                isHovered && index === 2 && "bg-golden"
              } bg-amber-700 p-1 absolute left-2 -top-3 text-xs`}
            >
              {cartIds.length > 0 && cartIds.length < 100
                ? cartIds.length
                : cartIds.length > 100
                ? "99+"
                : 0}
            </span>
          </button>
        </Link>
        <Link href={`/login`}>
          <div className="text">
            <SignInButton text={"Sign In"} className={""} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FirstNavbar;
