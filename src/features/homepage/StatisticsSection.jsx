import React from "react";
import npo from "../../assets/npo.png";
import handshake from "../../assets/handshake.png";
import donate from "../../assets/Donate.png";
import welfare from "../../assets/Welfare.png";

const StatisticsSection = () => {
  return (
    <>
      <div className="p-5 relative flex items-center max-w-[1178px] mx-auto justify-center min-h-[600px]">
        <div className="bg-button-color w-full p-8 z-30  md:p-16 rounded-[40px] ">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 justify-center p-2">
            <div className=" flex items-center justify-center flex-col text-center">
              <img src={npo} className="w-[70px] h-[70px]" />
              <div className="font-manuale flex items-center justify-center flex-col text-center  ">
                <p className="text-circle-color text-[40px] lg:text-[70px] leading-tight font-semibold">
                  563
                </p>
                <p className="text-white font-montserrat font-medium text-base lg:text-lg leading-tight">
                  Project Completed
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center flex-col text-center">
              <img src={handshake} className="w-[70px] h-[70px]" />
              <div className="font-manuale flex items-center justify-center flex-col text-center  ">
                <p className="text-circle-color text-[40px] lg:text-[70px] leading-tight font-semibold">
                  425
                </p>
                <p className="text-white font-montserrat font-medium text-base lg:text-lg leading-tight">
                  Trusted Partners
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center flex-col text-center">
              <img src={donate} className="w-[70px] h-[70px]" />
              <div className="font-manuale flex items-center justify-center flex-col text-center  ">
                <p className="text-circle-color text-[40px] lg:text-[70px] leading-tight font-semibold">
                  978
                </p>
                <p className="text-white font-montserrat font-medium text-base lg:text-lg leading-tight">
                  Money Donated
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center pb-6 md:pb-0 flex-col text-center">
              <img src={welfare} className="w-[70px] h-[70px]" />
              <div className="font-manuale flex items-center justify-center flex-col text-center  ">
                <p className="text-circle-color text-[40px] lg:text-[70px] leading-tight font-semibold">
                  32
                </p>
                <p className="text-white font-montserrat font-medium text-base lg:text-lg leading-tight">
                  Active Volunteers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white absolute bottom-0 sm:bottom-[80px] md:bottom-[150px] lg:bottom-[115px] z-20 h-[330px] sm:h-[210px] md:h-[180px] w-full"></div>
    </>
  );
};

export default StatisticsSection;
