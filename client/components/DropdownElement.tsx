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
import useSearchQuery from "@/hooks/useSearchQuery";

const DropdownElement = () => {
  const { 
    createSearchQueryString,
    pathName,
    searchParams,
    router,
  } = useSearchQuery();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [category, setCategory] = useState<string>(searchParams?.get('category'));
const category = searchParams?.get('category');

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=""
      >
        <DropdownMenuTrigger className="outline-none">
          <div className="text-sm text-gray-500 border-0 flex items-center justify-center">
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
              <ScrollArea className="h-96 rounded-md p-2 pb-8">
                {categories.map((value) => (
                  <div
                    className="text-gray-500"
                    onMouseEnter={() => {
                      router.push(pathName + '?' + createSearchQueryString('category', value))
                    }}
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
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default DropdownElement;
