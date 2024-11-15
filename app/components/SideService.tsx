import Service from "./Service";
interface SideServiceProps {
  mainTitle: string;
}

const SideService: React.FC<SideServiceProps> = ({ mainTitle }) => {
  return (
    <div className="flex flex-col gap-[44px]">
      <p className="text-[44px] font-extrabold leading-[61.6px] text-left text-[#332C5C]">
        {mainTitle}
      </p>
      <Service
        title="Notification"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem, ullam molestias corrupti aliquam pariatur illum delectus"
        iconUrl="asset/icon/notification.svg"
      ></Service>

      <Service
        title="Interaction"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem, ullam molestias corrupti aliquam pariatur illum delectus"
        iconUrl="asset/icon/interaction.svg"
      ></Service>

      <Service
        title="Authentication Security"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem, ullam molestias corrupti aliquam pariatur illum delectus"
        iconUrl="asset/icon/auth.svg"
      ></Service>
    </div>
  );
};

export default SideService;
