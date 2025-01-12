import { itemsDummyData } from "@/utils/helper";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";

const OrderTable = () => {
  return (
    <div>
      <ScrollArea className="h-[60vh] w-full rounded-md border">
        {itemsDummyData.map((value, index) => (
          <div className="text" key={index}>
            <div className="text"></div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default OrderTable;
