"use client";
import ShowCard from "./ShowCard";
import { testmonyList } from "@/utils/constant";
import React, { useState } from "react";

const TestmonialCard: React.FC = () => {
  const [slideNo, setSlideNo] = useState(0);

  const nextSlide = () => {
    setSlideNo((prevSlide) => (prevSlide + 1) % testmonyList.length);
  };

  const prevSlide = () => {
    setSlideNo((prevSlide) =>
      prevSlide === 0 ? testmonyList.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mt-20">
        <h4 className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-left bg-gradient-to-r from-[#6FBE59] to-[#37AE37] bg-clip-text text-transparent">
          Testimonials
        </h4>

        <h3 className="mb-[10px] text-[40px] font-bold leading-[60px] tracking-[-0.03em] text-center text-[#040815]">
          Testimonials
        </h3>

        <p className="w-4/5 text-[20px] font-normal leading-[30px] tracking-[-0.02em] text-center text-[#596780]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus at
          eum esse cupiditate similique ullam sunt corporis, temporibus illum
          doloribus earum, eos dicta eligendi ea? Possimus numquam perferendis
          maiores ipsum.
        </p>
      </div>
      <div className="p-6 flex flex-col-reverse sm:flex-row gap-8 justify-center">
        <div className="flex flex-col">
          <div className="hidden sm:block text-left max-w-md">
            <p className="text-[56px] font-semibold text-[#061C3D] leading-[60px] tracking-[-0.015em] text-left decoration-skip-ink-0 underline-offset-2">
              What our client says about our services.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 items-center">
            <img
              src="asset/img/left_arrow.svg"
              alt="Previous"
              className="w-12 h-12 cursor-pointer"
              onClick={prevSlide}
            />
            <img
              src="asset/img/right_arrow.svg"
              alt="Next"
              className="w-12 h-12 cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>

        <div className="p-3 bg-slate-200 rounded-md">
          <div className="bg-white shadow-md rounded-lg flex flex-col p-6 w-full sm:w-[689px]">
            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: testmonyList[slideNo].star }).map(
                (_, index) => (
                  <img
                    src="asset/img/star.svg"
                    alt="Star"
                    key={index}
                    className="w-6 h-6"
                  />
                )
              )}
            </div>

            {/* Testimonial Note */}
            <p className="text-lg text-gray-700 mb-6">
              {testmonyList[slideNo].note}
            </p>

            {/* Client Info */}
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="flex">
                  <img
                    src={testmonyList[slideNo].imgUrl}
                    alt="Client Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-lg text-[#061C3D]">
                      {testmonyList[slideNo].name}
                    </p>
                    <h5 className="text-sm text-gray-500">
                      {testmonyList[slideNo].title}
                    </h5>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: testmonyList.length }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className={`h-3 rounded-full ${
                          index === slideNo
                            ? "bg-[#2E9546] w-6"
                            : "bg-gray-300 w-3"
                        }`}
                      ></div>
                    )
                  )}
                </div>
              </div>
              <div>
                <img src="asset/img/quote.svg" alt="Quote Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[20px] my-10 justify-center sm:justify-start">
        <ShowCard
          iconUrl="asset/icon/trophy.svg"
          tagline="PRODUCT TYPE"
          numbers={6}
        />
        <ShowCard
          iconUrl="asset/icon/users.svg"
          tagline="TOTAL BASE"
          numbers={2000000}
        />
        <ShowCard
          iconUrl="asset/icon/smile.svg"
          tagline="HAPPY PARTNERS"
          numbers={32}
        />
        <ShowCard
          iconUrl="asset/icon/wallet.svg"
          tagline="PRODUCTS"
          numbers={41}
        />
      </div>
    </div>
  );
};

export default TestmonialCard;
