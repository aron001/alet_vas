// components/ContactUsComponent.tsx
import React from 'react';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center sm:flex-row sm:items-start justify-center sm:justify-between p-10 bg-gray-50 gap-8">
      {/* Left Section: Contact Us and Description */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto sm:ml-16">
        <h2 className="text-[var(--Gray-900,#061C3D)] font-[PlusJakartaSans] text-[36px] sm:text-[40px] md:text-[48px] font-semibold leading-[60px] tracking-[-0.84px] text-center sm:text-left">
          Contact Us
          <span className="mr-2">👋</span> {/* Wave icon */}
        </h2>
        <p className="text-[#061C3D] font-plus-jakarta-sans text-lg font-light leading-7 text-center sm:text-left mt-3">
          If you have any questions or inquiries, feel free to reach out to us.
        </p>
          <p className="text-[#061C3D] font-plus-jakarta-sans text-lg font-light leading-7 text-center sm:text-left">
          Feel free to reach out to us.
        </p>
      </div>

      {/* Email Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto mt-8 sm:mt-0 sm:flex-row sm:justify-start">
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="EnvelopeOpen.png" // Replace with your image path
            alt="email"
            className="h-18 w-18 mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <span className="text-[var(--Gray-500,#838E9E)] font-[Lexend] text-[14px] font-normal tracking-[0.14px] uppercase">Email Address:</span>
            <p className="text-[var(--Gray-900,#061C3D)] font-[Plus Jakarta Sans] text-[24px] font-normal leading-[32px] sm:text-[20px] md:text-[22px]">
              info@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto mt-8 sm:mt-0 sm:flex-row sm:justify-start">
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="PhoneCall.png" // Replace with your image path
            alt="phone call"
            className="h-18 w-18 mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <span className="text-[var(--Gray-500,#838E9E)] font-[Lexend] text-[14px] font-normal tracking-[0.14px] uppercase">Phone Number:</span>
            <p className="text-[var(--Gray-900,#061C3D)] font-[Plus Jakarta Sans] text-[24px] font-normal leading-[32px] sm:text-[20px] md:text-[22px]">
              +1 (234) 567-8900
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
