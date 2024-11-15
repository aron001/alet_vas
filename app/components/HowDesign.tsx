const HowDesign: React.FC = () => {
  return (
    <div className="relative lg:w-2/5 w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center sm:block hidden"
        style={{
          backgroundImage: "url('/asset/img/logo_sekeleton.svg')",
          transform: "scale(1.5) translateX(10%)",
          backgroundPosition: "center",
        }}
      />

      <img
        src="asset/img/clickup-integrations.svg"
        alt=""
        className="absolute w-full h-full object-fill z-10 sm:block hidden"
      />
    </div>
  );
};

export default HowDesign;
