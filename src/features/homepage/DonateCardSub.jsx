const DonateCardSub = ({ img, title, heading }) => {
  return (
    <div className="border-6 rounded-[20px] transititon-all delay-75  border-button-color lg:hover:border-button-color  lg:border-donate-border-sub">
      <div className="py-[38px] px-2 flex flex-col items-center text-center  justify-center">
        <img src={img} className="w-[90px] h-[90px] mb-5" />
        <p className="font-manuale font-semibold pb-5 text-lg leading-normal">
          {heading}
        </p>
        <p className="font-montserrat font-normal text-base pb-10 leading-snug text-sub-color">
          {title}
        </p>
        <div className="  text-center  ">
          <button className="py-[20px] font-montserrat font-medium text-base px-[30px] bg-circle-color lg:bg-donate-border-sub lg:hover:bg-circle-color lg:hover:border-donate-button-border lg:border-button-sub-color border-r-1.5 border-b-1.5 rounded-[30px] hover:shadow-[6px_6px_5px_0px_#a1a1a1] transition-all duration-300 border-donate-button-border ">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCardSub;
