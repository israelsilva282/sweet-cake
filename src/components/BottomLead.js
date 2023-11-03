import React, { useState } from "react";
import Modal from "./Modal";

const BottomLead = ({ actionText, description, mainActionText, secondaryActionText }) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full" id="formaPagamento">
        <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
        <p className="pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium">{description}</p>
        <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1">
          <a
            href="https://wa.me/5584997075439?text=Bom%20dia,%20gostaria%20de%20encomendar%20uma%20fatia%20de%20bolo%20de%20cenoura.%0ATroco%20para:%20R$%20XX" target="_blank"
            className="pt-3 pb-3 pl-8 pr-8 mt-3 text-2xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none " rel="noreferrer"
          >
            {mainActionText}
          </a>
          <button
            className="pt-3 pb-3 pl-8 pr-8 mt-8 text-2xl font-semibold text-center text-white transition-all shadow-2xl lg:ml-5 lg:mt-0 rounded-xl hover:text-orange-500 hover:bg-gray-50 focus:outline-none ring-2 ring-gray-300 " onClick={openModal}
          >
            {secondaryActionText}
          </button>
        </div>
      </div>

      <Modal show={modalIsOpen} onClose={closeModal}>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="text-center w-11/12 max-w-xs border border-black">QR CODE</div>
          <div className="flex flex-col items-center">
            <p>Chave pix:</p>
            <span>(84) 9 9707-5439</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BottomLead;
