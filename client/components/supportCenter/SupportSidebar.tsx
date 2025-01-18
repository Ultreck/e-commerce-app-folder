"use client";
import React from "react";
import Link from "next/link";
import {supportItems } from "@/utils/constants";
import { useSession } from "next-auth/react";
import useSearchQuery from "@/hooks/useSearchQuery";

const SupportSidebar = () => {
  const { data: session } = useSession();
  const { router, searchParams, pathName, createSearchQueryString } =
    useSearchQuery();
  const fullName = session?.user?.name;
  const initials = fullName
    ?.split(" ")
    .map((word) => word[0])
    .join("");

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
