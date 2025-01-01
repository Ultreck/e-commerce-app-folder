"use client";

import React, { useState } from "react";
import ItemsCard from "./ItemsCard";
import { itemsDummyData } from "@/utils/helper";
import HomeProgressBar from "./HomeProgressBar";
import { CardDataType } from "@/types/typeFiles";
import HeroSectionCarousel from "./HeroSectionCarousel";
import { heroCarousel } from "@/utils/constants";
import FooterContactBanner from "./FooterContactBanner";

const Dashboard: React.FC<CardDataType> = () => {

  return (
    <>
      {/* <VerticalTextSlider /> */}
      <div className="text z-20">
      <HomeProgressBar/>
      </div>
      <div className="text px-16 mx-auto">
        <HeroSectionCarousel data={heroCarousel}/>
      </div>
      <div  className="text px-10 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-5 mx-auto">
        {itemsDummyData.length > 0 &&
          itemsDummyData.map((item, index) => (
            <div className="text hover:z-10" key={index}>
              <ItemsCard data={item} />
            </div>
          ))}
      </div>
      <div className="bg-amber-800 text-white p-6">
        <FooterContactBanner/>
      </div>
      <div className="text"></div>
    </>
  );
};

export default Dashboard;
