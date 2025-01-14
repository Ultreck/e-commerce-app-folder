import { ItemData } from "@/types/typeFiles";
import { textTruncateFucntion } from "@/utils/constants";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const WishListCard = ({ data }: { data: ItemData }) => {
  console.log(data);

  return (
    <div className="px-5">
      <div className="text border-2 gap-3 w-full my-5 rounded flex items-center px-5 py-3">
        <div className="text w-32 h-28 rounded-md bg-gray-200">
          <div className="text h-28 w-32 bg-gray-200 ">
            <Link href={`/product-details/${data.id}`}>
              <img
                src={data.imgs[0].src}
                alt=""
                className="text rounded w-full h-full"
              />
            </Link>
          </div>
        </div>
        <div className="text">
          <div className="text">
            <div className="text flex justify-between items-center">
              <div className="text mt-1 mb-5">{textTruncateFucntion(data?.description, 100) }</div>
            </div>
            <div className="text">
              <div className="text">
                <span className="text p-0 mx-0 text-sm">₦</span>
                <span className="text-lg font-semibold ml-0.5">
                  {data?.cPrice.toLocaleString()}
                </span>
              </div>
              <div className="text flex justify-between items-center">
                <div className="text-gray-500 font-medium">
                  <span className="text p-0 mx-0 text-lg">₦</span>
                  <del className="text-lg font-medium ml-0.5">
                    {data?.iPrice.toLocaleString()}
                  </del>
                  <span className="text ml-2 text-amber-700 font-medium">
                    -{data?.discount}
                  </span>
                </div>
                <div className="text flex gap-4 items-center">
                  <button
                    title="remove"
                    className="text hover:bg-gray-100 rounded-full p-2"
                  >
                    <RxCross2 className="" size={22} />
                  </button>
                  <button
                    title="add to cart"
                    className="text border rounded-full p-2 bg-gray-50 hover:bg-amber-700"
                  >
                    <MdAddShoppingCart
                      size={22}
                      className="text-amber-500 hover:text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
