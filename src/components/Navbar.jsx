import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
    
  };

  return (
    <div id='Home' className="absolute w-full h-50 flex p-4 items-center z-20">
      <img className="w-20" src="/static/images/mascot.png " alt="" />
      <h1 className="text-red-600 font-bold text-4xl ">Namie <span className="text-white">Sushi</span> </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer absolute top-4 right-4 visible md:invisible"
        size={40}
        
      />
      <div >
        <ul className="flex text-white cursor-pointer absolute top-4 right-4 invisible md:visible p-6 text-2xl font-bold gap-6">
          <a href='#'>Home</a>
          <a href='#Menu'>Menu</a>
          <a href='#Location'>Location</a>
          <a href='#Contact'>Contact</a>
        </ul>
      </div>
      <div
        className={
          nav
            ? "fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 ease-in duration-300  px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <a href='#' className="font-bold text-3xl p-8">Home</a>
          <a href='#Menu' className="font-bold text-3xl p-8">Menu</a>
          <li className="font-bold text-3xl p-8">Location</li>
          <li className="font-bold text-3xl p-8">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
