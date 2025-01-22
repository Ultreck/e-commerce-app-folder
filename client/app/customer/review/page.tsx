"use client";
import EmptyPageComponent from "@/components/EmptyPageComponent";
import React, { useState } from "react";

const CustomerReview = () => {
  const [isLoading] = useState<boolean>(false);

  return (
    <div>
      {!isLoading && (
        <div className="w-full">
          <EmptyPageComponent caption="You don't have any reviews" className="h-[80vh]" text='You have no completed reviews or your reviews have been deleted.'/>
        </div>
      )}
    </div>
  );
};

export default CustomerReview;
