"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeft } from "react-icons/fa";
import useSearchQuery from "@/hooks/useSearchQuery";

interface addressFormType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  postalAddress: string;
}
interface formType {
  data: addressFormType;
  type: string;
}
const addressFromSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  phoneNumber: z.string().min(2, { message: "Phone Number" }),
  streetAddress: z.string().min(5, { message: "Address 1 is required" }),
  apartment: z.string().optional(),
  city: z.string().min(3, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  country: z.string().min(2, { message: "country is required" }),
  postalAddress: z.string().optional(),
});
const AddressForm: React.FC<formType> = ({ data, type }) => {
  const {
    router,
    // createSearchQueryString,
    pathName,
  } = useSearchQuery();
  const form = useForm<z.infer<typeof addressFromSchema>>({
    resolver: zodResolver(addressFromSchema),
    defaultValues: {
      country: "Nigeria",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "",
      postalAddress: "",
    },
  });

  useEffect(() => {
    form.setValue("country", "Nigeria");
    console.log(type);
    if (type === "edit") {
      form.setValue("firstName", data.firstName);
      form.setValue("lastName", data.lastName);
      form.setValue("phoneNumber", data.phoneNumber);
      form.setValue("streetAddress", data.streetAddress);
      form.setValue("apartment", data.apartment);
      form.setValue("city", data.city);
      form.setValue("state", data.state);
      form.setValue("postalAddress", data.postalAddress);
    }
  }, [form, type, data]);

  const onSubmit = (data: addressFormType) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="text border-b p-6 flex justify-between items-center">
        <p className="text flex items-center gap-2">
          <button
            onClick={() => {
              router.push(pathName);
            }}
            className="text"
          >
            <FaArrowLeft />
          </button>
          <span className="text">{`${
            type === "edit" ? "Update your address" : "Add a new address"
          }`}</span>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-10 mt-10">
          <div className="text grid grid-cols-1 lg:grid-cols-2 gap-5 pb-5 lg:gap-8">
            <div className="text">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        className="h-12"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Street address
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Apartment,Building...(optional)
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text">
              <FormField
                control={form.control}
                name="postalAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute z-10 bg-white ml-4 -mt-1">
                      Postal Address(optional)
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="text lg:col-span-2 py-4 text-center">
            <Button
              type="submit"
              className=" w-full lg:w-2/3 h-12 text-white bg-amber-700"
            >{`${type === "edit" ? "Update" : "Submit"}`}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddressForm;
