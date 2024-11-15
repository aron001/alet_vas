"use client";

import React, { useState } from 'react';
import { productDocs, useCaseDocs } from '@/utils/docs';

const ExploreDocument: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<'product' | 'useCase'>('product');

  // Determine which data to use based on the selected document type
  const currentDocs = selectedDoc === 'product' ? productDocs : useCaseDocs;

  return (
    <div className="p-6 space-y-10">
      {/* Main Title at the center */}
      <h1 className="text-2xl font-bold text-center text-gray-800">Explore Documentation by...</h1>

      {/* Toggle Buttons for Document Type */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setSelectedDoc('product')}
          className={`px-4 py-2 font-semibold rounded-lg ${
            selectedDoc === 'product' ? 'text-[#2E9546] border-2 border-[#2E9546]' : 'bg-gray-100 text-[#2E9546]'
          }`}
        >
          Product Docs
        </button>
        <button
          onClick={() => setSelectedDoc('useCase')}
          className={`px-4 py-2 font-semibold rounded-lg ${
            selectedDoc === 'useCase' ? 'text-[#2E9546] border-2 border-[#2E9546] ' : 'bg-gray-100 text-[#2E9546]'
          }`}
        >
          Use Case Docs
        </button>
      </div>

      {/* New Section: Three Centered Underlined Texts */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <span className="font-sans text-[13.78px] font-normal leading-[20px] text-left underline decoration-solid text-[#2E9546]">
          Communication
        </span>
        <span className="font-sans text-[13.78px] font-normal leading-[20px] text-left underline decoration-solid text-[#2E9546]">
          Custom Data
        </span>
        <span className="font-sans text-[13.78px] font-normal leading-[20px] text-left underline decoration-solid text-[#2E9546]">
          Engagement Applications 
        </span>
      </div>

      {/* First Section: Dynamic Content Based on Selected Doc */}
      <div className="space-y-4">
        <h2 className="  font-sans text-[19.84px] font-semibold leading-[28px] tracking-[-0.4px] text-left text-[#121C2D]">Communication</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-rows-3">
          {currentDocs.section1.map((item, index) => (
            <div key={index} className="p-4  rounded-lg ">
              <h3 className="text-center font-sans text-[18px] font-semibold leading-6  underline decoration-solid text-[#2E9546]">{item.title}</h3>
              <p className=" mt-2  font-sans font-plus-jakarta-sans text-[14px] font-normal leading-[24px] text-left   text-[#121C2D]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section: Title on the left with a 3-column grid below */}
      <div className="space-y-4">
        <h2 className="font-sans text-[19.84px] font-semibold leading-[28px] tracking-[-0.4px] text-left text-[#121C2D]"> Custom Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentDocs.section2.map((item, index) => (
            <div key={index} className="p-4  rounded-lg ">
              <h3 className="text-center font-sans text-[18px] font-semibold leading-5  underline decoration-solid text-[#2E9546]">{item.title}</h3>
              <p className="mt-2  font-sans font-plus-jakarta-sans text-[14px] font-normal leading-[24px] text-left   text-[#121C2D]">{item.description}</p>
            </div>
          ))}
          {/* Empty third grid item */}
          <div className="p-4  rounded-lg "></div>
        </div>
      </div>

      {/* Third Section: Title on the left with a 4-column grid below */}
      <div className="space-y-4">
        <h2 className="font-sans text-[19.84px] font-semibold leading-[28px] tracking-[-0.4px] text-left text-[#121C2D]">Engagement Applications </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentDocs.section3.map((item, index) => (
            <div key={index} className="p-4 rounded-lg">
              <h3 className="text-center font-sans text-[18px] font-semibold leading-5  underline decoration-solid text-[#2E9546]">{item.title}</h3>
              <p className="mt-2  font-sans font-plus-jakarta-sans text-[14px] font-normal leading-[24px] text-left   text-[#121C2D]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDocument;
