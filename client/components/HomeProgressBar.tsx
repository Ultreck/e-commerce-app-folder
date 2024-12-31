import React from 'react'
import { motion, useSpring, useScroll } from "motion/react";
const HomeProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  return (
    <>
        <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
        //   borderRadius: 50,
          backgroundColor: "#92400e",
          zIndex: "inherit"
        }}
      />  
    </>
  )
}

export default HomeProgressBar