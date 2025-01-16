"use client";
import React, { useState } from "react";
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
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const AccountPasswordSecurityModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [password1, setPassword1] = useState<boolean>(false);
  const [password2, setPassword2] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submitted:", data);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <p className="text px-5 py-1 bg-amber-600 text-white rounded-full hover:bg-amber-700">
            Add
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="text-center">Add a password</div>
            </DialogTitle>
            <DialogDescription>
              <span className="text-center flex">
                Enter the password you would like to associate with your account
                below.
              </span>
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <div className="text grid h-12 grid-cols-12 border ">
                          <Input
                            type={password1 ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                            className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                          />
                          <div
                            onClick={() => setPassword1(!password1)}
                            className="text col-span-1 flex justify-center items-center"
                          >
                            {password1 ? (
                              <button className="text">
                                {" "}
                                <GoEye />{" "}
                              </button>
                            ) : (
                              <button className="text">
                                {" "}
                                <GoEyeClosed />
                              </button>
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <div className="text grid h-12 grid-cols-12 border ">
                          <Input
                            type={password2 ? "text" : "password"}
                            placeholder="Confirm your password"
                            {...field}
                            className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                          />
                          <div
                            onClick={() => setPassword2(!password2)}
                            className="text col-span-1 flex justify-center items-center"
                          >
                            {password2 ? (
                              <button className="text">
                                {" "}
                                <GoEye />{" "}
                              </button>
                            ) : (
                              <button className="text">
                                {" "}
                                <GoEyeClosed />
                              </button>
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
            <div className="text">
              <p className="text-base font-semibold">Password quality:-</p>
              <p className="text-sm  text-gray-500">
                Don't use a password from another site, or something too obvious
                like your pet's name.
              </p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccountPasswordSecurityModal;
