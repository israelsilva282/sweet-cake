import React from "react";



const Hero = ({appType, tagLine, description, mainActionText, extraActionText}) => {
  return (
    <div id="product">
      <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
        <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
        </div>
        <div>
          <p className="p-2 text-4xl font-bold text-center text-pink-500 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>
        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <button
            className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-pink-600 rounded-full shadow-2xl lg:ml-5 hover:bg-pink-800 focus:outline-none lg:font-medium "
          >
            {mainActionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
