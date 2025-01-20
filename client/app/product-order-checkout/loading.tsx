'use client'
import { Bars } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-[60vh]" >
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
  );
}
