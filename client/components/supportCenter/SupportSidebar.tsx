"use client";
import React from "react";
import Link from "next/link";
import { supportItems } from "@/utils/constants";
import useSearchQuery from "@/hooks/useSearchQuery";

const SupportSidebar = () => {
  const { searchParams, pathName, createSearchQueryString } =
    useSearchQuery();
  const supportName = searchParams?.get("support-children-type");
  
  return (
    <div className="text w-full sticky top-28">
      {supportItems.map((support) => {
        return (
          <Link
            href={
              pathName +
              "?" +
              createSearchQueryString(
                "support-children-type",
                JSON.stringify(support.name)
              )
            }
            className={`text-sm px-2 ${
              JSON.parse(supportName as string) === support.name
                ? "bg-amber-100/50 border-l-4 border-amber-600 font-semibold text-md"
                : JSON.parse(supportName as string) === null &&
                  support.name === "Buying on Shoplicity"
                ? "bg-amber-100/50 border-l-4 border-amber-600 font-semibold text-md"
                : ""
            } cursor-pointer hover:bg-amber-100/50 flex gap-2 items-center`}
            key={support.name}
          >
            <div className="flex cursor-pointer justify-between hover:bg-transparent py-3 transition-transform duration-500">
              {support.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SupportSidebar;
