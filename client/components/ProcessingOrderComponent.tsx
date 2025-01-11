import React from 'react'
// import { BsInboxes } from 'react-icons/bs';
import {motion}  from "framer-motion";
import { FcProcess } from "react-icons/fc";

const ProcessingOrderComponent = () => {
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
                  <FcProcess className="text-6xl text-gray-500 mx-auto" />
                  <p className="text mt-3">{"You don't have any processing orders"}</p>
                </motion.div>
              </div>
            </div>
    </div>
  )
}

export default ProcessingOrderComponent