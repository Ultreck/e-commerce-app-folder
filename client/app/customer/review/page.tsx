"use client";
import React, { useState } from "react";
import { MdOutlineReviews } from "react-icons/md";
// import { motion } from "framer-motion"

const CustomerReview = () => {
  const [isLoading] = useState<boolean>(false);

  return (
    <div>
      {!isLoading && (
        <div className="w-full">
          <div className="flex justify-center items-center min-h-[65vh]">
            <div className="w-2/5 text-center">
              <MdOutlineReviews className="text-6xl text-gray-500 mx-auto" />
              <p className="text mt-3">{"You don't have any reviews"}</p>
              <p className="text-gray-400 text-sm mt-1">
                You have no completed reviews or your reviews have been deleted.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReview;
