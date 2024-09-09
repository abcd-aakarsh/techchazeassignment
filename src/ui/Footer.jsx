import logo from "../assets/footer.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import youtube from "../assets/Youtube.png";

const Footer = () => {
  return (
    <div className="relative h-[640px] lg:h-[450px] bg-white text-white">
      <div className="h-1/5 lg:h-1/3 w-full pt-5 px-5"></div>
      <div className="h-4/5 w-full lg:h-2/3  bg-hero-color px-8 pb-5"></div>

      <div className="absolute top-5 w-11/12 left-1/2 transform -translate-x-1/2 bg-button-color lg:px-20 lg:pt-[44px] pb-[12px] lg:pb-12px z-10 rounded-[20px] shadow-lg">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:items-center lg:grid-rows-1 gap-5 pt-[41px] px-[11px]">
          <div className="pl-[24px]">
            <img src={logo} className="w-[113px] h-[113px]" alt="Footer Logo" />
          </div>

          <div className="pt-2">
            <div className="mb-[21px]">
              <a
                className="font-manuale font-bold text-base leading-normal"
                href="#"
              >
                Help
              </a>
            </div>
            <ul className="font-montserrat font-normal text-sm leading-loose space-y-2 mt-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="pl-[29px] pt-2">
            <div className="mb-[21px]">
              <a
                className="font-manuale font-bold text-base leading-normal"
                href="#"
              >
                Company
              </a>
            </div>
            <ul className="font-montserrat font-normal text-sm leading-loose space-y-2 mt-2">
              <li>About</li>
              <li>Features</li>
              <li>Work</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="pt-2">
            <div className="mb-[21px]">
              <a
                className="font-manuale font-bold text-base leading-normal"
                href="#"
              >
                Resources
              </a>
            </div>
            <ul className="font-montserrat font-normal text-sm leading-loose space-y-2 mt-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 lg:pt-0 lg:items-start">
            <div className="grid lg:grid-cols-2  grid-cols-4  gap-2 py-8 lg:pr-0 lg:pt-0 lg:gap-0  px-[33px]">
              <div className="flex justify-end">
                <img
                  src={facebook}
                  className="w-[50px] h-[50px] rounded-full hover:opacity-75"
                  alt="Facebook"
                />
              </div>
              <div className="flex justify-start">
                <img
                  src={instagram}
                  className="w-[50px] h-[50px] hover:opacity-75"
                  alt="Instagram"
                />
              </div>
              <div className="flex justify-end">
                <img
                  src={twitter}
                  className="w-[50px] h-[50px] hover:opacity-75"
                  alt="Twitter"
                />
              </div>
              <div className="flex justify-start">
                <img
                  src={youtube}
                  className="w-[50px] h-[50px] hover:opacity-75"
                  alt="Youtube"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-[60px]">
          <hr className="px-[70px]  border-1  bg-white mb-3"></hr>
          <p className="font-poppins font-normal text-sm text-center">
            © Copyright 2023-24, All Rights Reserved by Charity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
