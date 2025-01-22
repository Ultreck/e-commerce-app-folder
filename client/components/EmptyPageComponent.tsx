import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const EmptyPageComponent = ({
  caption,
  text,
  className,
}: {
  caption: string;
  text: string;
  className: string;
}) => {
  return (
    <div>
      <div className={cn("text text-center w-full flex justify-center items-center", className)}>
        <div className="text-center w-full">
          <Image
            src={"/emptyPage.gif"}
            alt="empty_page_image"
            width={200}
            height={200}
            layout=""
            className="mx-auto"
          />
          <h1 className="text text-3xl font-semibold text-gray-700">
            {caption}
          </h1>
          <p className="text w-2/3 mx-auto text-lg text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyPageComponent;
