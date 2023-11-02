import React from "react";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = ({ logo }) => {
  return (
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <a href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <img src={logo} alt="logo" className="h-28" />
      </a>
      <div className="flex items-center justify-around pt-5 lg:pt-0 space-x-10">
        <a href="#" className="hover:scale-105">
          <BsWhatsapp size={30} />
        </a>

        <a href="#" className="hover:scale-105">
          <BsInstagram size={30} />
        </a>
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
        Copyright 2021 Bella Onojie
      </div>
    </div>
  );
};

export default Footer;
