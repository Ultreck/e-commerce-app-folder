"use client";
import AllOrdersComponent from "@/components/customerAccount/AllOrdersComponent";
import DeliverOrderComponent from "@/components/customerAccount/DeliverOrderComponent";
import ProcessingOrderComponent from "@/components/ProcessingOrderComponent";
import ReturnOrderComponent from "@/components/ReturnOrderComponent";
import ShippedOrderComponent from "@/components/ShippedOrderComponent";
import Link from "next/link";
import React, { useState } from "react";

const CustomerOrders = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <div className="w-full">
      <div className="text">
        <div className="text">
          <ul className="text flex items-center justify-between w-full p-5 ">
            {[
              "All orders",
              "Processing",
              "Shipped",
              "Delivered",
              "Returns",
            ].map((tab, index) => (
              <li
                onClick={() => setTabIndex(index)}
                key={tab}
                className="text-sm "
              >
                <Link
                  className={`px-5 font-semibold py-1 transform duration-200 ${
                    index === tabIndex
                      ? "border-b-2 border-amber-700 text-black"
                      : "text-gray-400"
                  }`}
                  href={"#"}
                  prefetch
                >
                  {tab}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text">
          {tabIndex === 0 && <AllOrdersComponent />}
          {tabIndex === 1 && <ProcessingOrderComponent />}
          {tabIndex === 2 && <ShippedOrderComponent />}
          {tabIndex === 3 && <DeliverOrderComponent />}
          {tabIndex === 4 && <ReturnOrderComponent />}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
