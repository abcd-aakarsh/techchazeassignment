const DonateCard = ({ img, bordercolor, btncolor, title, heading }) => {
  return (
    <div
      className="border-6 rounded-[20px] border-donate-border-sub !lg:border-donate-border-sub"
      style={bordercolor}
    >
      <div className="py-[38px] px-2 flex flex-col items-center text-center  justify-center">
        <img src={img} className="w-[90px] h-[90px] mb-5" />
        <p className="font-manuale font-semibold pb-5 text-lg leading-normal">
          {heading}
        </p>
        <p className="font-montserrat font-normal text-base pb-10 leading-snug text-sub-color">
          {title}
        </p>
        <div className="  text-center  ">
          <button
            className="py-[18px] font-montserrat font-medium text-base px-[32px] !bg-circle-color border-r-1.5 border-b-1.5 rounded-[35px] hover:shadow-[6px_6px_5px_0px_#a1a1a1] transition-all duration-300 !border-donate-button-border "
            style={btncolor}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
