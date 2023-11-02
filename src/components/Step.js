import React from 'react';

const Step = ({ title, heading, description, img, alternate }) => {
  const row = "lg:items-center lg:flex lg:flex-row lg:justify-end mb-20";
  const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-between mb-20";

  return (
    <div className={alternate ? row : rowReverse}>
      <div className="lg:w-2/6 lg:flex lg:flex-col lg:justify-center lg:items-start mb-10 lg:mb-0">
        <p className="text-2xl font-semibold text-center text-orange-400 lg:text-lg lg:font-bold lg:text-left">{title}</p>
        <p className="text-4xl font-semibold leading-relaxed text-center text-blue-800 lg:text-3xl lg:font-bold lg:text-left">{heading}</p>
        <p className="text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:text-lg lg:text-left">{description}</p>
      </div>
      <img className=" h-96 mx-auto rounded-xl" src={img} alt="Bolo de cenoura" />

    </div>
  )
}

export default Step
