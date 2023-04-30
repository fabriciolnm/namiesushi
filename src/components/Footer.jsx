import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Contact" className="w-full h-50 bg-gray-900 text-gray-300 py-6 grid justify-items-center text-center" >
      
      <div className="flex  gap-20 lg:gap-60">
      
        <div className="flex flex-col gap-4 ">
          <a href="#Home" className="font-bold uppercase pt-4" >Namie Sushi</a>
          <a href="#Menu">Menu</a>
          <a href="#Location">Location</a>
        </div>

        <div className="py-6">
          <p>Contact Us</p>
          <form className="flex flex-col py-2">
            <input
              className="text-center w-full p-2 mr-4 rounded-md text-gray-800 "
              type="email"
              placeholder="Enter email"
            />
            <button className="p-2  rounded-md hover:text-blue-500">Send</button>
          </form>
        </div>
      </div>

      <div className="w-[90%]  border-b-2 border-gray-600 "></div>
      
      
      <div className="px-2 py-4  text-gray-500">
        <p className="py-4">2023 Namie Sushi, All rights reserved</p>
      </div>
    
    
      <div className="flex gap-8 ">
        <FaFacebook size={30}/>
        <FaInstagram size={30}/>
        <FaTwitter size={30}/>
      </div>
    </div>

  );
};

export default Footer;




