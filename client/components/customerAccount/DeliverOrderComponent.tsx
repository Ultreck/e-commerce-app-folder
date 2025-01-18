import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const DeliverOrderComponent = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-center items-center min-h-[60vh]">
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className=""
            transition={{ type: "tween" }}
          >
            <AiOutlineDeliveredProcedure className="text-6xl text-gray-500 mx-auto" />
            <p className="text mt-3">{"You don't have any delivered orders"}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeliverOrderComponent;
