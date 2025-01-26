"use client";
import SupportSidebar from "@/components/supportCenter/SupportSidebar";
import React, { Suspense } from "react";
import img from "../../../assets/images/support-banner.jpg";
import useSearchQuery from "@/hooks/useSearchQuery";
import Loading from "./loading";

const SupportLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { searchParams } = useSearchQuery();
  const supportType = searchParams?.get("support-type");
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="text">
          <div
            className="text bg-slate-900/95 w-full h-72 flex items-center bg-blend-overlay bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${img.src})` }}
          >
            <div className="text pl-5 lg:pl-20">
              <h2 className="text-white font-semibold text-4xl">
                Hi, how can we help you?
              </h2>
              <p className="text-white my-2 font-semibold">
                Select an order to get help with items, shipping, return or
                refund problems, etc.
              </p>
            </div>
          </div>
          <h1 className="text-center mt-10 text-xl font-semibold">
            {supportType}
          </h1>
        </div>
        <div className="text my-10 px-16 grid gap-3 grid-cols-4">
          <div className="text ">
            <Suspense fallback={<Loading />}>
              <SupportSidebar />
            </Suspense>
          </div>
          <div className="text col-span-3">{children}</div>
        </div>
      </Suspense>
    </div>
  );
};

export default SupportLayout;
