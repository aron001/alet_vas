// components/GreenBackgroundSection.tsx
import React from 'react';

const Cover = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#37AE37] p-10 text-white">
      {/* Left Section: Text and Button */}
      
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
      <div>
      <h2 className="text-[var(--White,#FFF)] font-[PlusJakartaSans] text-[20px] font-semibold leading-[30px] tracking-[-0.4px]">
      Download now!
        </h2>
       
      </div>
        <h2 className="text-[var(--Primary-0,#FFF)] font-[PlusJakartaSans] text-[40px] font-bold leading-[60px] tracking-[-1.2px]">
          All Your Businees
        </h2>
        <h2 className="text-[var(--Primary-0,#FFF)] font-[PlusJakartaSans] text-[40px] font-bold leading-[60px] tracking-[-1.2px]">
          expenses in one place
        </h2>
        <p className="text-[var(--White,#FFF)] font-[PlusJakartaSans] text-[20px] font-normal leading-[30px] tracking-[-0.4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacus vitae lectus tincidunt laoreet.
        </p>
        <button className="bg-white py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 mt-8 text-[var(--Dark-Green,#2E9546)] text-center font-[PlusJakartaSans] text-[16px] font-semibold leading-[24px] tracking-[-0.32px]">
          Get a Free Demo
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className=" w-full h-3/4 absolute top-0 left-0 right-0"></div> {/* Green background visible at top */}
        <img
          src="cover.png" // Replace with your image path
          alt="Right Section Image"
          className="w-full max-w-md rounded-lg shadow-lg object-cover relative z-10"
        />
      </div>
    </section>
  );
};

export default Cover;
