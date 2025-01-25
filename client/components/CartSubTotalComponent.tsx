'use client'
import { userCartItemsStore } from "@/store/cartItems";
import React, { useEffect, useState } from "react";
import {
  FaCcDinersClub,
  FaCcJcb,
  FaGooglePay,
  FaLock,
  FaApplePay,
  FaCcDiscover,
} from "react-icons/fa";
import { SiSpringsecurity, SiVisa, SiAmericanexpress } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import Link from "next/link";

const CartSubTotalComponent = () => {
  const [cartIds, setCartIds] = useState<string[]>([]);

  useEffect(() => {
    const cartStoredData = userCartItemsStore.getState().cartCardsDatas;
    setCartIds(cartStoredData);    
  }, []);

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
        <Link href={`/product-order-checkout`}>
        <button className="text rounded-full py-2 bg-amber-700 text-white relative overflow-hidden group w-full">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
          <span className="relative leading-3">
            Checkout ({cartIds.length})
            <p className="text">
               1 item almost sold out</p>
          </span>
        </button>
        </Link>
      </div>
      <div className="text my-5">
        <p className="flex text-sm">
          <FaLock className="text-[#23941A] mt-1 mr-1" />
          You will not be charged until you review this order on the next page
        </p>
        <p className="flex mt-2 ">
          <SiSpringsecurity className="text-[#23941A] mt-1 mr-1" />
          <span className="text font-semibold">Safe Payment Options</span>
        </p>
        <p className=" ">
          <span className="text-[#23941A] text-sm">
            Shoplicity is committed to protecting your payment information.
          </span>
          <br />
          <span className="text text-sm">
            We follow PCI DSS standards, use strong encryption, and perform
            regular reviews of its system to protect your privacy.
          </span>
        </p>
        <p className="text mt-3">
          Payment methods
        </p>
        <p className="text flex items-center justify-between">
          <span className="text-xl text-blue-600 border w-10 h-6 rounded flex items-center justify-center"> <SiVisa /></span>
          <span className="text-xl text-orange-600 border w-10 h-6 rounded flex items-center justify-center"><RiMastercardFill /></span>
          <span className="text-xl border w-10 h-6 rounded flex items-center justify-center"><FaGooglePay /></span>
          <span className="text-xl border w-10 h-6 rounded flex items-center justify-center"><FaApplePay /></span>
          <span className="text-xl text-orange-600 border w-10 h-6 rounded flex items-center justify-center"><FaCcDiscover /></span>
          <span className="text-xl text-blue-600 border w-10 h-6 rounded flex items-center justify-center"><SiAmericanexpress /></span>
          <span className="text-xl text-blue-600 border w-10 h-6 rounded flex items-center justify-center"><FaCcJcb /></span>
          <span className="text-xl text-blue-600 border w-10 h-6 rounded flex items-center justify-center"><FaCcDinersClub /></span>
        </p>
       
      </div>
    </div>
  );
};

export default CartSubTotalComponent;
