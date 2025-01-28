"use client";
import React, { useEffect, useState } from "react";
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
import { itemsDummyData } from "@/utils/helper";
import useProductData from "@/hooks/useProductData";
import RatingComponent from "@/components/RatingComponent";
import { IoMdCheckmark } from "react-icons/io";
import ItemsCard from "@/components/ItemsCard";
import { GrDeliver } from "react-icons/gr";
import { SiSpringsecurity } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { userCartItemsStore } from "@/store/cartItems";
import { toast } from "react-toastify";

interface ItemData {
  id: string;
  description: string;
  noSold: string;
  cPrice: number;
  iPrice: number;
  discount: string;
  delay: number;
  status: string[];
  imgs: { src: string }[];
  compactibleModel: string[];
  review: string;
  rating: number;
  ukSize: string[];
  stdSize: string[];
  color: string[];
}

const ProductDetailsPage = ({ params,}: { params: Promise<{ id: string }>}) => {
  const { id } = React.use(params) as {id: string};
  const [cartIds, setCartIds] = useState<string[]>([])
  const addCartItem = userCartItemsStore((state) => state.addCartItem);
  const [data, setData] = useState<ItemData | undefined>(undefined);
  // const {pathName} = useSe

  useEffect(() => {
    const cartStoredData =  userCartItemsStore.getState().cartCardsDatas;
    setCartIds(cartStoredData);
  }, []);
  
  useEffect(() => {
    const found = itemsDummyData.find((item) => item.id === id);
    setData(found);
  }, [id]);

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
    <div>
      {/* <BreadCrumbComponent items={[{label: "Home", href: "/"}, {label: "Product-details", href: "/cart"},]}/> */}
      <div className="text grid grid-cols-1 md:grid-cols-2 mt-2 w-full">
        <div className="text">
          <div className="text flex pl-5 mt-5">
            <div className="text">
              <ScrollArea
                ref={scrollAreaRef}
                className="w- whitespace-nowrap rounded-md"
              >
                <div className="text">
                  {data?.imgs?.map((url, index) => (
                    <div
                      className={`w-16 h-16 cursor-pointer ${
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
            <Carousel
              plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
              setApi={setApi}
              className="w-4/5 mx-auto "
            >
              <CarouselContent>
                {data?.imgs.map((url, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Image
                        src={url.src}
                        width={100}
                        height={60}
                        layout="responsive"
                        alt="Product image"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="text mt-24 px-16">
            <div className="text flex gap-1">
              <span className="text-black font-semibold">70 review</span>|{" "}
              {data?.rating}
              <RatingComponent rating={data?.rating as number} color="" />
            </div>
            <p className="text mt-1 border-b py-1 mb-5">Item reviews</p>
            <div className="text my-10">
              <div className="text flex items-center gap-2">
                <div className="text-gray-500 rounded-full w-8 h-8 border flex items-center justify-center bg-gray-300">
                  <FaUserAlt />
                </div>
                <div className="text">John Doe</div>
              </div>
              <div className="text my-2">
                <RatingComponent rating={4.5} color="" />
              </div>
              <div className="text mt-1">
                Good item, super deal and smart, absolutely beautiful
              </div>
            </div>
            <div className="text my-10">
              <div className="text flex items-center gap-2">
                <div className="text-gray-500 rounded-full w-8 h-8 border flex items-center justify-center bg-gray-300">
                  <FaUserAlt />
                </div>
                <div className="text">Tsime Obuseng</div>
              </div>
              <div className="text my-2">
                <RatingComponent rating={5} color="" />
              </div>
              <div className="text mt-1">
                Good deal and smart and , pleased with product
              </div>
            </div>
            <div className="text my-10">
              <div className="text flex items-center gap-2">
                <div className="text-gray-500 rounded-full w-8 h-8 border flex items-center justify-center bg-gray-300">
                  <FaUserAlt />
                </div>
                <div className="text">Tsime Obuseng</div>
              </div>
              <div className="text my-2">
                <RatingComponent rating={5} color="" />
              </div>
              <div className="text mt-1">
                I like the item, it is in good condition, good quality.
              </div>
            </div>
            <div className="text my-10">
              <div className="text flex items-center gap-2">
                <div className="text-gray-500 rounded-full w-8 h-8 border flex items-center justify-center bg-gray-300">
                  <FaUserAlt />
                </div>
                <div className="text">Norbert Langefeld</div>
              </div>
              <div className="text my-2">
                <RatingComponent rating={5} color="" />
              </div>
              <div className="text mt-1">
                Item was as described, everything is great.
              </div>
            </div>
            <div className="text my-10">
              <div className="text flex items-center gap-2">
                <div className="text-gray-500 rounded-full w-8 h-8 border flex items-center justify-center bg-gray-300">
                  <FaUserAlt />
                </div>
                <div className="text">ony***7756</div>
              </div>
              <div className="text my-2">
                <RatingComponent rating={5} color="" />
              </div>
              <div className="text mt-1">It is an amazing item</div>
            </div>
            <div className="text">
              {data?.imgs?.map((url, index) => (
                <div className={`my-5`} key={index}>
                  <Image
                    src={url.src}
                    width={100}
                    height={60}
                    layout="responsive"
                    alt="Product image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-gray-500 pl-5 lg:pr-32 pt-5 md:mt-0 text-sm">
          <div className="text w-full sticky top-20">
            <span className="text-sm font-light  break-words">
              {data?.description}
            </span>
            <span className="text-gray-400 my-1 flex items-center justify-between mt-1">
              <span className="text">{data?.noSold}</span>
              <span className="text-black text-xl w-40 font-medium gap-1 flex items-center">
                {data?.rating}
                <RatingComponent rating={data?.rating as number} color="" />
              </span>
            </span>
            <p className="text-white bg-[#23941A] w-24 text-center rounded-tl-lg px-2 py-1 rounded-br-lg">
              New Arrival
            </p>
            <div className="text flex items-center gap-5 mt-3">
              <span className="text">
                <span className="text flex items-baseline text-black font-semibold">
                  <span className="text p-0 mx-0 text-md">₦</span>
                  <p className="text p-0 mx-0 text-2xl ">
                    {(quantity * (data?.cPrice ?? 0)).toLocaleString()}
                  </p>
                </span>
              </span>
              <span className="text">
                <del>
                  <span className="text p-0 mx-0 text-md">₦</span>
                  <span className="text p-0 mx-0 text-md">
                    {data?.iPrice.toLocaleString()}
                  </span>
                </del>
              </span>
              <span className="text-amber-700 border border-amber-700 py-0.5 px-1 rounded">
                -{data?.discount}
              </span>
            </div>
            <div className="text py-2 bg-[#FEEFE1] px-5 flex justify-between my-3">
              <p className="text-sm text-black font-semibold flex gap-2">
                <IoMdCheckmark className="text-[#23941A] text-xl " /> Free
                shipping on all orders
              </p>
              <span className="text-sm">Limited-time offer</span>
            </div>
            {data?.color.length === 0 && (
              <div className="text relative">
                <h1 className="font-semibold mt-1">Color: </h1>
                <div className="text w-full lg:w-1/2 xl:w-4/5 gap-2 grid grid-cols-4">
                  {data?.imgs.map((url, index) => (
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
              {data?.compactibleModel && data.compactibleModel.length > 0 && (
                <>
                  <h1 className="mt-1">Compatible Model: </h1>
                  <ScrollArea className="h-[100px]  ">
                    <div className="text grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 w-full">
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
              {data?.color && data?.color?.length > 0 && (
                <div className="text flex mt-5">
                  <h1 className="text-black font-semibold mr-1">Color: </h1>
                  <div className="text">
                    <span className="text mr-1">{data?.color.join(", ")}</span>
                  </div>
                </div>
              )}
              {data?.ukSize && (data?.ukSize?.length > 0 || data?.stdSize?.length > 0) ? (
                <>
                  <ScrollArea className="h-[100px] mt-2 md:w-[380px]">
                    <Tabs defaultValue={data?.ukSize?.length > 0 && data?.stdSize?.length > 0? "uk" : data?.ukSize?.length === 0 && data?.stdSize?.length > 0? "standard" : "uk"} className="md:w-[400px]">
                      <TabsList>
                        <TabsTrigger value="uk">Uk Size</TabsTrigger>
                        <TabsTrigger value="standard">
                          Standard Size
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="uk" className="">
                        {data?.ukSize.map((size, index) => (
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
                        {data?.stdSize.map((size, index) => (
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
              {data?.id && cartIds.includes(data.id) ? (
                <button
                  disabled
                  className="text rounded-full py-2 bg-gray-400 text-white relative overflow-hidden group w-full"
                >
                  Item is successfully added
                  <p className="text">{data?.discount} OFF</p>
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (data?.id) {
                      addCartItem(data.id);
                    }
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
                    <p className="text">{data?.discount} OFF</p>
                  </span>
                </button>
              )}
            </div>
            <div className="text-gray-400 font-light mt-5">
              <div className="text">
                <p className="text-[#23941A] my-1 flex  items-center gap-1">
                  <GrDeliver className="" /> Free shipping on all orders
                </p>
                <p className="text my-1">
                  Deliver: <span className="text-gray-700">Jan 25-30</span>
                </p>
                <p className="text my-1">
                  Courer company:{" "}
                  <span className="text-gray-700">
                    ABC GOODS STORE, GIGAMIT GOODS, SKYBONNET, GRACIOUS,
                    ACCCCELEROMAX,
                  </span>
                </p>
                <p className="text-[#23941A] mt-2 flex  items-center gap-1">
                  <SiSpringsecurity className="" />
                  {` Shoplicity's commitments`}
                </p>
                <div className="text flex gap-2">
                  <div className="text bg-[#F8F8F8] p-2">
                    <p className="text-[#23941A] my-1 flex  items-center gap-1">
                      {` Security & Privacy`}
                    </p>
                    <ul className="text-xs">
                      <li className="text-gray-700 flex items-center gap-1 my-1">
                        <IoMdCheckmark className="text-[#23941A]" /> Safe
                        payments
                      </li>
                      <li className="text-gray-700 flex items-center gap-1 my-1">
                        <IoMdCheckmark className="text-[#23941A]" /> Secure
                        privacy
                      </li>
                    </ul>
                  </div>
                  <div className="text bg-[#F8F8F8] p-2">
                    <p className="text-[#23941A] my-1 flex  items-center gap-1">
                      {` Delivery guarantee`}
                    </p>{" "}
                    <ul className="text-xs grid grid-cols-2">
                      <li className="text-gray-700 flex items-center gap-1">
                        <IoMdCheckmark className="text-[#23941A]" />{" "}
                        <span className="text p-0 mx-0 text-md">₦</span>1,600
                        credit for delay
                      </li>
                      <li className="text-gray-700 flex items-center gap-1 my-1">
                        <IoMdCheckmark className="text-[#23941A]" />
                        Return if item damaged
                      </li>
                      <li className="text-gray-700 flex items-center gap-1 my-1">
                        <IoMdCheckmark className="text-[#23941A]" />
                        30-day no update refund
                      </li>
                      <li className="text-gray-700 flex items-center gap-1 my-1">
                        <IoMdCheckmark className="text-[#23941A]" />
                        45-day no delivery refund
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text w-full px-10 ">
        <h1 className="text-xl w-full my-3 font-semibold">RELATED PRODUCTS</h1>
        <div className="text grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-5 mx-auto">
          {itemsDummyData.length > 0 &&
            itemsDummyData.map((item, index) => (
              <div className="text hover:z-10" key={index}>
                <ItemsCard data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
