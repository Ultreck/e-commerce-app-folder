import React from "react";
// import { ScrollArea } from "./ui/scroll-area";
import OrderCard from "./OrderCard";

const OrderTable = ({length}: {length: number}) => {
  return (
    <div>
        {Array.from({length: length}).map((_, index) => (
          <div className="text" key={index}>
            <OrderCard/>
          </div>
        ))}
    </div>
  );
};

export default OrderTable;
