"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Link from "next/link";
import { TbHexagonLetterSFilled } from "react-icons/tb";
import VerticalTextSlider from "./VerticalTextSlider";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Progress } from "./ui/progress";

const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@#$!%*?&]/,
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

const Register = () => {
  const [password1, setPassword1] = useState<boolean>(false);
  const [password2, setPassword2] = useState<boolean>(false);
  const [, setPassword] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  const conditions = [
    { test: /.{8,}/, message: "At least 8 characters" },
    { test: /[A-Z]/, message: "One uppercase letter" },
    { test: /[a-z]/, message: "One lowercase letter" },
    { test: /[0-9]/, message: "One number" },
    { test: /[!@#$%^&*]/, message: "One special character (!@#$%^&*)" },
  ];

  const validatePassword = (password: string) => {
    setPassword(password);
    const passedConditions = conditions.filter((condition) =>
      condition.test.test(password)
    );
    setProgress((passedConditions.length / conditions.length) * 100);
    console.log(passedConditions);

    return passedConditions;
  };
  return (
    <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 w-3/4 bg-white h-auto px-8 rounded-lg shadow-lg">
      <div className="text pt-5">
        <div className="text">
          <Link href={"/"}>
            <div className="text flex gap-1 font-mono">
              <TbHexagonLetterSFilled size={48} className="text-amber-700" />
              <div className="text  ">
                <p className="text-2xl font-bold">Shoplicity</p>
                <p className="text-xs">Click.Shop.Smile</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <div className="text h-12 border rounded-lg focus-visible:ring-primary-2">
                    <Input
                      placeholder="Enter your email address"
                      type="text"
                      {...field}
                      className="border-0 h-full focus-visible:ring-0 shadow-none "
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <div className="text grid h-12 grid-cols-12 border  rounded-lg ">
                    <Input
                      value={field.value}
                      onChange={(value) => {
                        validatePassword(value.target.value);
                        field.onChange(value);
                      }}
                      className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                      placeholder="Enter your password"
                      type={password1 ? "text" : "password"}
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
                {/* <FormLabel>Confirm passwordd</FormLabel> */}
                <FormControl>
                  <div className="text grid h-12 grid-cols-12 border  rounded-lg ">
                    <Input
                      value={field.value}
                      onChange={(value) => {
                        validatePassword(value.target.value);
                        field.onChange(value);
                      }}
                      className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                      placeholder="Re-enter your password"
                      type={password2 ? "text" : "password"}
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
      <div className="text">
        <div className="text-base grid grid-cols-3  ">
          <div className="text grid grid-cols-1">Password quality:-</div>
          <div className="text col-span-2 flex justify-center items-center">
            <Progress
              value={progress}
              className={`${
                progress <= 20
                  ? "bg-red-600"
                  : progress === 40
                  ? "bg-orange-500"
                  : progress === 60
                  ? "bg-yellow-500"
                  : progress === 80
                  ? "bg-lime-500"
                  : "bg-green-500"
              }`}
            />
          </div>
        </div>
        <ul className="text-sm text-gray-600">
          {[
            { test: /.{8,}/, message: "At least 8 characters" },
            { test: /[A-Z]/, message: "One uppercase letter" },
            { test: /[a-z]/, message: "One lowercase letter" },
            { test: /[0-9]/, message: "One number" },
            { test: /[@#$!%*?&]/, message: "One special character" },
          ].map((__, index) => (
            <li key={index}>
              {index + 1 <= 1 && (
                <VerticalTextSlider
                  className={"text-black font-normal text-end"}
                  data={[
                    "At least 8 characters",
                    "At least one uppercase letter",
                    "At least one lowercase letter",
                    "At least one number",
                    "At least one special character",
                  ]}
                  delayValue={0.5}
                />
              )}
            </li>
          ))}
        </ul>
        <p className="text-sm  text-gray-400 flex ">
          <IoIosInformationCircleOutline
            size={24}
            className="text-sky-400 mr-1"
          />
          {`Don't use a password from another site, or something too obvious
                like your pet's name.`}
        </p>
      </div>
          <div className="text">
            <Button
              disabled={progress < 80}
              type="submit"
              className="w-full h-12 text-white bg-amber-700"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
