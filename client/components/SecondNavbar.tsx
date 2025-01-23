"use client";
import React, { useEffect, useState } from "react";
import DropdownElement from "./DropdownElement";
import SupportDropdown from "./SupportDropdown";
import { IoLocationOutline } from "react-icons/io5";
import { userLocationStore } from "@/store/userLocationState";
import AccountModalDialog from "./customerAccount/AccountModalDialog";
interface ClientLocation {
  city: string;
  // Add other properties if needed
}

const SecondNavbar = () => {
  const [isScrolled, setIsScrolled] = useState<number>(0);
  const { clientLocation } = userLocationStore() as { clientLocation: ClientLocation };

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
      <div className="text"></div>
      <div className="text flex items-center gap-5">
        <SupportDropdown />
        <div className="text flex">
          <IoLocationOutline className="text-xl" />
          <span className="text">{clientLocation?.city}</span>
        </div>
        <div className="text">
          <AccountModalDialog />
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
