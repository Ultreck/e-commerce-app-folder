import { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";



const useProductData = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>();
  const scrollAreaRef = useRef(null);
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 0);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      scrollToActiveThumbnail(current);
    });
  }, [api, current]);



  const scrollToActiveThumbnail = (index: number) => {
    if (scrollAreaRef.current) {
      const container: HTMLElement = scrollAreaRef.current;
      const activeThumbnail: HTMLElement | null = container.children[0]
        ?.children[index] as HTMLElement | null;

      if (activeThumbnail) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeThumbnail.getBoundingClientRect();
        console.log(scrollAreaRef.current);
        console.log(activeRect);

        if (
          activeRect.left < containerRect.left ||
          activeRect.right > containerRect.right
        ) {
          container.scrollTo({
            left:
              activeThumbnail.offsetLeft -
              container.offsetWidth / 2 +
              activeThumbnail.offsetWidth / 2,
            behavior: "smooth",
          });
        } else {
          container.scrollTo({
            left:
              activeThumbnail.offsetLeft -
              container.offsetWidth / 2 +
              activeThumbnail.offsetWidth / 2,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return {
    scrollAreaRef,
    selectedSize,
    quantity,
    current,
    plugin,
    api,
    setApi,
    setCurrent,
    setQuantity,
    setSelectedSize,
    scrollToActiveThumbnail,
  };
};

export default useProductData;
