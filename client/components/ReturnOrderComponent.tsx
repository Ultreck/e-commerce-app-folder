import React from 'react'
import { TbTruckReturn } from "react-icons/tb";
import {motion} from "framer-motion";
const ReturnOrderComponent = () => {
  return (
    <div>
    <div className="w-full">
          <div className="flex justify-center items-center min-h-[60vh]">
            <motion.div 
            initial={{x: 1000, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            className=""
            transition={{type: "tween"}}
            >
              <TbTruckReturn className="text-6xl text-gray-500 mx-auto" />
              <p className="text mt-3">{"You don't have any orders to return"}</p>
            </motion.div>
          </div>
        </div>
</div>
  )
}

export default ReturnOrderComponent