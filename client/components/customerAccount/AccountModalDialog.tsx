"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories, profileItems } from "@/utils/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const AccountModalDialog = () => {
  const [isOpen] = useState<boolean>(false);

  const { data: session } = useSession();
  const fullName = session?.user?.name;
  const initials = fullName
    ?.split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <DropdownMenu>
      <div className="transition-transform duration-700">
        <DropdownMenuTrigger className="outline-none">
          <div className="text cursor-pointer rounded-full flex items-center border">
            <div
              className={`bg-amber-700 ${
                isOpen && "bg-golden"
              } p-0 rounded-full w-full h-full text-white relative overflow-hidden group`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-1"></div>
              <div className="relative font-bold flex w-44">
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image as string}
                    alt="@user"
                  />
                  <AvatarFallback className="text-black">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                {!session ? (
                  <Skeleton className="h-full bg-golden w-full" />
                ) : (
                  <div className="text grid py-1 px-2">
                    <span className="text-xs pr-1 truncate">
                      Hello, {session?.user?.name}
                    </span>
                    <span className="text-xs">Account & order</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <div className="text flex h-[550px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 250 }}
              transition={{ delay: 0.4, duration: 0.2 }}
              className="text w-1/2 "
            >
              <ScrollArea className="h-[550px] rounded-md p-2">
                {categories.map((value) => (
                  <div className="text" key={value}>
                    <DropdownMenuItem className="flex justify-between">
                      {value}
                    </DropdownMenuItem>
                  </div>
                ))}
              </ScrollArea>
            </motion.div>
            <div className="text  border-l">
              <div className="relative font-bold flex px-1 py-4">
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image as string}
                    alt="@user"
                  />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="text flex items-center py-1 px-2">
                  <span className="text-base pr-1">{session?.user?.name}</span>
                </div>
              </div>
              <Separator />
              {profileItems.map(
                (profile) =>
                  !profile.isLogOut && (
                    <Link
                      href={profile?.link}
                      className="text px-2 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
                      key={profile.name}
                    >
                      <div className="text-2xl">{profile.icon}</div>
                      <DropdownMenuItem className="flex cursor-pointer justify-between hover:bg-transparent py-3 transition-transform duration-500">
                        {profile.name}
                      </DropdownMenuItem>
                    </Link>
                  )
              )}
              <Separator />
              {profileItems.map(
                (profile) =>
                  profile.isLogOut && (
                    <Link
                      href={"#"}
                      className="text-red-500 cursor-pointer px-2 hover:bg-gray-100 flex gap-2 items-center"
                      key={profile.name}
                    >
                      <div className="text-2xl">{profile.icon}</div>
                      <DropdownMenuItem className="flex cursor-pointer justify-between py-3 hover:bg-transparent hover:text-red-500 transition-transform duration-500">
                        {profile.name}
                      </DropdownMenuItem>
                    </Link>
                  )
              )}
              <span className="text-3xl text-golden">{}</span>
            </div>
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default AccountModalDialog;
