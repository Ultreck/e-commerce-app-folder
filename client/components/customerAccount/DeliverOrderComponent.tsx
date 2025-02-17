import React from "react";
import EmptyPageComponent from "../EmptyPageComponent";

const DeliverOrderComponent = () => {
  return (
    <div>
      <div className="w-full">
      <EmptyPageComponent caption="You don't have any delivered orders" className="h-[80vh]" text='You have no records of delivered orders.'/>
      </div>
    </div>
  );
};

export default DeliverOrderComponent;
