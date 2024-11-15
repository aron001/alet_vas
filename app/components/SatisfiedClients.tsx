// components/SatisfiedClients.tsx
import React from 'react';

const SatisfiedClients = () => {
  return (
    <section className="py-10 bg-gray-50 text-center">
      {/* Text Section */}
      <div className="flex text-center items-center justify-center space-x-1 mb-6">
        <h4 className="text-[var(--Gray-900,#061C3D)] text-center font-[Lexend] text-[20px] font-light leading-[28px] sm:text-[18px] md:text-[19px]">We have</h4>
        <h4 className=" text-green-600  text-center font-[Lexend] text-[20px] font-light leading-[28px] sm:text-[18px] md:text-[19px]">240+</h4>
        <h4 className="text-[var(--Gray-900,#061C3D)] text-center font-[Lexend] text-[20px] font-light leading-[28px] sm:text-[18px] md:text-[19px]">Satisfied Clients</h4>
      </div>

      {/* Logos Section */}
      <div className="flex md:flex-wrap flex-nowrap justify-start md:justify-evenly overflow-x-auto space-x-8 px-4 md:px-0">
        <img
          src="lenevo.png" // Replace with the actual logo path
          alt="Lenovo"
          className="h-10 text-[#B7BAC7] mx-2"
        />
        <img
          src="slack.png" // Replace with the actual logo path
          alt="Slack"
          className="h-10 text-[#B7BAC7] mx-2"
        />
        <img
          src="youtube.png" // Replace with the actual logo path
          alt="YouTube"
          className="h-10 text-[#B7BAC7] mx-2"
        />
        <img
          src="amazon.png" // Replace with the actual logo path
          alt="Amazon"
          className="h-10 text-[#B7BAC7] mx-2"
        />
        <img
          src="google.png" // Replace with the actual logo path
          alt="Google"
          className="h-10 text-[#B7BAC7] mx-2"
        />
        <img
          src="microsoft.png" // Replace with the actual logo path
          alt="Microsoft"
          className="h-10 text-[#B7BAC7] mx-2"
        />
      </div>
    </section>
  );
};

export default SatisfiedClients;
