import React, { useState } from "react";
import { BsInboxes } from "react-icons/bs";
import {motion} from "framer-motion"
import OrderCard from "./OrderCard";


const AllOrdersComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <div className="w-full">
      {isLoading && 
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
      }
      {!isLoading && 
      <div className="text">
        <OrderCard/>
      </div>
      }
    </div>
  );
};

export default AllOrdersComponent;
