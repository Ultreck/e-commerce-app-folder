"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CardDataType } from "@/types/typeFiles";
import { IoChevronForward, IoEye } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AiFillFire } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CardModalDialog: React.FC<CardDataType> = ({ data, children }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 0);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="min-w-[70%]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <div className="text flex w-full">
            <div className="text w-2/5">
              <Carousel setApi={setApi} className="w-full max-w-lg">
                <CarouselContent>
                  {data.imgs.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <img
                          src={url.src}
                          className="w-full  h-96"
                          alt="Product Image"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="text flex mt-3">
                {data.imgs.map((url, index) => (
                  <div
                    className={`w-16 h-16 ${
                      index === current && "border-amber-700 border-2 rounded"
                    }  p-1`}
                    key={index}
                  >
                    <img
                      src={url.src}
                      className="w-full h-full"
                      alt="Product Image"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-gray-500 p-3 w-3/5 text-sm">
              <p className="text-sm break-words">{data.description}</p>
              <p className="text-gray-400">{data.noSold}</p>
              <div className="text flex items-center gap-5">
                <p className="text">
                  <p className="text flex items-baseline text-black font-semibold">
                    <span className="text p-0 mx-0 text-md">₦</span>
                    <span className="text p-0 mx-0 text-2xl">
                      {(quantity * data.cPrice).toLocaleString()}
                    </span>
                  </p>
                </p>
                <p className="text">
                  <del>
                    <span className="text p-0 mx-0 text-md">₦</span>
                    <span className="text p-0 mx-0 text-md">{data.iPrice}</span>
                  </del>
                </p>
                <p className="text-amber-700 border border-amber-700 py-0.5 px-1 rounded">
                  {data.discount}
                </p>
              </div>
              <div className="text">
                <h1 className="font-semibold mt-1">Color: </h1>
                <div className="text gap-2 grid grid-cols-4">
                  {data.imgs.map((url, index) => (
                    <div key={index}>
                      {index <= 3 && (
                        <div
                          className={`border pb-2 text-sm text-center`}
                          key={index}
                        >
                          <img
                            src={url.src}
                            className="w-full h-auto"
                            alt="Product Image"
                          />
                          <span className="flex text-xs mt-1">
                            <AiFillFire className="text-amber-700" /> Mixed
                            Color {index + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text">
                <h1 className="mt-1">Compatible Model: </h1>
                <ScrollArea className="h-[160px]  w-[380px]">
                  <div className="text grid gap-3 grid-cols-2 p-2 w-full">
                    {data?.compactibleModel?.map((text, index) => (
                      <div
                        className={`rounded-full text-center py-1 border`}
                        key={index}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
                  <div className="text flex items-center my-2 gap-2">
                    <span className="text-center">
                      Qty: 
                    </span>
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity((prev) => prev - 1);
                        } else {
                          return;
                        }
                      }}
                      className="text"
                    >
                      <FaMinus
                        className={`${
                          quantity === 1 && "text-gray-300 cursor-default"
                        }  `}
                      />
                    </button>
                    <span className="text-center flex justify-center items-center w-20 h-8 py-2 px-1 border rounded-full">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="text"
                    >
                      <FaPlus />
                    </button>
                  </div>
              <div className="text">
                <button className="text rounded-full py-2 bg-amber-700 text-white relative overflow-hidden group w-full">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
                  <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
                  <span className="relative leading-3">
                    Add to cart
                    <p className="text">{data.discount.split("-")[1]} OFF</p>
                  </span>
                </button>
              </div>
              <button className="text flex items-center mt-3">
                See full details <IoChevronForward />
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CardModalDialog;
