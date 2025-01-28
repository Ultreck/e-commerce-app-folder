'use client'
import Login from "@/components/Login";
import ParticlesBackground from "@/components/ParticlesBackground";
import Register from "@/components/Register";
import useSearchQuery from "@/hooks/useSearchQuery";
import React from "react";

const LoginPage = () => {
  const {searchParams} = useSearchQuery();
  const type = searchParams?.get("registration-type");
  
  return (
    <div className="flex justify-center items-center py-10 bg-white/50 h-screen">
      {type === "login" || type === null? (
        <Login />
      ) : (
        <Register />
      )}
      <div className="text -z-20">
        <ParticlesBackground id="particles" />
      </div>
    </div>
  );
};

export default LoginPage;
