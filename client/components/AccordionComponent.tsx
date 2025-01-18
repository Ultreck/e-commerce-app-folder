"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RenderContainer = ({content}: {content: any}) => {
if(content.type === 'p'){
    return <p className="text leading-7">{content.text}</p>
};
if(content.type === 'list'){
    return <ul className="text">
        {content.text.map((list: any, index: number) => 
        <li className={`my-2 leading-6`} key={index}>{list}</li>
        
        )}
    </ul>
};
if(content.type === 'link'){};
}
const AccordionComponent = ({
  title,
  content,
}: {
  title: string;
  content: any;
}) => {
    
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value={title}>
          <AccordionTrigger className="font-normal hover:font-semibold py-6 text-base hover:bg-gray-100 hover:no-underline px-4">
            {title}
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <RenderContainer content={content}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
