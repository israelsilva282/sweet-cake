import React from "react";



const Hero = ({ appType, tagLine, description, mainActionText, extraActionText }) => {
  return (
    <div id="product">
      <div style={{ textShadow: '0px 1px 1px gray' }} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 pt-10 pb-20 bg-hero bg-cover">
        <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
        </div>
        <div>
          <p className="p-2 text-4xl font-bold text-center rounded-lg w-11/12 mx-auto lg:mx-auto lg:w-4/6 lg:text-5xl text-gray-50">
            {tagLine}
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <button
            className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all duration-300 bg-pink-500 rounded-full shadow-2xl lg:ml-5 hover:bg-pink-600 focus:outline-none lg:font-medium "
          >
            {mainActionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
