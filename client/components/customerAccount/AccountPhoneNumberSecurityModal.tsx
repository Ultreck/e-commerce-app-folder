"use client";
import React from "react";
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
import { Input } from "@/components/ui/input";

interface phoneNumberType {
  phoneNumber: string;
}
const phoneNumberSecurity = z.object({
  phoneNumber: z
    .string()
    .min(3, { message: "Please enter a valid phone number" }),
});
const AccountPhoneNumberSecurityModal = () => {
  const form = useForm<z.infer<typeof phoneNumberSecurity>>({
    resolver: zodResolver(phoneNumberSecurity),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = (data: phoneNumberType) => {
    console.log("Submitted:", data);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <p className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
          Add
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="text-center">Add a mobile phone number</div>
          </DialogTitle>
          <DialogDescription>
            <span className="text-center flex">
              Enter the mobile phone number you would like to associate with
              your account below.
            </span>
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="text">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <div className="text border h-12 grid grid-cols-12">
                          <div className="text-center flex justify-center items-center border-r col-span-2">
                            +234
                          </div>
                          <Input
                            className=" h-12 border-0 shadow-none col-span-10 focus-visible:ring-0"
                            placeholder=""
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-center">
                <Button className="w-3/4 h-12 bg-amber-700 text-white font-semibold rounded-full" type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AccountPhoneNumberSecurityModal;
