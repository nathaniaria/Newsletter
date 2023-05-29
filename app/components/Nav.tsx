import React from "react";
import logo from "../components/assets/logo.png";
("");
import Image from "next/image";

function Nav() {
  return (
    <nav className="z-1000 bg-[#03040b] px-3">
      <div className="flex justify-between items-center">
        <div className="z-10 pt-1 font-bold text-center text-transparent duration-1000 bg-white cursor-default
          whitespace-nowrap bg-clip-text
          bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          <Image 
          src={logo} 
          alt="" 
          width={70} 
          height={70} 
           />
        </div>
        <div className="z-10 text-xl font-bold text-center text-transparent duration-1000 bg-white cursor-pointer
          sm:text-xl md:text-2xl whitespace-nowrap bg-clip-text hover:text-white hover:underline
          bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          <link rel="stylesheet" href="" />
          Home
        </div>
      </div>
    </nav>
  );
}

export default Nav;
