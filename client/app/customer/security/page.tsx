'use client'
import AccountPasswordSecurityModal from "@/components/AccountPasswordSecurityModal";
import AccountSecurityModal from "@/components/AccountSecurityModal";
import { useSession } from "next-auth/react";
import React from "react";
import { SiSpringsecurity } from "react-icons/si";

const CustomerSecurity = () => {
  const {data: session} = useSession();
  console.log(session);
  
  return (
    <div className="p-8">
      <div className="flex py-2 border-b">
        <div className="text w-10 h-10 flex justify-center items-center mr-1 rounded-full bg-[#23941A]/10">
        <SiSpringsecurity size={24} className="text-[#23941A]" />
        </div>
        <div className="text">
        <p className="text-[#23941A] font-semibold text-lg">Your account is protected</p>
        <p className="text-sm text-gray-500 ">Your Shoplicity account is protected by advanced security. Keeping this information up-to-date safeguards your account even more.</p>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text">Mobile phone number</div>
        <div className="text"><AccountSecurityModal/></div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text">{session?.user?.email}</div>
        <div className="text"><AccountPasswordSecurityModal/></div>
      </div>
    </div>
  );
};

export default CustomerSecurity;
