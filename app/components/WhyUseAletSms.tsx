"use client";

import React, { useState } from "react";
import { choices, images, details, Detail } from "@/utils/choice";

const WhyUseAletSms: React.FC = () => {
  // Initialize the state with the first choice as default
  const [selectedChoice, setSelectedChoice] = useState<string>(choices[0]);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {/* Left Side: Choice List */}
      <div className="space-y-3">
        <ul className="space-y-1">
          {choices.map((choice, index) => {
            if (!choice) {
              console.error(`Choice at index ${index} is missing.`);
              return null;
            }
            return (
              <li
                key={index}
                onClick={() => handleChoiceClick(choice)}
                className={`p-2 border rounded-lg cursor-pointer ${
                  selectedChoice === choice
                    ? "bg-[#F0F8FF]"
                    : "hover:bg-gray-200"
                }`}
              >
                {/* Icon and choice text */}
                <span className="inline-flex items-center font-plus-jakarta-sans text-[16px] font-semibold leading-[24px] text-left text-[#4E4B66] custom-text">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.5-5.5 1.4-1.4L10 12.2l4.1-4.1 1.4 1.4L10 15z" />
                  </svg>
                  {choice}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Middle Column: Dynamic Text Content */}
      <div className="border p-4 rounded-lg bg-white shadow-md">
        {selectedChoice ? (
          details[selectedChoice]?.map((item: Detail, index: number) => {
            if (!item.header || !item.description) {
              console.error(
                `Missing header or description for item at index ${index} in ${selectedChoice}`
              );
              return null;
            }
            return (
              <div key={index} className="mb-4">
                <h5 className="font-plus-jakarta-sans text-[16px] font-bold leading-[28px] tracking-[-0.36px] text-left text-[#202223] custom-text">
                  {item.header}
                </h5>
                <p className="font-plus-jakarta-sans text-[14px] font-normal leading-[20px] text-left text-[#6E7191] custom-text mt-2">
                  {item.description}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-gray-600">
            Select an item from the left to display details here.
          </p>
        )}
      </div>

      {/* Right Column: Dynamic Image Content */}
      <div className="border p-4 rounded-lg bg-white shadow-md flex items-center justify-center">
        {selectedChoice && images[selectedChoice] ? (
          <img
            src={images[selectedChoice]}
            alt={`${selectedChoice} Image`}
            className="max-w-full h-auto"
          />
        ) : (
          <p className="text-sm text-gray-600">No image selected.</p>
        )}
      </div>
    </div>
  );
};

export default WhyUseAletSms;
