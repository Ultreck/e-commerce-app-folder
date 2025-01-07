"use client";
import RatingComponent from "@/components/RatingComponent";
import useProductData from "@/hooks/useProductData";
import { userCartItemsStore } from "@/store/cartItems";
import { itemsDummyData } from "@/utils/helper";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ProductCart = () => {
  const cartIds = userCartItemsStore((state) => state.cartCardsDatas);
  // const removeCartItem = userCartItemsStore((state) => state.removeCartItem);
  const { quantity, setQuantity } = useProductData();
  // console.log(cartIds);
  console.log(itemsDummyData);

  return (
    <div className="px-16 py-20">
      <div className="text my-5">
        <h1 className="text-2xl">Your Cart</h1>
        <span className="text">
          There {cartIds.length > 1 ? "are" : "is"}{" "}
          <span className="text-red-500 font-semibold">{cartIds.length}</span>{" "}
          products in your cart
        </span>
      </div>
      <div className="text">
        <div className="text w-4/5">
          <div className="text-black rounded-lg bg-gray-200 py-3 px-5 grid grid-cols-8">
            <div className="text col-span-3">Product</div>
            <div className="text">Unit Price</div>
            <div className="text col-span-2">Quantity</div>
            <div className="text">Subtotal</div>
            <div className="text">Remove</div>
          </div>
          <div className="text">
            {itemsDummyData
              .filter((item) => cartIds.includes(item.id))
              .map((matched) => (
                <div
                  className="grid grid-cols-8 border-b py-3 px-5"
                  key={matched.id}
                >
                  <div className="text grid col-span-3">
                    <div className="text flex items-center gap-3 ">
                      <div className="text my-2 h-20 w-20 bg-gray-400">
                        <Link href={`/product-details/${matched.id}`}>
                          <img
                            src={matched.imgs[0].src}
                            alt=""
                            className="text w-full h-full"
                          />
                        </Link>
                      </div>
                      <div className="text">
                        <Link href={`/product-details/${matched.id}`}>
                          <div className="text mt-1 truncate w-48">
                            {matched.description}
                          </div>
                        </Link>
                        <div className="text my-2">
                          <RatingComponent color={"#FAAF00"} rating={5} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text flex items-center">
                    <span className="text p-0 mx-0 text-md">₦ </span>
                    <span className="text p-0 mx-1 text-md">
                      {" "}
                      {matched.cPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text col-span-2 flex items-center">
                    <div className="text flex items-center my-3 gap-2">
                      <div
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity((prev) => prev - 1);
                          } else {
                            return;
                          }
                        }}
                        className="text text cursor-pointer border p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <FaMinus
                          className={`${
                            quantity === 1 && "text-gray-300 cursor-default"
                          }  `}
                        />
                      </div>
                      <span className="text-center flex justify-center items-center w-10 h-8 py-2">
                        {quantity}
                      </span>
                      <div
                        onClick={() => {
                          itemsDummyData.find((item) => {
                            return item.id === matched.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item;
                          });
                          setQuantity((prev) => prev + 1);
                          console.log(itemsDummyData);
                        }}
                        className="text cursor-pointer border p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                  <div className="text flex items-center">
                    <span className="text p-0 mx-0 text-md">₦ </span>
                    <span className="text p-0 mx-1 text-md"> 123,000</span>
                    {/* <span className="text p-0 mx-1 text-md">   {(quantity * data?.cPrice).toLocaleString()}</span> */}
                  </div>
                  <div className="text pl-2 flex items-center">
                    <button className="text">
                      <RxCross2 className="" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="text w-2/5"></div>
      </div>
    </div>
  );
};

export default ProductCart;
