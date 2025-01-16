'use client'
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-700/20 absolute top-0" >
         <Bars
           height="80"
           width="80"
           color="#b45309"
           ariaLabel="bars-loading"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
         />
       </div>
  )
}

export default Loading