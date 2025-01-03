import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { tabType } from "@/types/typeFiles";

const TabComponent: React.FC<tabType> = ({ data }) => {
  console.log(data);

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <Tabs key={index} aria-label="Tabs variants" variant={"bordered"}>
          <Tab key={item} title={item} />
        </Tabs>
      ))}
    </div>
  );
};

export default TabComponent;
