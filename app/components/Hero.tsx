import { btnHoverActive } from "@/utils/constant";

interface HeroProps {
  redirecTo: string;
}

const Hero: React.FC<HeroProps> = ({ redirecTo }) => {
  return (
    <div className="w-full mb-4 md:mb-[17px] flex flex-col items-center justify-around px-4 md:px-0">
      <h1 className="w-full md:w-[52.94%] text-center overflow-visible whitespace-normal font-bold text-[36px] md:text-[72px] leading-[44px] md:leading-[86.4px] tracking-[-0.03em] text-[#262C41]">
        All your business expenses in one place.
      </h1>
      <p className="w-full md:w-[80%] text-center text-[16px] md:text-[24px] mb-4 md:mb-[17px] font-normal leading-[24px] md:leading-[36px] tracking-[-0.02em] text-[#262C41]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus
        consequuntur, quibusdam mollitia quae, voluptatum iste nam repellendus
        non minus ullam tempore sequi ipsa deleniti assumenda voluptas quis amet
        iure.
      </p>
      <button
        className={`flex items-center justify-center p-4 md:p-6 rounded-[12px] w-full md:w-[421px] h-[50px] md:h-[66px] text-[18px] md:text-[23px] bg-gradient-to-l from-[#6FBE59] to-[#37AE37] text-white hover:from-[#5EAA4E] hover:to-[#2F992F] 
                    active:from-[#4A8D43] active:to-[#267826] 
                    transition duration-200 ease-in-out transform hover:scale-105 active:scale-95`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;
