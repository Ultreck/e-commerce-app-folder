"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { profileItems } from "@/utils/constants";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
const CustomerAccountSidebar = () => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const fullName = session?.user?.name;
  const initials = fullName
    ?.split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <div className="text w-full sticky top-28">
      <div className="relative font-bold flex px-1 py-4">
        <Avatar>
          <AvatarImage src={session?.user?.image as string} alt="@user" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="text flex items-center py-1 px-2">
          <span className="text-base pr-1">{session?.user?.name}</span>
        </div>
      </div>
      <Separator />
      {profileItems.map((profile) => {
        return (
          !profile.isLogOut && (
            <Link
              href={profile?.link}
              className={`text px-2 ${profile.link === pathName
                  ? "bg-amber-100/50 border-l-4 border-amber-600 font-semibold text-md"
                  : ""
              } cursor-pointer hover:bg-amber-100/50 flex gap-2 items-center`}
              key={profile.name}
            >
              <div className="text-2xl">{profile.icon}</div>
              <div className="flex cursor-pointer justify-between hover:bg-transparent py-3 transition-transform duration-500">
                {profile.name}
              </div>
            </Link>
          )
        );
      })}
      <Separator />
      {profileItems.map(
        (profile) =>
          profile.isLogOut && (
            <Link
              href={"#"}
              className={`text-red-500 cursor-pointer px-2 hover:bg-gray-100 flex gap-2 items-center`}
              key={profile.name}
            >
              <div className="text-2xl">{profile.icon}</div>
              <div className="flex cursor-pointer justify-between py-3 hover:bg-transparent hover:text-red-500 transition-transform duration-500">
                {profile.name}
              </div>
            </Link>
          )
      )}
      <span className="text-3xl text-golden">{}</span>
    </div>
  );
};

export default CustomerAccountSidebar;
