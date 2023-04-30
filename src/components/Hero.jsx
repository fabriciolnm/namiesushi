import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="/img/sushi4.jpg"
        alt=""
      />
      <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-6">
          <p>AUTHENTIC JAPANESE RESTAURANT</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Sushi, Sashimi and more.
          </h1>
          <p className=" max-w-[600px] drop-shadow-2xl py-4 text-xl">
            Our dishes adhere to the Japanese virtue of serving natural and
            healthy meals. We use only fresh, premium ingredients for a taste
            that will have you coming back for more.
          </p>
          <button className="bg-white text-black p-2 rounded">CHECK MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
