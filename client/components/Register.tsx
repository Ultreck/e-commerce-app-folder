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
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useSearchQuery from "@/hooks/useSearchQuery";
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
  const [isFocus1, setIsFocus1] = useState<boolean>(false);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);
  const [isFocus3, setIsFocus3] = useState<boolean>(false);
  const { pathName, router, createSearchQueryString } = useSearchQuery();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
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
    <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 w-3/4 bg-white h-auto px-8 rounded-lg border-t shadow-xl">
      <div className="text pt-5">
        <div className="text">
          <Link href={"/"} prefetch>
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
          className="space-y-5 max-w-3xl mx-auto pt-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className={`text h-12 border ${isFocus1 && "bg-gray-100"} rounded-lg focus-visible:ring-primary-2`}>
                    <Input
                      placeholder="Enter your email address"
                      type="text"
                      {...field}
                      className="border-0 h-full focus-visible:ring-0 shadow-none"
                      onFocus={() => {
                        setIsFocus1(true);
                    }}
                    onBlur={() => {
                          setIsFocus1(false);
                      }}
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
                <FormControl>
                  <div className={`text grid h-12 ${isFocus2 && "bg-gray-100"} grid-cols-12 border  rounded-lg`}>
                    <Input
                      value={field.value}
                      onChange={(value) => {
                        validatePassword(value.target.value);
                        field.onChange(value);
                      }}
                      className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                      placeholder="Enter your password"
                      type={password1 ? "text" : "password"}
                      onFocus={() => {
                        setIsFocus2(true);
                    }}
                    onBlur={() => {
                          setIsFocus2(false);
                       
                      }}
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
                <FormControl>
                  <div className={`text grid ${isFocus3 && "bg-gray-100"} h-12 grid-cols-12 border  rounded-lg`}>
                    <Input
                      type={password2 ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...field}
                      className="border-0 h-full focus-visible:ring-0 shadow-none col-span-11"
                      onFocus={() => {
                        setIsFocus3(true);
                      }}
                      onBlur={() => {
                        setIsFocus3(false);
                      }}
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
            <div className="text grid grid-cols-3  ">
              <div className="text-gray-600 grid grid-cols-1">
                Password quality:-
              </div>
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
            <p className="text-sm items-center text-gray-400 flex ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className="truncate">
                    <span className="truncate cursor-pointer">
                      <IoIosInformationCircleOutline
                        size={24}
                        className="text-sky-400 mr-1"
                      />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent data-align="end" className="bg-gray-100">
                    <span className="">
                      <span className="text-gray-600">
                        Don&apos;t use a password from another site, or something too
                        obvious like your pet&apos;s name.
                      </span>
                      <p className="text mt-2">
                        You password have to meet up with the conditions below:{" "}
                      </p>
                      <ul className="text-gray-600 list-inside list-disc">
                        <li>At least 8 characters</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one number</li>
                        <li>At least one special character(@#$!%*?&)</li>
                        <li>Both passwords must matched</li>
                      </ul>
                    </span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {`Can't sign up?`}
            </p>
          </div>
          <div className="text">
            <Button
              type="submit"
              className="w-full h-12 text-white bg-amber-700 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
              <span className="relative font-bold">Sign up</span>
            </Button>
          </div>
        </form>
      </Form>
      <div className="text py-2 flex justify-between items-center">
        <span className="text-gray-600 italic">Already have an account</span>
        <button
          onClick={() => {
            router.push(
              pathName +
                "?" +
                createSearchQueryString("registration-type", "login")
            );
          }}
          className="text-sky-600 underline"
        >
          Log in
        </button>
      </div>
      <div className="text-center relative my-5 flex items-center py-3">
        <Separator />
        <span className="text absolute flext justify-center bg-white p-2 rounded-full left-[45%]">
          OR
        </span>
      </div>
      <div className="text w-full grid pb-8 gap-3">
        <button
          onClick={() => signIn("google")}
          className="text-black hover:bg-gray-50 flex items-center justify-center border px-5 rounded-lg py-3  relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-gray-200 via-gray-100 to-gray-100 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
          <span className="relative flex items-center gap-2">
            <FcGoogle size={25} />
            <span className="text">Sign up with google</span>
          </span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="text-black hover:bg-gray-50 flex items-center justify-center border px-5 rounded-lg py-3  relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-gray-200 via-gray-100 to-gray-100 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
          <span className="relative flex items-center gap-2">
            <FaGithub size={25} />
            <span className="text">Sign up with github</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
