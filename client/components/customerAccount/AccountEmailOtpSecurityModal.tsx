"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSession } from "next-auth/react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface securityType {
  pin: string;
}

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

interface AccoutType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  form: UseFormReturn<z.infer<typeof FormSchema>>;
  setValue: (value: string) => void;
}

const AccountEmailOtpSecurityModal: React.FC<AccoutType> = ({
  isOpen,
  setIsOpen,
  form,
  setValue,
}) => {
  const [counter, setCounter] = useState<number>(60);
  const { data: session } = useSession();

  const onSubmit = (data: securityType) => {
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      if (counter > 1) {
        setCounter((prev) => prev - 1);
      }
    }, 1000);
  }, [counter]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <p className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
          Edit
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="text-center">Enter the verification code</div>
          </DialogTitle>
          <DialogDescription className="flex text-center">
            <span className="text-black text-center">
              {`To continue, complete this verification step. We've sent a verification code to the email`}
              <span className="text-amber-700 mx-1">
                {session?.user?.email}{" "}
              </span>
              Please enter it below.
            </span>
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <InputOTP
                        value={field.value}
                        onChange={(value) => {
                          setValue(value);
                          field.onChange(value);
                        }}
                        maxLength={6}
                      >
                        <InputOTPGroup className="flex gap-x-4">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription className=" flex justify-end">
                      {counter > 1 && (
                        <span
                          className={`text-amber-700 text-lg font-mono font-semibold`}
                        >
                          {counter}
                        </span>
                      )}
                      {counter === 1 && (
                        <span className={`text-amber-700`}>Resend otp</span>
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogHeader>
        <div className="text">
          <p className="text-base font-semibold">
            {"Didn't receive the email? "}
          </p>
          <ul className="text-sm text-gray-500">
            {[
              "1. Make sure your email address is correct.",
              "2. Please check your spam folder.",
              `3. If you still don't see the email 🤷‍♂️.`,
            ].map((value, index) => (
              <li className="text" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccountEmailOtpSecurityModal;
