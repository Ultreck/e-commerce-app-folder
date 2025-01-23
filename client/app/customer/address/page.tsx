'use client'
import AddressCard from "@/components/customerAccount/AddressCard";
import AddressForm from "@/components/customerAccount/AddressForm";
import useSearchQuery from "@/hooks/useSearchQuery";
import React from "react";

const CustomerAddress = () => {
  const {searchParams} =  useSearchQuery();
  const queryString = searchParams?.get("type");
  const queryData = JSON.parse(searchParams?.get("data") as string);  
  return (
    <div>
      {queryString === 'create' && <AddressForm data={queryData} type={queryString}/>}
      {queryString !== 'create' && queryString !== "edit" && <AddressCard />}
      {queryString === 'edit' && <AddressForm data={queryData} type={queryString}/>}
    </div>
  );
};

export default CustomerAddress;
