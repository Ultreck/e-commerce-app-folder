import React from "react";
import { Button } from "./ui/button";

const SignInButton = ({text, className}) => {
  return (
    <div>
      <Button
        className={`bg-amber-700 text-white relative overflow-hidden group ${className}`}
      >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r rounded from-amber-900 via-amber-700 to-amber-400 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full  group-hover:opacity-0"></span>
          <span className="relative font-bold">{text}</span>
      </Button>
    </div>
  );
};

export default SignInButton;
