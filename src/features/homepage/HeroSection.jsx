import React from "react";
import hero_img from "../../assets/hero_img.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:px-24 md:items-center">
      <div className="py-4 relative max-w-[421px] lg:max-w-[540px] mx-auto">
        <div className="w-[120px] h-[120px] bg-circle-color absolute z-20 -left-[34px]  rounded-full"></div>
        <div className="w-[138px] h-[138px] bg-button-color absolute rounded-3xl z-0 top-[244px] right-0 lg:-right-2 lg:top-[365px] "></div>
        <div className="px-5 pt-[60px] relative z-10">
          <img
            src={hero_img}
            className="w-[350px] lg:w-[490px] lg:h-[394px] h-[290px] z-10 relative"
          />
        </div>
      </div>
      <div className="font-manuale max-w-[346px] md:max-w-[500px] mx-auto py-5 text-text-color">
        <h2 className="text-center text-[40px] lg:text-[70px] leading-tight pb-5 font-semibold">
          Empower Hope, Transform Lives
        </h2>
        <p className="text-center font-montserrat text-xl lg:text-left leading-normal font-medium">
          The essence of charity by conveying the idea of uplifting individuals
          and communities through the power of hope and positive change.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
