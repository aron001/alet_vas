import React, { useState } from "react";
import { faqData } from "@/utils/constant";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 bg-white shadow-lg rounded-md hover:shadow-md transition-shadow duration-200">
      <div className="bg-white w-full max-w-xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 ${
              openIndex === index
                ? "bg-gradient-to-r from-[#6FBE59] to-[#37AE37] rounded-md text-white"
                : ""
            }`}
          >
            {/* Question and toggle icon */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <p className="text-lg font-medium">{item.question}</p>
              <img
                src={
                  openIndex === index
                    ? "asset/icon/x.svg"
                    : "asset/icon/plus.svg"
                }
                alt={openIndex === index ? "Close" : "Open"}
                className="w-4 h-4"
              />
            </div>

            {/* Answer section (visible only when open) */}
            {openIndex === index && (
              <div className="p-4 bg-[#F6F7F9]">
                <p className="font-lexend text-[#061C3D] text-sm font-light leading-6 text-left underline-from-font decoration-none">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
