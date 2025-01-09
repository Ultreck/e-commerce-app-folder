
import React, { useState } from "react";
import CartSubTotalComponent from "./CartSubTotalComponent";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import RatingComponent from "./RatingComponent";
import Link from "next/link";
import useProductData from "@/hooks/useProductData";
import { ItemData } from "@/types/typeFiles";
import { itemsDummyData } from "@/utils/helper";
import { userCartItemsStore } from "@/store/cartItems";

const CartTable = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { quantity, setQuantity } = useProductData();
  const cartIds = userCartItemsStore((state) => state.cartCardsDatas);
 const [cartItems, setCartItems] = useState<any>(itemsDummyData);
   const updateQuantity = (id: string, increament: boolean) => {
     setCartItems(
       itemsDummyData.map((value: ItemData) => {
         if (value.id === id) {
           return {
             ...value,
             quantity: increament
               ? value.quantity + 1
               : Math.max(value.quantity - 1, 1),
           };
         }
         return value;
       })
     );
     console.log(cartItems);
   };
 
  return (
    <div className="text">
      <div className="text">
        <div className="text-black rounded-lg bg-gray-200 py-3 px-5 grid grid-cols-8">
          <div className="text col-span-3">Product</div>
          <div className="text">Unit Price</div>
          <div className="text col-span-2">Quantity</div>
          <div className="text">Subtotal</div>
          <div className="text">Remove</div>
        </div>
        <div className="text">
          {cartItems
            .filter((item) => cartIds.includes(item.id))
            .map((matched, index) => (
              <div
                onMouseEnter={() => setCurrentIndex(index)}
                className="grid hover:bg-gray-50 grid-cols-8 border-b py-3 px-5"
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
                        updateQuantity(matched.id, false);
                        if (quantity > 1) {
                          setQuantity((prev) => prev - 1);
                        } else {
                          return;
                        }
                      }}
                      className="text-sm cursor-pointer border p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <FaMinus
                        className={`${
                          quantity === 1 && "text-gray-300 cursor-default"
                        }  `}
                      />
                    </div>
                    <span className="text-center flex justify-center font-semibold items-center w-10 h-8 py-2">
                      {quantity}
                    </span>
                    <div
                      onClick={() => {
                        updateQuantity(matched.id, true);
                        if (index === currentIndex) {
                          setQuantity((prev) => prev + 1);
                        }
                      }}
                      className="text-sm cursor-pointer font-normal border p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
                <div className="text flex items-center">
                  <span className="text p-0 mx-0 text-md">₦ </span>
                  <span className="text p-0 mx-1 text-md">
                    {" "}
                    {(quantity * matched?.cPrice).toLocaleString()}
                  </span>
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
    </div>
  );
};

export default CartTable;
