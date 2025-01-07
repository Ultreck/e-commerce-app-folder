"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"

type carouselArr = {
    data: string[];
}
const HeroSectionCarousel: React.FC<carouselArr> = ({data}) => {
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    
  return (
    <Carousel 
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
     className="w-full mt-3 mx-auto ">
    <CarouselContent>
      {data.map((url, index) => (
        <CarouselItem key={index}>
          <div className="">
            <Image
              src={url}
              width={100}
              height={20}
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
  )
}

export default HeroSectionCarousel