"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LiaEditSolid } from "react-icons/lia";
import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaCamera } from "react-icons/fa";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "User name must be at least 2 characters" }),
  file: z.string().optional(),
});

interface userType {
  name: string;
  image: string;
  email: string;
}

interface formOutPutType {
  fullName: string;
}

const EditProfileModal = ({ user }: { user: userType }) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      file: "",
    },
  });

  useEffect(() => {
    form.setValue("fullName", user?.name);
  }, [user?.name, form]);

  const onSubmit = (data: formOutPutType) => {
    const formData = new FormData();
    formData.append("name", data.fullName);
    if (fileRef?.current?.files[0]) {
      formData.append("file", fileRef?.current?.files[0]);
    }

    formData.forEach((value, key) => {
      console.log(`${key}:${value}`);
    });
  };

  const initials = user?.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  const handleProfilePicUpdate = () => {
    fileRef?.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="ml-2 text-gray-500">
          {" "}
          <LiaEditSolid className="text-xl" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="text">
          <div className="text mb-10 relative">
            <Avatar className="border-2 w-16 h-16 border-red-500">
              <AvatarImage src={user?.image as string} alt="@user" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <button
              onClick={handleProfilePicUpdate}
              className="text absolute bottom-0 left-11 rounded-full flex justify-center items-center bg-gray-200 w-10 h-10 p-2"
            >
              <FaCamera />
            </button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-14 text-lg"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text text-end">
                <Button
                  type="submit"
                  className="bg-amber-700 text-white rounded-full"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </Form>
          <Input type="file" className="hidden" ref={fileRef} />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
