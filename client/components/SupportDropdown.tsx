// "use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { supportList } from "@/utils/constants";
import Link from "next/link";
import useSearchQuery from "@/hooks/useSearchQuery";
const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { createSearchQueryString} = useSearchQuery();
  return (
    <div>
      {" "}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=""
        >
          <DropdownMenuTrigger className="outline-none">
            <div className="text border-0 flex items-center justify-between gap-2">
              <BiSupport />
              Support 
              <IoChevronDownOutline
                className={`transition-transform duration-500 ${
                  isOpen && "-rotate-180"
                }`}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            {supportList.map((value) => 
            <div key={value.text} className="text flex">
              <DropdownMenuItem className=" w-full">
              <Link className="w-full" href={value.link + '?' + createSearchQueryString('support-type', value.text)}>
              {value.text}
              </Link>
              </DropdownMenuItem>
            </div>
            )}

          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default SupportDropdown;
