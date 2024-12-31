"use client";

import React, { useState } from "react";
import ItemsCard from "./ItemsCard";
import { itemsDummyData } from "@/utils/helper";
import HomeProgressBar from "./HomeProgressBar";

const Dashboard = () => {

  return (
    <>
      {/* <VerticalTextSlider /> */}
      <div className="text z-20">
      <HomeProgressBar/>
      </div>
      <div  className="text px-10 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {itemsDummyData.length > 0 &&
          itemsDummyData.map((item, index) => (
            <div className="text hover:z-10" key={index}>
              <ItemsCard data={item} index={index}/>
            </div>
          ))}
      </div>
      <p className="text-amber-800">
.
      </p>
    </>
  );
};

export default Dashboard;
