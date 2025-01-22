import React, { useState } from "react";
// import { BsInboxes } from 'react-icons/bs';
import { motion } from "framer-motion";
import OrderTable from "./OrderTable";
import EmptyPageComponent from "./EmptyPageComponent";

const ProcessingOrderComponent = () => {
  const [isLoading] = useState<boolean>(true);

  return (
    <div>
      {isLoading && (
        <EmptyPageComponent caption="You don't have any processing orders" className="h-[80vh]" text='Your processing orders would be displayed here once you have one.'/>
      )}
      {!isLoading && (
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25, type: "tween" }}
          className="text"
        >
          <OrderTable length={20} />
        </motion.div>
      )}
    </div>
  );
};

export default ProcessingOrderComponent;
