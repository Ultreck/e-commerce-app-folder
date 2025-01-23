"use client"
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>
const SliderComponent = ({className, ...props }: SliderProps) => {
    const [isScrolled, setIsScrolled] = useState<number>(0);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY);
        console.log(window.scrollY);
        console.log(window.scrollX);
        
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <Slider
      defaultValue={[isScrolled]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}

export default SliderComponent