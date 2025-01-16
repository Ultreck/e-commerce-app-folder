// import { CardDataType } from "@/types/typeFiles";
import { create } from "zustand";

interface isOpenType {
    isOpenState: boolean;
    setIsOpenState: (isOpen: boolean) => void;
}

export const isOpenStore = create<isOpenType>()((set) =>({
   isOpenState: false,
    setIsOpenState: (isOpen) => set((state) => ({...state,isOpen })),
}))