"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AiFillFire } from "react-icons/ai";
import VerticalTextSlider from "./VerticalTextSlider";
import RatingComponent from "./RatingComponent";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import CardModalDialog from "./CardModalDialog";
import { CardDataType } from "@/types/typeFiles";
import Link from "next/link";
import { userWishListItemsStore } from "@/store/wishListItems";


const ItemsCard: React.FC<CardDataType> = ({ data }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const toggleWishlist = () => {
    setIsAddedToWishlist((prevState) => !prevState);
  };

  const addWishListItem = userWishListItemsStore(
    (state) => state.addWishListItem
  );
  const removeWishListItem = userWishListItemsStore(
    (state) => state.removeWishListItem
  );
  const wishListIds = userWishListItemsStore(
    (state) => state.wishListCardsDatas
  );

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-0 outline-none shadow-none rounded-lg p-2 hover:bg-white hover:box-shadow"
    >
      <CardContent className="p-0 pb-5">
        <div className="text relative">
          <Link href={`/product-details/${data.id}`}>
            <img src={data.imgs[0].src} alt="" className="text w-full h-72" />
          </Link>
          <div className="text absolute  bottom-0 px-2">
            {isHovered && (
              <CardModalDialog data={data}>
                <div className="bg-amber-700 text-white text-sm relative rounded-full overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded-full from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
                  <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
                  <span className="relative flex py-1 px-2 rounded-full items-center gap-2">
                    <IoEye /> Quick Look
                  </span>
                </div>
              </CardModalDialog>
            )}
          </div>
        </div>
        <div className="text">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild className="truncate">
                <p className="truncate cursor-pointer">{data.description}</p>
              </TooltipTrigger>
              <TooltipContent className="w-60 bg-gray-100">
                <p className="">{data.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="text flex gap-2">
          <p className="text flex items-baseline text-black font-semibold">
            <span className="text p-0 mx-0 text-sm">₦</span>
            <span className="text p-0 mx-0 text-xl">
              {data.cPrice.toLocaleString()}
            </span>
          </p>
          <p className="text flex items-center text-gray-400">
            <del>
              <span className="text p-0 mx-0 text-sm">₦</span>
              <span className="text p-0 mx-0 text-sm">
                {data.iPrice.toLocaleString()}
              </span>
            </del>
          </p>
          <div className="text-sm flex items-center">
            <AiFillFire className="text-amber-700" />{" "}
            <span className="text">{data.noSold}</span>
          </div>
        </div>
        <div className="text">
          <VerticalTextSlider data={data.status} delayValue={data.delay} />
        </div>
        <div className="text flex items-center">
          <RatingComponent rating={data.rating} />
          <div className="text flex gap-2">
            <button className="focus:outline-none">
              {wishListIds.includes(data?.id) ? (
                <AiFillHeart
                  onClick={() => {
                    toggleWishlist();
                    removeWishListItem(data?.id)
                  }}
                  size={24}
                  color="#b45309"
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => {
                    toggleWishlist();
                    addWishListItem(data?.id);
                  }}
                  size={24}
                  color="gray"
                />
              )}
            </button>
            <div className="text cursor-pointer">
              <CardModalDialog data={data}>
                <MdAddShoppingCart size={24} className="text-gray-500" />
              </CardModalDialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemsCard;
