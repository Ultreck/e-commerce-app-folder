import React from 'react'
import { RiShip2Line } from "react-icons/ri";
import {motion}  from "framer-motion"
import EmptyPageComponent from './EmptyPageComponent';
const ShippedOrderComponent = () => {
  return (
    <div>
        <div>
        <div className="w-full">
        <EmptyPageComponent caption="You don't have any shipped orders" className="h-[80vh]" text='If your shipped orders exist it would be displayed here.'/>
            </div>
    </div>
    </div>
  )
}

export default ShippedOrderComponent