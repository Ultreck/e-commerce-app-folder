import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import img from "../../assets/images/puchase-img.webp";
import Image from "next/image";

const PuchaseProtectction = () => {
  return (
    <div>
      <div className="text my-16 flex p-10 items-center bg-[#23941A]/10 h-44 justify-center">
        <MdOutlineSecurity className="text-[#23941A]" size={65} />
        <div className="text-[#23941A]">
          <h2 className="text font-semibold text-xl">
            Shop Confidently with Shoplicity Purchase Protection Program
          </h2>
          <p className="text">
            Get a full refund if your item can't be delivered, arrives damaged,
            or isn't as described. You may be asked to send the item back before
            your refund can be issued.
          </p>
        </div>
      </div>
      <div className="text flex items-center justify-center">
        <div className="text">
          <div className="text w-4/5">
            <h2 className="text-lg font-semibold">
              Shoplicity Purchase Protection Program
            </h2>
            <p className="text-sm my-1">
              Easily get help in the rare case that something goes wrong when
              shopping from a small business
            </p>
          </div>
          <div className="text  mt-5">
            <h2 className="text-lg font-semibold">
              What's eligible for Shoplicity Purchase Protection Program
            </h2>
            <ul className="text-sm my-1 gap-3">
              <li className="text list-inside list-disc">
                Your order doesn't match the item descriptions or photos
              </li>
              <li className="text list-inside list-disc">
                Your item arrived damaged
              </li>
              <li className="text list-inside list-disc">
                Your item couldn't be delivered, arrived late, or was lost in
                transit
              </li>
            </ul>
          </div>
        </div>
        <div className="text p-5">
          <Image
            src={img}
            alt="puchase-image"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className="text px-16 py-24 bg-amber-700/5">
        <div className="text-2xl my-5 text-center font-semibold">
          We've got your back if something goes wrong. Here's how it works:
        </div>
        <div className="text flex justify-between">
          <div className="text w-1/4">
            <div className="text">
              <div className="text-lg my-6 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <h2 className="text-lg my-6">File a Return</h2>
              <p className="text-sm">
                Select the item(s) you would like to return on “Your orders”
                page and click the "Return/other help" button. Please share your
                reason for return to help us serve you better next time! Select
                the return method and click “Submit”.
              </p>
            </div>
          </div>
          <div className="text w-1/4">
            <div className="text">
              <div className="text-lg my-6 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <h2 className="text-lg my-6">Send your package back</h2>
              <p className="text-sm">
                The return window for most items is 90 days from the date of
                purchase. All eligible items can be returned within the return
                window in their original condition for a full refund. Please
                send the package within 14 days after you submit your return.
              </p>
            </div>
          </div>
          <div className="text w-1/4">
            <div className="text">
              <div className="text-lg my-6 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <h2 className="text-lg my-6">Get Refunded</h2>
              <p className="text-sm">
                TIf your order is eligible for Shoplicity Purchase Protection Program,
                you'll be refunded for your item(s). You may choose to receive
                the refund to your Shoplicity credit or your original payment method.
                You will receive a confirmation when the refund is done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuchaseProtectction;
