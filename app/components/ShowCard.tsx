interface ShowCardProps {
  iconUrl: string;
  numbers: number;
  tagline: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ iconUrl, numbers, tagline }) => {
  return (
    <div className="flex w-[312px] h-[56px] gap-[20px] rounded-tl-[12px] rounded-md overflow-hidden shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex-shrink-0">
        <img src={iconUrl} alt="Icon representing the stat" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[20px] font-medium leading-[32px] tracking-[-0.012em] text-[#061C3D]">
          {numbers}
        </span>
        <span className="text-[10px] font-normal leading-[14px] tracking-[0.01em] text-[#42526B]">
          {tagline}
        </span>
      </div>
    </div>
  );
};

export default ShowCard;
