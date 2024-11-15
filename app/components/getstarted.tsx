// components/GreenBackgroundSection.tsx
import React from 'react';

const Getstarted = () => {
  return (
    <div className="bg-white">
      {/* Bottom Text and Button Section */}
      <div className="relative text-center z-10 -mt-14 sm:-mt-28 px-4 sm:px-0">
        
        {/* Bold Text */}
        <h2 className="text-[var(--Secondary-900,#040815)] font-[PlusJakartaSans] font-extrabold tracking-[-1.44px] text-3xl leading-[1.2] sm:text-[36px] md:text-[40px] lg:text-[48px]">
          Easy, Simple,
        </h2>
        <h2 className="text-[var(--Secondary-900,#040815)] font-[PlusJakartaSans] font-extrabold tracking-[-1.44px] text-3xl leading-[1.2] sm:text-[36px] md:text-[40px] lg:text-[48px]">
          Affordable
        </h2>

        {/* Thin Text Description */}
        <p className="text-[var(--Secondary-400,var(--Color,#596780))] font-[PlusJakartaSans] font-normal leading-6 sm:leading-[30px] tracking-[-0.4px] text-base sm:text-[18px] md:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Proin ut lacus vitae lectus tincidunt laoreet.
        </p>

      </div>
    </div>
  );
};

export default Getstarted;
