import React, { useState } from "react";
// import { BsInboxes } from 'react-icons/bs';
import { motion } from "framer-motion";
import { FcProcess } from "react-icons/fc";
import OrderTable from "./OrderTable";

const ProcessingOrderComponent = () => {
  const [isLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && (
        <div className="w-full">
          <div className="flex justify-center items-center min-h-[60vh]">
            <div
              // initial={{ x: 1000, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              className=""
              // transition={{ type: "tween" }}
            >
              <FcProcess className="text-6xl text-gray-500 mx-auto" />
              <p className="text mt-3">
                {"You don't have any processing orders"}
              </p>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25, type: "tween" }}
          className="text"
        >
          <OrderTable length={20} wish={false} />
        </motion.div>
      )}
    </div>
  );
};

export default ProcessingOrderComponent;
