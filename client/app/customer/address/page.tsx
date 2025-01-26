"use client";
import AddressCard from "@/components/customerAccount/AddressCard";
import AddressForm from "@/components/customerAccount/AddressForm";
import useSearchQuery from "@/hooks/useSearchQuery";
import React, { Suspense } from "react";
import Loading from "./loading";

const CustomerAddress = () => {
  const { searchParams } = useSearchQuery();
  const queryString = searchParams?.get("type");
  const queryData = JSON.parse(searchParams?.get("data") as string);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {queryString === "create" && (
          <AddressForm data={queryData} type={queryString} />
        )}
      </Suspense>
      <Suspense fallback={<Loading />}>
        {queryString !== "create" && queryString !== "edit" && <AddressCard />}
      </Suspense>
      <Suspense fallback={<Loading />}>
        {queryString === "edit" && (
          <AddressForm data={queryData} type={queryString} />
        )}
      </Suspense>
    </div>
  );
};

export default CustomerAddress;
