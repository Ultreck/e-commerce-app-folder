"use client";
import TransactionDetailsTable from "@/components/TransactionDetailsTable";
import Image from "next/image";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import img from "../../../assets/icons/wallet.svg";
const CustomerBalance = () => {
  const [isAvailable, ] = useState<boolean>(false);
  return (
    <div>
      <div className="text p-10">
        <h2 className="text-lg font-semibold">Credit balance</h2>
        <p className="text-[#23941A] flex items-center text-sm">
          <FaLock className="text-[#23941A]  mr-1" />
          All data is encrypted
        </p>
        <div className="text-gray-500 text-xl mt-4">Total(NGN): </div>
        <div className="text font-medium border-b pb-8">
          <span className="text p-0 mx-0 text-3xl">₦</span>
          <span className="text p-0 mx-0 text-3xl">0</span>
        </div>
        <div className="text w-full">
          <h2 className="text my-5">History</h2>
          <div className="text w-full grid grid-cols-12 border-b pb-2 pl-2">
            <div className="text col-span-2">Date</div>
            <div className="text col-span-6">Description</div>
            <div className="text col-span-2">Amount</div>
            <div className="text col-span-2">Status</div>
          </div>
          <div className="text">
            {isAvailable ? (
              <TransactionDetailsTable />
            ) : (
              <div className="text-center flex justify-center items-center h-[30vh]">
                <div className="text-center">
                  <Image
                    src={img}
                    width={150}
                    height={150}
                    alt="balance"
                  />
                  <p className="text-black text-center">
                    {"You don't have any activities"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBalance;
