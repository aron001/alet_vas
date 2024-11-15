const MiddleCall: React.FC = () => {
  return (
    <div className="relative flex justify-center  mt-0 mb-[30]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full hidden sm:block"
        style={{
          backgroundImage: "url('/asset/img/green_cloud_background.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>

      <div className="flex flex-col items-center justify-center w-[80%] mt-[18px]">
        <div className="w-full sm:w-[50%] sm:h-[70%] mt-[10px] sm:mt-[80px]">
          <img
            alt="dashboard screenshot"
            src="/asset/img/main_dashboard_screenshot.svg"
            className="w-full" // Full width on small screens
          />
        </div>

        <div className="w-[80%]">
          <img alt="the flow lines" src="/asset/img/flow_lines.svg" />
        </div>

        <div>
          <p className="w-[323px] text-center overflow-visible whitespace-normal break-words font-bold text-[48px] leading-[50.4px] text-[#262C41]">
            Easy, Simple, Affordable
          </p>
        </div>
        <p className="text-[20px] mt-[8px] font-normal leading-[30px] tracking-[-0.02em] text-center text-[#596780]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
          accusamus. Eius eveniet officiis quaerat facilis ratione laborum
          omnis. Quis sunt itaque obcaecati eius inventore. Eum maxime sit vero
          rem nostrum.
        </p>
      </div>
    </div>
  );
};

export default MiddleCall;
