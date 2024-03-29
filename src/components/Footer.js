import React from "react";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = ({ logo }) => {
  return (
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <a href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <img src={logo} alt="logo" className="w-28 max-w-[90%]" />
      </a>
      <div className="flex items-center justify-around pt-5 lg:pt-0 space-x-10">
        <a href="https://wa.me/5584997075439" target="_blank" className="hover:scale-105" rel="noreferrer">
          <BsWhatsapp size={30} />
        </a>

        <a href="https://www.instagram.com/___israelll/" target="_blank" className="hover:scale-105" rel="noreferrer">
          <BsInstagram size={30} />
        </a>
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
        Copyright 2023 Sweet Cake
      </div>
    </div>
  );
};

export default Footer;
