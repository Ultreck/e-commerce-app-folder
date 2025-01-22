import React from 'react'
import EmptyPageComponent from './EmptyPageComponent';
const ReturnOrderComponent = () => {
  return (
    <div>
    <div className="w-full">
    <EmptyPageComponent caption="You don't have any return orders" className="h-[80vh]" text="You don't have any orders to return "/>
        </div>
</div>
  )
}

export default ReturnOrderComponent