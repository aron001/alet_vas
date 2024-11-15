import React from "react";

const Features = () => {
  return (
    <section className="bg-[#37AE37] text-white py-16">
      {/* Title and Description */}
      <div className="text-center mb-10">
        <h2 className="text-center text-white font-[PlusJakartaSans] text-[36px] font-extrabold leading-[48px] tracking-[-0.72px]">
          Why Companies Large and small trust Alet SMS
        </h2>
        <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mx-auto w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-3">
        {/* First Row */}
        <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            Reaches 70 Million Users
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            Can charge 1,000,000 subscribers with in 35 minutes..
          </p>
        </div>

        <div className="p-6 text-center border-b md:border-b-0 border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            The Most Personal Channel
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            Using our platform you can schedule charging shamelessly as per your
            need .
          </p>
        </div>

        <div className="p-6 text-center border-b md:border-b-0 md:border-l border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            No Internet Required
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            Telegram bot will help you to monitor your product easily, our
            platform sends important events through telegram bot .
          </p>
        </div>

        {/* Second Row with a horizontal line above it */}
        <div className="p-6 text-center md:border-t md:border-r border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            High Response rate
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            On our platform integration is fun, you can use your mobile phone to
            test and integrate with SDP, Telebirr, even your platfrom. .
          </p>
        </div>

        <div className="p-6 text-center md:border-t border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            100 % Computable with Phone 
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            You will receive an sms when ever charging completed. .
          </p>
        </div>

        <div className="p-6 text-center md:border-t md:border-l border-gray-200">
          <h3 className="text-center text-white font-[PlusJakartaSans] text-[28px] font-extrabold leading-normal tracking-[-0.64px]">
            Cheap
          </h3>
          <p className="text-center text-white font-[Inter] text-[18px] font-normal leading-[28px] mt-2">
            Lorem ipsum dolor sit amet consectetur. Praesent ac massa morbi
            viverra at laoreet urna elementum. .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
