import AddressCard from "@/components/AddressCard";
import React from "react";

const CustomerAddress = () => {
  return (
    <div>
      <div className="text">
        <div className="text border-b p-6 flex justify-between items-center">
          <p className="text">Addresses(5)</p>
          <p className="text">
            <button className="text-white font-semibold bg-[#23941A] px-3 py-0.5 rounded">
              Create address
            </button>
          </p>
        </div>
        <div className="text">
          <AddressCard/>
        </div>
        <div className="text"></div>
      </div>
    </div>
  );
};

export default CustomerAddress;
