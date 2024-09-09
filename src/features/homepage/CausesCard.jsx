import React from "react";

const CausesCard = ({ img, title, para, amount, bar }) => {
  return (
    <div className="max-w-[350px] flex flex-col items-center lg:scale-75 xl:scale-100 rounded-[10px]">
      <img src={img} alt="cause" className="w-full h-[278px]" />
      <div className="bg-white p-5 rounded-b-[10px] shadow-md">
        <div className="pb-4 px-2">
          <h4 className="font-manuale font-semibold text-lg leading-snug pb-2">
            {title}
          </h4>
          <p>{para}</p>
        </div>
        <div className="flex gap-2 pb-2 items-center">
          <p className="font-manuale font-bold text-xl leading-tight">
            {amount}
          </p>
          <p className="text-sub-color text-sm">Donated till Now</p>
        </div>
        <div className="w-full bg-bar-color rounded-[70px] h-[15px] pr-1">
          <div className=" h-[15px] rounded-[70px]" style={bar}></div>
        </div>
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style="width: 45%"
            ></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CausesCard;
