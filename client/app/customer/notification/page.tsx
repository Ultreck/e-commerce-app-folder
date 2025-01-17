"use client"
import React, { useState } from 'react'
import { IoNotificationsOffOutline } from "react-icons/io5";

const CustomerNotification = () => {
 const [isLoading] = useState<boolean>(false);
 
   return (
     <div>
       {!isLoading && (
         <div className="w-full">
           <div className="flex justify-center items-center min-h-[65vh]">
             <div className="w-2/5 text-center">
               <IoNotificationsOffOutline size={35} className="texttext-gray-500 mx-auto" />
               <p className="text mt-3">{"You don't have any notification"}</p>
               <p className="text-gray-400 text-sm mt-1">
                 You have no Notification or your notification have been deleted.
               </p>
             </div>
           </div>
         </div>
       )}
     </div>
  )
}

export default CustomerNotification