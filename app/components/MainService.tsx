import SideService from "./SideService";

const MainService: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 p-4 sm:gap-[100px] min-h-screen">
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:items-center">
        <div className="flex-1 mb-4 sm:mb-0 sm:ml-[9.51%] p-2 sm:p-0">
          <SideService mainTitle="Software As A Service For Your VAS" />
        </div>
        <div className="flex-1 flex justify-center sm:justify-start p-2 sm:p-0">
          <img
            src="asset/img/vas_service_screenshot.svg"
            alt="VAS Service Screenshot"
            className="w-full sm:w-auto max-w-[100%] rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:gap-4 sm:items-center">
        <div className="w-full sm:w-[700px] sm:ml-[5.7%] mb-4 sm:mb-0 p-2 sm:p-0">
          <img
            src="asset/img/alet_sms_service_screenshot.svg"
            alt="Alert SMS Service Screenshot"
            className="w-full max-w-[100%] rounded-lg"
          />
        </div>
        <div className="ml-0 sm:ml-[5.7%] p-2 sm:p-0">
          <SideService mainTitle="Software AS A Service For Your AlertSMS" />
        </div>
      </div>
    </div>
  );
};

export default MainService;
