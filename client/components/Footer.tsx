import React from "react";
import { IoShirtOutline } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-10 pb-16">
      <div className="text-center grid grid-cols-2 lg:grid-cols-4 mt-8">
        <div className="text flex lg:items-center justify-center gap-1 py-5">
          <IoShirtOutline className="hidden lg:flex" />
          <p className="text-sm lg:text-base">Everyday fresh products</p>
        </div>
        <div className="text flex lg:items-center justify-center gap-1 border-l py-5">
          <GrDeliver className="hidden lg:flex" />
          <p className="text-sm lg:text-base">
            Free delivery for order over $70
          </p>
        </div>
        <div className="text flex lg:items-center justify-center gap-1 lg:border-l py-5">
          <RiDiscountPercentLine className="hidden lg:flex" />
          <p className="text-sm lg:text-base">Daily Mega Discounts</p>
        </div>
        <div className="text flex lg:items-center justify-center gap-1 border-l py-5">
          <CiBadgeDollar className="hidden lg:flex" />
          <p className="text-sm lg:text-base">Best price on the market</p>
        </div>
      </div>
      <div className="text grid grid-cols-2 lg:grid-cols-5 border-t pt-5 mt-1">
        <div className="text">
          <h1 className="text-amber-600">FRUIT & VEGETABLES</h1>
          <ul className="text-sm text-gray-600">
            {[
              "Fresh Vegetables",
              "Herbs & Seasonings",
              "Fresh Fruits",
              "Cuts & Sprouts",
              "Exortic Fruits & Veggies",
              "Package Produce",
              "Party Trays",
            ].map((list, index) => (
              <li className="text py-2" key={index}>
                {" "}
                <p className="text">
                  <Link href={"/"}>{list}</Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h1 className="text-amber-600">BREAKFAST & DAIRY</h1>
          <ul className="text-sm text-gray-600">
            {[
              "Fresh Vegetables",
              "Herbs & Seasonings",
              "Fresh Fruits",
              "Cuts & Sprouts",
              "Exortic Fruits & Veggies",
              "Package Produce",
              "Party Trays",
            ].map((list, index) => (
              <li className="text py-2" key={index}>
                {" "}
                <p className="text">
                  <Link href={"/"}>{list}</Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h1 className="text-amber-600">MEAT & SEAFOOD</h1>
          <ul className="text-sm text-gray-600">
            {[
              "Fresh Vegetables",
              "Herbs & Seasonings",
              "Fresh Fruits",
              "Cuts & Sprouts",
              "Exortic Fruits & Veggies",
              "Package Produce",
              "Party Trays",
            ].map((list, index) => (
              <li className="text py-2" key={index}>
                {" "}
                <p className="text">
                  <Link href={"/"}>{list}</Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h1 className="text-amber-600">BEVERAGES</h1>
          <ul className="text-sm text-gray-600">
            {[
              "Fresh Vegetables",
              "Herbs & Seasonings",
              "Fresh Fruits",
              "Cuts & Sprouts",
              "Exortic Fruits & Veggies",
              "Package Produce",
              "Party Trays",
            ].map((list, index) => (
              <li className="text py-2" key={index}>
                {" "}
                <p className="text">
                  <Link href={"/"}>{list}</Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h1 className="text-amber-600">BREADS & BAKERY
          </h1>
          <ul className="text-sm text-gray-600">
            {[
              "Fresh Vegetables",
              "Herbs & Seasonings",
              "Fresh Fruits",
              "Cuts & Sprouts",
              "Exortic Fruits & Veggies",
              "Package Produce",
              "Party Trays",
            ].map((list, index) => (
              <li className="text py-2" key={index}>
                {" "}
                <p className="text">
                  <Link href={"/"}>{list}</Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
