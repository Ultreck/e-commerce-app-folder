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
import { IoIosInformationCircleOutline } from "react-icons/io";
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
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const Login = () => {
  const [password1, setPassword1] = useState<boolean>(false);
  const [isFocus1, setIsFocus1] = useState<boolean>(false);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);
  const { pathName, router, createSearchQueryString } = useSearchQuery();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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

  return (
    <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 w-3/4 bg-white h-auto px-8 rounded-lg shadow-xl border-t">
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
                  <div className={`text ${isFocus1 && "bg-gray-100"} h-12 border rounded-lg`}>
                    <Input
                      placeholder="Enter your email address"
                      type="text"
                      {...field}
                      className="border-0 h-full focus-visible:ring-0 shadow-none "
                      onBlur={() => {
                        setIsFocus1(false);
                      }}
                      onFocus={() => {
                        setIsFocus1(true);
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
                  <div
                    className={`text grid h-12 grid-cols-12 border ${
                      isFocus2 && "bg-gray-100"
                    }  rounded-lg`}
                  >
                    <Input
                      type={password1 ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field} 
                      onBlur={() => {
                        setIsFocus2(false);
                      }}
                      onFocus={() => {
                        setIsFocus2(true);
                      }}
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
          <div className="text">
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
                        You must enter the correct information that you used to
                        registered your account.
                      </span>
                      <p className="text mt-2">
                        Below are the possible ways to troubleshoot the error:{" "}
                      </p>
                      <ul className="text-gray-600 list-inside list-disc">
                        <li>Enter the correct email address</li>
                        <li>Enter the correct password</li>
                        <li>
                          You can sign in with third party(alternate way)
                          "Google" or "Github"
                        </li>
                        <li>
                          Click on "forgot password" to reset your password
                        </li>
                        <li>
                          If you don't have an existing account click on "Sign up" to create one.
                        </li>
                      </ul>
                    </span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {`Can't login?`}
            </p>
          </div>
          <div className="text">
            <Button
              type="submit"
              className="w-full h-12 text-white bg-amber-700 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
              <span className="relative font-bold">Login</span>
            </Button>
          </div>
        </form>
      </Form>
      <div className="text py-2 flex justify-between items-center">
        <button className="text-sky-600 underline underline-offset-1">Forgot password?</button>
        <button
          onClick={() => {
            router.push(
              pathName +
                "?" +
                createSearchQueryString("registration-type", "signup")
            );
          }}
          className="text-sky-600 underline"
        >
          Sign up
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

export default Login;
