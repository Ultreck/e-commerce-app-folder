// import RoughWork from "@/components/RoughWork";
import ParticlesBackground from "@/components/ParticlesBackground";
import Register from "@/components/Register";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-white/50 h-screen">
      {/* <RoughWork /> */}
      <Register />
      <div className="text -z-20">
        <ParticlesBackground id="particles" />
      </div>
    </div>
  );
};

export default LoginPage;
