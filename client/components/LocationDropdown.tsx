"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { countriesWithFlagURLs, supportList } from "@/utils/constants";
import { userLocationStore } from "@/store/userLocationState";
import { locationType } from "@/types/locationType";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoRadioButtonOn } from "react-icons/io5";
import { Separator } from "./ui/separator";


const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<locationType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setClientLocation } = userLocationStore();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((response) => response.json())
      .then((data) => {
        const found = countriesWithFlagURLs.find(
          (country) => country.name === data?.country
        );
        const allData = {
          ...data,
          flag: found?.flag,
        };
        setUserLocation(allData);
        setIsLoading(false);
        setClientLocation(allData);
      });
  }, [setClientLocation]);
  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=""
        >
          <DropdownMenuTrigger className="outline-none">
            <div className="text bg-amber-500/20 hover:bg-golden hover:text-white cursor-pointer rounded h-10 w-16 flex items-center justify-between p-1">
              <div className="text h-8 w-8 rounded-full">
                <img
                  src={userLocation?.flag}
                  alt=""
                  className="text h-full w-full rounded-full"
                />
              </div>
              <span className="text-sm font-semibold">{userLocation?.country_code}</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72">
            <DropdownMenuItem className="text-gray-700 w-full">
              <div className="text grid ">
                <span className="text py-1">Language</span>
                <p className="text py-1 flex items-center">
                  <span className="text"><IoRadioButtonOn /></span>
                  <span className="text-lg mx-2">English</span>
                </p>
              </div>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem className="text-gray-700 w-full">
              <div className="text grid">
                <span className="text py-1">Currency</span>
                <p className="text py-1 flex items-center">
                  <span className="text"><IoRadioButtonOn /></span>
                  <span className="text mx-1">NGN:</span>
                  <span className="text"><TbCurrencyNaira className="text-2xl" /></span>
                </p>
              </div>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem className="text-gray-700 w-full">
                <div className="text flex py-1">
                <div className="text h-6 w-6 rounded-full">
                <img
                  src={userLocation?.flag}
                  alt=""
                  className="text h-full w-full rounded-full"
                />
              </div>
              You are shopping on Shoplicity {userLocation?.country}
                </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default LocationDropdown;
