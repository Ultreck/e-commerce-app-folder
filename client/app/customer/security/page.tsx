"use client";
import AccountEmailOtpSecurityModal from "@/components/AccountEmailOtpSecurityModal";
import AccountEmailSecurityModal from "@/components/AccountEmailSecurityModal";
import AccountSecurityModal from "@/components/AccountPhoneNumberSecurityModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SiSpringsecurity } from "react-icons/si";
import { z } from "zod";
import Loading from "./loading";
import AccountPasswordSecurityModal from "@/components/AccountPasswordSecurityModal";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
const CustomerSecurity = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  useEffect(() => {
    if (form.watch("pin").length === 6) {
      setIsOpen(false);
      setOpen(true);
    }
  }, [form, setIsOpen, setOpen, value]);
  
  return (
    <div className="p-8">
      <div className="flex py-2 border-b">
        <div className="text w-10 h-10 flex justify-center items-center mr-1 rounded-full bg-[#23941A]/10">
          <SiSpringsecurity size={24} className="text-[#23941A]" />
        </div>
        <div className="text">
          <p className="text-[#23941A] font-semibold text-lg">
            Your account is protected
          </p>
          <p className="text-sm text-gray-500 ">
            Your Shoplicity account is protected by advanced security. Keeping
            this information up-to-date safeguards your account even more.
          </p>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text">Mobile phone number</div>
        <div className="text">
          <AccountSecurityModal />
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text">{session?.user?.email}</div>
        <div className="text">
          <AccountEmailOtpSecurityModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            form={form}
            setValue={setValue}
          />
          <Suspense fallback={<Loading/>}>
          <AccountEmailSecurityModal open={open} setOpen={setOpen} />

          </Suspense>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text">{session?.user?.email}</div>
        <div className="text">
          <AccountPasswordSecurityModal/>
        </div>
      </div>
    </div>
  );
};

export default CustomerSecurity;
