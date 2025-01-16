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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

interface securityType {
  pin: string;
}
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const AccountPasswordSecurityModal = () => {
  const [value, setValue] = useState<string>("");
  const [counter, setCounter] = useState<number>(60);
  const { data: session } = useSession();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  console.log(value);

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
    <Dialog>
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
          <DialogDescription>
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
              {/* <Button type="submit">Submit</Button> */}
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

export default AccountPasswordSecurityModal;
