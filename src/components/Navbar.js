import React, { useRef, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = ({ logo }) => {

  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);

  return (
    <>
      <div className="flex items-center justify-between h-28">
        <a href="/" className="pl-7 lg:ml-10">
          <img src={logo} alt="logo" className="h-24" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden justify-around w-2/5 mr-12 lg:visible sm:invisible md:flex">
          <a onClick={() => setOpenNav(false)} href="/" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Início</a>
          <a onClick={() => setOpenNav(false)} href="#product" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Produtos</a>
          <a onClick={() => setOpenNav(false)} href="#contact" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Contatos</a>
        </div>

        <div className="flex items-center md:hidden absolute z-50 right-2 ">
          <button
            onClick={() =>
              setOpenNav(
                !openNav
              )
            }
            className=" p-2 rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out"
          >
            <BiMenu
              size={25}
              className={
                openNav ? "hidden" : ""
              }
            />

            <BiX
              size={25}
              className={
                !openNav ? "hidden" : ""
              }
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        ref={wrapperRef}
        className={
          (openNav ? "h-[30%]" : "h-[0%]") +
          " md:hidden transition-all duration-300 overflow-hidden absolute bg-white z-10 w-full mt-28"
        }
      >
        <div className="flex flex-col items-center justify-around h-full pt-5">
          <a onClick={() => setOpenNav(false)} href="/" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Início</a>
          <a onClick={() => setOpenNav(false)} href="#product" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Produtos</a>
          <a onClick={() => setOpenNav(false)} href="#contact" className="text-lg font-semibold text-blue-800 transition-all hover:text-pink-500">Contatos</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
