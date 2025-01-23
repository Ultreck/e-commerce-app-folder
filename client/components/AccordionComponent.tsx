"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MessageObject {
  type: string; 
  text: string[] | string; 
};
const RenderContainer = ({content}: {content: {type: string, text: string | string[]}}) => {
  console.log(content);
  
if(content.type === 'p'){
    return <p className="text leading-7">{content.text}</p>
};
if(content.type === 'list' && content.text.length > 0){
    return <ul className="text">
        {content.text.map((list: string, index: number) => 
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
  content: MessageObject;
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
