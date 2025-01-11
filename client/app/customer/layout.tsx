import CustomerAccountSidebar from "@/components/CustomerAccountSidebar";
import React from "react";

const customerAccount = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-100 min-h-[80vh] gap-4 grid grid-cols-12 py-5">
      <div className="text col-span-1"></div>
      <div className="col-span-3 sticky top-28 bg-white h-[75vh]"><CustomerAccountSidebar/></div>
      <div className="gap-4 col-span-7 bg-white">{children}</div>
      <div className="text col-span-1"></div>
    </div>
  );
};

export default customerAccount;
