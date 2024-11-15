// components/CenteredImageWithWingShadow.tsx
import React from 'react';

const MiddleShadow = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] sm:min-h-screen bg-white relative overflow-hidden py-4 sm:py-0">
      
      {/* Wing Shadow Image - hidden on small screens */}
      <img
        src="shadow.png" // Replace with your shadow image path
        alt="Wing Shadow"
        className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%]"
        aria-hidden="true"
      />

      {/* Centered Image */}
      <div className="relative z-10 px-4 sm:px-0">
        <img
          src="dashboard.png" // Replace with your main image path
          alt="Centered Display"
          className="w-full max-w-xs sm:max-w-2xl object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MiddleShadow;
