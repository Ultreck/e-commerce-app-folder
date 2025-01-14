import React from "react";
// import { ScrollArea } from "./ui/scroll-area";
import OrderCard from "./OrderCard";

const OrderTable = ({length}: {length: number}) => {
  return (
    <div>
      {/* <ScrollArea className="h-[70vh] w-full rounded-md"> */}
        {Array.from({length: length}).map((_, index) => (
          <div className="text" key={index}>
            <OrderCard/>
          </div>
        ))}
      {/* </ScrollArea> */}
    </div>
  );
};

export default OrderTable;
