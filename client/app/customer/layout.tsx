'use client'
import BreadCrumbComponent from "@/components/BreadCrumbComponent";
import CustomerAccountSidebar from "@/components/customerAccount/CustomerAccountSidebar";
import useSearchQuery from "@/hooks/useSearchQuery";
import React from "react";

const CustomerAccount = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {pathName} = useSearchQuery();
  console.log(pathName);
  const getName = (name: string) => {
    return name.split("/")[2];
  };
  return (
    <>
    <BreadCrumbComponent items={[{label: "Home", href: "/"}, {label: getName(pathName), href: pathName},]} className="bg-gray-100" />
    <div className="bg-gray-100 min-h-[80vh] gap-4 grid grid-cols-12 py-5">
      <div className="text col-span-1"></div>
      <div className="col-span-3 hidden sm:block sticky top-28 bg-white h-[80vh]"><CustomerAccountSidebar/></div>
      <div className="gap-4 col-span-10 sm:col-span-7 bg-white">{children}</div>
      <div className="text col-span-1"></div>
    </div>
    </>
  );
};

export default CustomerAccount;
