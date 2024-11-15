import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  iconUrl: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, iconUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-[490px] items-start">
      <Image
        alt="service icon"
        src={iconUrl}
        width={40}
        height={40}
        className="sm:w-[50px] sm:h-[50px] mt-1 sm:mt-0"
      />
      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="text-[20px] sm:text-[24px] font-semibold leading-[28px] sm:leading-[36px] tracking-[-0.03em] text-left text-[#040815]">
          {title}
        </span>
        <p className="text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.02em] text-left text-[#596780]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
