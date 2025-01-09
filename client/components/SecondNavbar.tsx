"use client";
import React, { useEffect, useState } from "react";
import DropdownElement from "./DropdownElement";
import SupportDropdown from "./SupportDropdown";
import { IoLocationOutline } from "react-icons/io5";
import { userLocationStore } from "@/store/userLocationState";
import AccountModalDialog from "./AccountModalDialog";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button} from "@nextui-org/react";
const SecondNavbar = () => {
  const [isScrolled, setIsScrolled] = useState<number>(0);
  const { clientLocation } = userLocationStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled > 60 && "sticky top-0"
      } border-b z-20 bg-white px-16 flex py-4 sticky top-0  justify-between items-center`}
    >
      <div className="text flex gap-4">
        <DropdownElement />
        <span className="text">5 Star rated</span>
        <span className="text">New Arrivals</span>
      </div>
      <div className="text">
      <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </div>
      <div className="text flex items-center gap-5">
        <SupportDropdown />
        <div className="text flex">
          <IoLocationOutline className="text-xl" />
          <span className="text">{clientLocation?.city}</span>
        </div>
        <div className="text">
            <AccountModalDialog/>
        </div>
        {/* <span className="text">N</span> */}
      </div>
    </div>
  );
};

export default SecondNavbar;
