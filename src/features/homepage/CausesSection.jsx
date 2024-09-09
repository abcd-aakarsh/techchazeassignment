import React from "react";
import CausesCard from "./CausesCard";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
const CausesSection = () => {
  return (
    <div className="py-[20px] px-[20px] lg:p-[110px] lg:pt-0 w-full bg-hero-color">
      <div className="text-center">
        <h3 className="font-manuale font-semibold pb-5 text-[40px] lg:text-[50px] leading-tight ">
          Urgent Causes
        </h3>
        <p className="font-montserrat font-medium pb-5 lg:pb-12 text-xl leading-normal">
          Supporting urgent causes, changing lives
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row ">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center  gap-6 mb-4 lg:gap-12">
          <CausesCard
            img={p1}
            title={"Morocco strikes with earthquake"}
            para={
              "Current situation for Morocco have gone horrible due to the strike of Earthquake"
            }
            amount={"$ 4,400"}
            bar={{ backgroundColor: "#FF1414", width: "144px" }}
          />
          <CausesCard
            img={p2}
            title={"Harmful Disease in Air"}
            para={
              "World have been infected with deadly life taking virus ..... "
            }
            amount={"$ 7,888"}
            bar={{ backgroundColor: "#FB983D", width: "206px" }}
          />
          <CausesCard
            img={p3}
            title={"Patna suffer with heavy Flood"}
            para={
              "People in patna have suffered a very heavy flood in past few days"
            }
            amount={"$ 11,000"}
            bar={{ backgroundColor: "#0E9602", width: "276px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CausesSection;
