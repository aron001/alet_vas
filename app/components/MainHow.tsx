import HowSteps from "./HowSteps";
import HowDesign from "./HowDesign";

const MainHow: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat flex flex-col-reverse sm:flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-20 p-6 lg:p-8 mt-4 h-[776px]" // Ensure a defined height here
      style={{ backgroundImage: "url('/asset/img/background_howitworks.svg')" }}
    >
      <HowDesign />
      <HowSteps />
    </div>
  );
};

export default MainHow;
