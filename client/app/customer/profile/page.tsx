"use client";
import EditProfileModal from "@/components/customerAccount/EditProfileModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import React from "react";


interface userType {
    name: string;
    image: string;
    email: string;
}

const CustomerProfile = () => {
  const { data: session } = useSession();  
  const initials = session?.user?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <div>
      <div className="text">
        <div className="text p-10 h-[70vh]">
          <div className="text w-1/2 ">
            <div className="relative font-bold flex px-1 py-4">
              <Avatar className="border-2 border-gray-300 w-12 h-12">
                <AvatarImage src={session?.user?.image as string} alt="@user" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="text py-1 px-2">
                <div className="text-base pr-3">
                  {session?.user?.name}
                  {session !== undefined && <EditProfileModal user={session?.user as userType} />}
                </div>
                <div className="text-sm text-gray-400 font-normal pr-1">
                  {session?.user?.email}
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 font-normal flex items-center">
              <div className="px-5">
                <div className="text-black font-medium">0</div>
                <div className="text font-serif">Total orders</div>
              </div>
              <div className="px-5">
                <div className="text-black font-medium">0</div>
                <div className="text font-serif">Total reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
