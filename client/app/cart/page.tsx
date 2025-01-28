"use client";
import BreadCrumbComponent from "@/components/BreadCrumbComponent";
import CartSubTotalComponent from "@/components/CartSubTotalComponent";
import CartTable from "@/components/CartTable";
import EmptyPageComponent from "@/components/EmptyPageComponent";
import { userCartItemsStore } from "@/store/cartItems";
import React, { useEffect, useState } from "react";

const ProductCart = () => {
  const [cartIds, setCartIds] = useState<string[]>([]);
  useEffect(() => {
    const cartStoredData = userCartItemsStore.getState().cartCardsDatas;
    setCartIds(cartStoredData);
  }, []);
  return (
    <>
    <BreadCrumbComponent className="bg-white" items={[{label: "Home", href: "/"}, {label: "cart", href: "/cart"},]}/>
      <div className="px-16 py-8">
        <div className="text my-5">
          <h1 className="text-2xl">Your Cart</h1>
          <span className="text">
            There {cartIds.length > 1 ? "are" : "is"}{" "}
            <span className="text-red-500 font-semibold">{cartIds.length}</span>{" "}
            products in your cart
          </span>
        </div>
        {cartIds.length > 0 ? (
          <div className="text flex w-full gap-7">
            <div className="text w-2/3">
              <CartTable />
            </div>
            <div className="text w-1/3 sticky top-20">
              <CartSubTotalComponent />
            </div>
          </div>
        ) : (
          <div className="text my-20">
            <EmptyPageComponent
              caption="There is no any items in your cart"
              text="All items added to your cart would be displayed here, You can click on add to cart button to proceed"
              className=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCart;
