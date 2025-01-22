import React, { useState } from "react";
import { motion } from "framer-motion";
import OrderTable from "../OrderTable";
import EmptyPageComponent from "../EmptyPageComponent";

const AllOrdersComponent = () => {
  const [isLoading] = useState<boolean>(true);
  return (
    <div className="w-full">
      {isLoading && (
        <EmptyPageComponent
          caption="You don't have any orders"
          className="h-[80vh]"
          text="You have no orders or your orders have been deleted."
        />
      )}
      {!isLoading && (
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
          className="text"
        >
          <OrderTable length={8} />
        </motion.div>
      )}
    </div>
  );
};

export default AllOrdersComponent;
