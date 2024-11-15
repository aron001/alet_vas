"use client";
import Accordion from "./Accordion";

const Faq: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 justify-center p-4">
      <div className="flex flex-col lg:w-1/2 mt-6 lg:mt-10 gap-6 lg:gap-10">
        <h1 className="text-3xl lg:text-[56px] font-semibold leading-tight lg:leading-[60px] tracking-[-0.015em] text-left text-[#061C3D] decoration-skip-ink-none">
          Frequently Asked Questions
        </h1>

        <p className="text-base lg:text-[18px] font-light leading-[24px] lg:leading-[26px] text-left text-[#42526B] decoration-skip-ink-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam
          maiores dicta reprehenderit, neque earum ipsum dignissimos vel minima,
          pariatur inventore totam? Quaerat quas qui aliquid ad molestiae porro
          autem?
        </p>

        <div className="flex justify-center lg:justify-start space-x-4">
          <img
            src="asset/img/helpc.svg"
            alt="Help icon"
            className="w-32 h-16 lg:w-40 lg:h-20"
          />
          <img
            src="asset/img/priv.svg"
            alt="Privacy icon"
            className="w-32 h-16 lg:w-40 lg:h-20"
          />
        </div>

        <img
          src="asset/img/faqimg.svg"
          alt="FAQ illustration"
          className="mt-4 lg:mt-8 w-full max-w-xs lg:max-w-none self-center lg:self-start"
        />
      </div>

      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-start">
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
