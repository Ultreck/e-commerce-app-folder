"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

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
const addressFromSchema = z.object({
    firstName: z.string().min(2, {message: 'First Name is required'}),
    lastName: z.string().min(2, {message: 'Last Name is required'}),
    phoneNumber: z.string().min(2, {message: 'Phone Number'}),
    streetAddress: z.string().min(5, {message: 'Address 1 is required'}),
    apartment: z.string().optional(),
    city: z.string().min(3, {message: 'City is required'}),
    state: z.string().min(2, {message: 'State is required'}),
    country: z.string().min(2, {message: 'country is required'}),
    postalAddress: z.string().min(2, {message: 'State is required'}),
})
const AddressCard = () => {
    const form = useForm<z.infer<typeof addressFromSchema>>({
        resolver: zodResolver(addressFromSchema),
        defaultValues:{
            country: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            streetAddress: '',
            apartment: '',
            city: '',
            state: '',
            postalAddress: '',
        }
    });

    const onSubmit = (data: addressFormType) => {
        console.log(data)
    };

  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5 px-10">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street address</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apartment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street address</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Address</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text col-span-2 text-center">
        <Button type="submit" className=" w-2/3 h-12 text-white bg-amber-700">Submit</Button>

        </div>
      </form>
    </Form>
    </div>
  )
}

export default AddressCard