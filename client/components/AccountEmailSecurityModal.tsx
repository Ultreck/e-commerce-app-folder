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
  email: string;
}
const phoneNumberSecurity = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

interface emailType {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const AccountEmailSecurityModal: React.FC<emailType> = ({ open, setOpen }) => {
  const formEmail = useForm<z.infer<typeof phoneNumberSecurity>>({
    resolver: zodResolver(phoneNumberSecurity),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: phoneNumberType) => {
    console.log("Submitted:", data);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger></DialogTrigger>
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
            <Form {...formEmail}>
              <form
                onSubmit={formEmail.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="text">
                  <FormField
                    control={formEmail.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <div className="text border  h-12 grid grid-cols-12">
                            <Input
                              className="border-0 shadow-none col-span-10 focus-visible:ring-0"
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
                  <Button
                    className="w-3/4 h-12 bg-amber-700 text-white font-semibold rounded-full"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccountEmailSecurityModal;
