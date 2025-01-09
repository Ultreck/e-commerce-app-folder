import { userCartItemsStore } from "@/store/cartItems";
import { CardDataType } from "@/types/typeFiles";
import React from "react";
import { FaCcDinersClub, FaCcJcb, FaGooglePay, FaLock, FaApplePay, FaCcDiscover } from "react-icons/fa";


const CartSubTotalComponent: React.FC<CardDataType> = ({ data }) => {
    const cartIds = userCartItemsStore((state) => state.cartCardsDatas);
  console.log(data);

  return (
    <div className="sticky text-gray-600 top-20 px-5">
      <div className="text border-b py-4 ">
        <h2 className="text">Order Summary</h2>
        <div className="text my-5 flex items-center justify-between">
          <div className="text-black">Item(s) total: </div>
          <div className="text">{200000} </div>
        </div>
        <div className="text flex items-center justify-between">
          <div className="text-black">Item(s) discount: </div>
          <div className="text">{120000} </div>
          <div className="text">{120000} </div>
        </div>
      </div>
      <div className="text mt-4 font-semibold flex items-center justify-between">
        <div className="text">Total: </div>
        <div className="text">
          {" "}
          <span className="text p-0 mx-0 text-md">₦ </span>
          <span className="text p-0 mx-0 text-xl"> {80000}</span>
        </div>
      </div>
      <div className="text mt-8">
        <button className="text rounded-full py-2 bg-amber-700 text-white relative overflow-hidden group w-full">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
          <span className="relative leading-3">
            Checkout ({cartIds.length})
            <p className="text">{data.discount} 1 item almost sold out</p>
          </span>
        </button>
      </div>
          <div className="text">
          <FaLock />
          {/* <SiSpringsecurity /> */}
          {/* <SiVisa />x */}
          {/* <RiMastercardFill /> */}
          <FaGooglePay />
          <FaApplePay />
          <FaCcDiscover />
          {/* <SiAmericanexpress /> */}
          <FaCcJcb />
          <FaCcDinersClub />

             </div>
      
    </div>
  );
};

export default CartSubTotalComponent;
