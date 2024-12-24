"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { ScrollArea } from "./ui/scroll-area";
import { categories } from "@/utils/constants";
import { IoChevronForward } from "react-icons/io5";
// import ModalDialogElement from "./ModalDialogElement";

const DropdownElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>(categories[0]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=""
      >
        <DropdownMenuTrigger className="outline-none">
          <div className="text border-0 flex items-center justify-center">
            Categories{" "}
            <IoChevronDownOutline
              className={`transition-transform duration-500 ${
                isOpen && "-rotate-180"
              }`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[900px] h-96">
          <div className="text flex">
            <div className="text w-1/3">
              <ScrollArea className="h-96 rounded-md p-2">
                {categories.map((value) => (
                  <div
                    className="text"
                    onMouseEnter={() => setCategory(value)}
                    key={value}
                  >
                    <DropdownMenuItem className="flex justify-between pr-3">
                      {value} <IoChevronForward />
                    </DropdownMenuItem>
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div className="text border-l w-3/5">
              <ScrollArea className="h-96 rounded-md p-2">
                <span className="text-3xl text-golden">{category}</span>
              </ScrollArea>
            </div>
          </div>

          {/* <ModalDialogElement/> */}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default DropdownElement;
