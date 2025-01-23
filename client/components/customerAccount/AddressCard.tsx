"use client";
import React from "react";
import useSearchQuery from "@/hooks/useSearchQuery";
import { userProfile } from "@/utils/constants";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";


const AddressCard = () => {
  const { createSearchQueryString, pathName, router } = useSearchQuery();
  return (
    <div>
      <div className="text">
        <div className="text border-b p-6 flex justify-between items-center">
          <p className="text">Addresses({userProfile.length})</p>
          <p className="text">
            <button
              onClick={() => {
                router.push(
                  pathName + "?" + createSearchQueryString("type", "create")
                );
              }}
              className="text-white font-semibold bg-[#23941A] px-3 py-0.5 rounded"
            >
              Create address
            </button>
          </p>
        </div>
        <div className="text p-10 gap-5 grid grid-cols-1 lg:grid-cols-2">
          {userProfile.map((user, index) => (
            <div
              key={index}
              className={`text border pt-3 ${user.default && "bg-amber-500/5"}`}
            >
              <p className="text-lg px-3 font-semibold">
                {user.firstName + " " + user.lastName}
              </p>
              <p className="text-sm my-1 text-gray-400 px-3 font-extralight">
                {user.streetAddress + ", " + user.apartment}
              </p>
              <p className="text-sm my-1 text-gray-400 px-3 font-extralight">
                {user.phoneNumber}
              </p>
              <p className="text-sm my-1 text-gray-400 px-3 font-extralight">
                {user.city}
              </p>
              <p className="text-sm my-1 text-gray-400 px-3 font-extralight">
                {user.state}
              </p>
              <p className="text-sm my-1 text-gray-400 px-3 pb-1 font-extralight">
                {user.country}
              </p>
              <div className="text flex bg-white items-center justify-between border p-1">
                <div
                  className={`px-2 rounded ${
                    user.default
                      ? "text-gray-500 bg-gray-100 cursor-default"
                      : "text-amber-700 bg-amber-100 hover:text-white hover:bg-amber-700 cursor-pointer"
                  }`}
                >
                  {user.default ? "Default" : "Set as default"}
                </div>
                <div className="text flex items-center gap-3">
                  <button
                    onClick={() => {
                      router.push(
                        pathName + "?" + createSearchQueryString("type", "edit") + '&' + createSearchQueryString('data', JSON.stringify(user))
                      );
                    }}
                    className="text bg-amber-100 p-1.5 rounded-full hover:bg-amber-500"
                  >
                    <GoPencil
                      size={17}
                      className="text-amber-700 hover:text-white"
                    />
                  </button>
                  <button className="text bg-red-100 hover:text-white p-1.5 rounded-full hover:bg-red-500">
                    <FiTrash className="text-amber-700 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
