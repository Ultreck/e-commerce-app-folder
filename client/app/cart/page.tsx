"use client";
import CartSubTotalComponent from "@/components/CartSubTotalComponent";
import CartTable from "@/components/CartTable";
import { userCartItemsStore } from "@/store/cartItems";
import React from "react";

const ProductCart = () => {
  const cartIds = userCartItemsStore((state) => state.cartCardsDatas);
let cartItems = [];
  return (
    <div className="px-16 py-10">
      <div className="text my-5">
        <h1 className="text-2xl">Your Cart</h1>
        <span className="text">
          There {cartIds.length > 1 ? "are" : "is"}{" "}
          <span className="text-red-500 font-semibold">{cartIds.length}</span>{" "}
          products in your cart
        </span>
      </div>
      <div className="text flex w-full gap-7">
        <div className="text w-2/3">
        <CartTable />   
        </div>
        <div className="text w-1/3 sticky top-20">
        <CartSubTotalComponent data={cartItems} />
      </div>
      </div>
    </div>
  );
};

export default ProductCart;
