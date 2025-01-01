import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderType } from "@/types/typeFiles";

const VerticalTextSlider: React.FC<sliderType> = ({ data, delayValue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="overflow-hidden h-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delayValue,
          }}
          className="text-sm font-semibold text-amber-600"
        >
          {data[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VerticalTextSlider;
