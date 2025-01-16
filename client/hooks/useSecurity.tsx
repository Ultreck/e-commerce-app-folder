"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isOpenStore } from "@/store/isOpen";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
const useSecurity = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const {setIsOpenState} = isOpenStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  useEffect(() => {
    if (form.watch("pin").length === 6) {
      setIsOpen(false);
      setOpen(true);
      setIsOpenState(true);
    }
  }, [form, setIsOpen, setOpen, value, setIsOpenState]);

  
  return {
    isOpen,
    setIsOpen,
    form,
    setValue,
    value,
    open,
    setOpen,
  };
};

export default useSecurity;
