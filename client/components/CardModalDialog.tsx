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
import { IoChevronForward } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillFire } from "react-icons/ai";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import useProductData from "@/hooks/useProductData";
import { userCartItemsStore } from "@/store/cartItems";
import { toast } from "react-toastify";

const CardModalDialog: React.FC<CardDataType> = ({ data, children }) => {
  const addCartItem = userCartItemsStore((state) => state.addCartItem);
  const [cartIds, setcartIds] = useState<string[]>([]);
  const [isIncludes, setisIncludes] = useState<string>("yes");
  useEffect(() => {
    const cartStoredData = userCartItemsStore.getState().cartCardsDatas;
    setcartIds(cartStoredData);
  }, [isIncludes]);

  const {
    scrollAreaRef,
    selectedSize,
    quantity,
    current,
    plugin,
    setApi,
    setQuantity,
    setSelectedSize,
  } = useProductData();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl lg:max-w-5xl w-full max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <div className="text grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="text">
              <Carousel
                plugins={[plugin.current]}
                setApi={setApi}
                className="w-4/5 mx-auto "
              >
                <CarouselContent>
                  {data.imgs.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <Image
                          src={url.src}
                          width={420}
                          height={400}
                          alt="Product image"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="text flex mt-3">
                <ScrollArea
                  ref={scrollAreaRef}
                  className="w- whitespace-nowrap rounded-md"
                >
                  <div className="text flex">
                    {data?.imgs?.map((url, index) => (
                      <div
                        className={`w-16 h-16 ${
                          index === current
                            ? "border-amber-700 border-2 rounded brightness-150 drop-shadow-md"
                            : "contrast-50  brightness-100"
                        }  p-1 overflow-hidden`}
                        key={index}
                      >
                        <Image
                          src={url.src}
                          width={60}
                          height={60}
                          alt="Product image"
                        />
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
            <div className="text-gray-500 p-5 mt-5 md:mt-0 text-sm">
              <div className="text w-full">
                <p className="text-sm tracking-wider break-words">
                  {data.description}
                </p>
                <p className="text-gray-400 my-1">{data.noSold}</p>
                <div className="text flex items-center gap-5">
                  <span className="text">
                    <span className="text flex items-baseline text-black font-semibold">
                      <span className="text p-0 mx-0 text-md">₦</span>
                      <span className="text p-0 mx-0 text-2xl">
                        {(quantity * data.cPrice).toLocaleString()}
                      </span>
                    </span>
                  </span>
                  <span className="text">
                    <del>
                      <span className="text p-0 mx-0 text-md">₦</span>
                      <span className="text p-0 mx-0 text-md">
                        {data.iPrice.toLocaleString()}
                      </span>
                    </del>
                  </span>
                  <span className="text-amber-700 border border-amber-700 py-0.5 px-1 rounded">
                    -{data.discount}
                  </span>
                </div>
                {data.color.length === 0 && (
                  <div className="text relative">
                    <h1 className="font-semibold mt-1">Color: </h1>
                    <div className="text w-full lg:w-1/2 xl:w-4/5 gap-2 grid grid-cols-4">
                      {data.imgs.map((url, index) => (
                        <div key={index}>
                          {index <= 3 && (
                            <div
                              className={`border pb-2 text-sm text-center`}
                              key={index}
                            >
                              <Image
                                src={url.src}
                                width={100}
                                height={100}
                                alt="Product image"
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
                )}
                <div className="text">
                  {data.compactibleModel.length > 0 && (
                    <>
                      <h1 className="mt-1">Compatible Model: </h1>
                      <ScrollArea className="h-[100px]  w-[380px]">
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
                    </>
                  )}
                  {data.color.length > 0 && (
                    <div className="text flex mt-5">
                      <h1 className="text-black font-semibold mr-1">Color: </h1>
                      <div className="text">
                        <span className="text mr-1">
                          {data.color.join(", ")}
                        </span>
                      </div>
                    </div>
                  )}
                  {data.ukSize.length > 0 || data.stdSize.length > 0 ? (
                    <>
                      <ScrollArea className="h-[100px] mt-2 md:w-[380px]">
                        <Tabs
                          defaultValue={
                            data.ukSize.length > 0 && data.stdSize.length > 0
                              ? "uk"
                              : data.ukSize.length === 0 &&
                                data.stdSize.length > 0
                              ? "standard"
                              : "uk"
                          }
                          className="md:w-[400px]"
                        >
                          <TabsList>
                            <TabsTrigger value="uk">Uk Size</TabsTrigger>
                            <TabsTrigger value="standard">
                              Standard Size
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="uk" className="">
                            {data.ukSize.map((size, index) => (
                              <button
                                onClick={() => setSelectedSize(index)}
                                key={size}
                                className={`rounded-lg ${
                                  selectedSize === index &&
                                  "bg-amber-700 text-white"
                                } mr-2 border px-2 py-1`}
                              >
                                {size}
                              </button>
                            ))}
                          </TabsContent>
                          <TabsContent value="standard">
                            {data.stdSize.map((size, index) => (
                              <button
                                onClick={() => setSelectedSize(index)}
                                key={size}
                                className={`rounded-lg ${
                                  selectedSize === index &&
                                  "bg-amber-700 text-white"
                                } mr-2 border px-2 py-1`}
                              >
                                {size}
                              </button>
                            ))}
                          </TabsContent>
                        </Tabs>
                      </ScrollArea>
                    </>
                  ) : (
                    <>
                      <span className="text"></span>
                    </>
                  )}
                </div>
                <div className="text flex items-center my-3 gap-2">
                  <span className="text-center">Qty:</span>
                  <div
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      } else {
                        return;
                      }
                    }}
                    className="text cursor-pointer"
                  >
                    <FaMinus
                      className={`${
                        quantity === 1 && "text-gray-300 cursor-default"
                      }  `}
                    />
                  </div>
                  <span className="text-center flex justify-center items-center w-20 h-8 py-2 px-1 border rounded-full">
                    {quantity}
                  </span>
                  <div
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text cursor-pointer"
                  >
                    <FaPlus />
                  </div>
                </div>
                <div className="text">
                  {cartIds.includes(data.id) ? (
                    <button
                      disabled
                      className="text rounded-full py-2 bg-gray-400 text-white relative overflow-hidden group w-full"
                    >
                      Item is successfully added
                      <p className="text">{data.discount} OFF</p>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        addCartItem(data.id);
                        setisIncludes("no");
                        toast.success(
                          "The item is successfully added, click the cart to view",
                          {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            draggable: true,
                            progress: undefined,
                            style: {
                              backgroundColor: "white",
                              color: "black",
                            },
                          }
                        );
                      }}
                      className="text rounded-full py-2 bg-amber-700 text-white relative overflow-hidden group w-full"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
                      <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
                      <span className="relative leading-3">
                        Add to cart
                        <p className="text">{data.discount} OFF</p>
                      </span>
                    </button>
                  )}
                </div>
                <Link
                  className="hover:tracking-[0.2em] tracking-[0.1em] text-[#23941A] font-semibold"
                  href={`/product-details/${data.id}`}
                >
                  <button className="flex items-center  mt-3">
                    See full details{" "}
                    <IoChevronForward className="hover:animate-pulse transform duration-500 hover:translate-x-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CardModalDialog;
