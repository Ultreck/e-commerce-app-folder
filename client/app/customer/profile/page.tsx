"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import React from "react";

const CustomerProfile = () => {
  const { data: session } = useSession();

  const initials = session?.user?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("");
  console.log(session);

  return (
    <div>
      <div className="text">
        <div className="text p-10 h-[70vh]">
          <div className="text w-1/2 ">
            <div className="relative font-bold flex px-1 py-4">
              <Avatar>
                <AvatarImage src={session?.user?.image as string} alt="@user" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="text py-1 px-2">
                <div className="text-base pr-1">{session?.user?.name}</div>
                <div className="text-sm text-gray-400 font-normal pr-1">{session?.user?.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
