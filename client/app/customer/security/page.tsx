"use client";
import AccountEmailOtpSecurityModal from "@/components/customerAccount/AccountEmailOtpSecurityModal";
import AccountEmailSecurityModal from "@/components/customerAccount/AccountEmailSecurityModal";
import AccountSecurityModal from "@/components/customerAccount/AccountPhoneNumberSecurityModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SiSpringsecurity } from "react-icons/si";
import { z } from "zod";
import Loading from "./loading";
import AccountPasswordSecurityModal from "@/components/customerAccount/AccountPasswordSecurityModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";

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
        <div className="text">
          <span className="text-lg font-semibold">Email</span>
          <div className="text">{session?.user?.email}</div>
        </div>
        <div className="text">
          <AccountEmailOtpSecurityModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            form={form}
            setValue={setValue}
          />
          <Suspense fallback={<Loading />}>
            <AccountEmailSecurityModal open={open} setOpen={setOpen} />
          </Suspense>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text-lg font-semibold">
          <div className="text">Password</div>
          <span>........</span>
        </div>
        <div className="text">
          <AccountPasswordSecurityModal />
        </div>
      </div>
      <div className="text-lg mt-16 font-semibold">Third-pathy accounts</div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text-sm flex gap-1 items-center">
          <div>
            <FcGoogle size={28} />
          </div>
          <div className="text">Google</div>
        </div>
        <div className="text">
          <button className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
            Link
          </button>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text-sm flex gap-1 items-center">
          <div>
            <FaFacebook className="text-blue-500" size={28} />
          </div>
          <div className="text">Facebook</div>
        </div>
        <div className="text">
          <button className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
            Link
          </button>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text-sm flex gap-1 items-center">
          <div>
            <TiVendorMicrosoft className="text-green-500" size={28} />
          </div>
          <div className="text">Microsoft</div>
        </div>
        <div className="text">
          <button className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
            Link
          </button>
        </div>
      </div>
      <div className="text flex justify-between items-center border-b py-8">
        <div className="text-sm flex gap-1 items-center">
          <div>
            <FaGithub className="text-red-500" size={28} />
          </div>
          <div className="text">Github</div>
        </div>
        <div className="text">
          <button className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
            Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSecurity;
