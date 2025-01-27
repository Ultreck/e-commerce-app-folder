'use client'
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
import img from "../assets/images/newsletterImg.png"
import useSearchQuery from "@/hooks/useSearchQuery";

const FooterContactBanner = () => {
  const {pathName} = useSearchQuery();
  return (
    <div className={`flex ${pathName === "/login"? "hidden" : ""} bg-amber-800 text-white p-6 items-center justify-between md:pl-16`}>
      <div className="text lg:p-5 lg:w-2/5">
        <p className="text-[18px]">50% discount for your first order</p>
        <h1 className="lg:text-[35px] text-[24px] font-semibold">Join our newsletter and get...</h1>
        <p className="text-[15px] py-3">
          <span className="text">
            Join our email subscription now to get updates on promotions and
            coupons.
          </span>
        </p>
        <div className="text bg-white lg:w-96 rounded-lg p-1.5">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <MdOutlineMail className="text-gray-600 text-4xl" />
            <Input
              className="border-0 text-black outline-none focus-visible:ring-0 shadow-none"
              type="email"
              placeholder="Provide Your Email"
            />
            <Button type="submit" className="bg-amber-700 text-[14px]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="text w-0 lg:w-2/5">
        <Image
          src={img}
          width={420}
          height={400}
          alt="Product image"
        />
      </div>
    </div>
  );
};

export default FooterContactBanner;
