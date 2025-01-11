import React from "react";
import { BsInboxes } from "react-icons/bs";
import {motion} from "framer-motion"
const AllOrdersComponent = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center min-h-[60vh]">
        <motion.div 
        initial={{x: 1000}}
        animate={{x: 0}}
        transition={{type: "tween"}}
        className=""
        >
          <BsInboxes className="text-6xl text-gray-500 mx-auto" />
          <p className="text mt-3">{"You don't have any orders"}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AllOrdersComponent;
