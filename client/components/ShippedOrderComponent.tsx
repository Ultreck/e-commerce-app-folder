import React from 'react'
import { RiShip2Line } from "react-icons/ri";
import {motion}  from "framer-motion"
const ShippedOrderComponent = () => {
  return (
    <div>
        <div>
        <div className="w-full">
              <div className="flex justify-center items-center min-h-[60vh]">
                <motion.div 
                initial={{x: 1000, opacity: 0}} 
                animate={{x: 0, opacity: 1}} 
                transition={{type: "tween"}}
                className=""
                >
                  <RiShip2Line className="text-6xl text-gray-500 mx-auto" />
                  <p className="text mt-3">{"You don't have any shipped orders"}</p>
                </motion.div>
              </div>
            </div>
    </div>
    </div>
  )
}

export default ShippedOrderComponent