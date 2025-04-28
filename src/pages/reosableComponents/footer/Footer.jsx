import React from 'react';
import footerlogo from '../../../assets/img/footerlogo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { FaYoutube } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import footershep from '../../../assets/img/footershep.png';
import {
  footerQuickLinksData,
  footerServiceData,
  footerSupportsData,
} from './footerData';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-[#11121E]">
          <div className="container">
            <div className="flex items-center py-[50px]">
              <div className="flex items-center gap-x-[60px]">
                <h3 className="font-Roboto_Condensed text-[36px] font-bold leading-[40px] text-white">
                  Subscribe
                </h3>
                <p className="font-Inter text-base font-normal leading-[24px] text-primary4 w-[500px]">
                  Proin magna blandit arcu pellent esque sceleri sque sit amet
                  sapien purus nunc cursus antein vehicula facilisis Integer
                  conse
                </p>
              </div>
              <div>
                <form className="flex items-center gap-x-[10px] z-10 relative">
                  <input
                    type="email"
                    className="w-[300px] py-[15px] px-[24px] text-primary4 bg-white rounded-[2px] text-base font-Inter font-normal leading-[24px]"
                    placeholder="Email address"
                  />
                  <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="border border-primary4"></div>
          <div className="container">
            <div className="py-[50px] flex gap-x-[50px]">
              <div className="w-[300px]">
                <div>
                  <img src={footerlogo} alt="img" />
                  <p className="font-Inter text-base font-normal leading-[24px] text-primary4 mt-[30px]">
                    Proin et magna blandit arcu pellentes sceleri sit amet a
                    sapien. Aenean purus nunc cursus in ante in, vehicula
                    facilisis{' '}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_auto_auto_auto] justify-between gap-x-[50px]">
                <div className="w-[263px]">
                  <h3 className="text-white font-Roboto_Condensed font-bold text-[20px] ">
                    Keep in touch
                  </h3>
                  <p className="font-Inter text-[16px] font-normal text-primary4 leading-[24px] mb-[10px]">
                    768 Market Street San Francisco, CA 64015, United States
                  </p>
                  <p className="font-Inter text-[16px] font-normal text-primary4 leading-[24px] mb-[10px]">
                    info@filmina.com
                  </p>
                  <p className="font-Inter text-[16px] font-normal text-primary4 leading-[24px] mb-[10px]">
                    (+021) 345 678 910
                  </p>
                </div>
                <div className="text-white">
                  <h4 className="text-white font-Roboto_Condensed text-[20px] font-bold  mb-[20px]">
                    Services
                  </h4>
                  {footerServiceData.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.path}
                        className="font-Inter text-primary4 font-normal leading-[24px] mb-[100px]"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <h4 className="text-white font-Roboto_Condensed text-[20px] font-bold  mb-[20px]">
                    Quick links
                  </h4>
                  {footerQuickLinksData.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.path}
                        className="font-Inter text-primary4 font-normal leading-[24px]"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="z-50">
                  <h4 className="text-white font-Roboto_Condensed text-[20px] font-bold  mb-[20px]">
                    Supports
                  </h4>
                  {footerSupportsData.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.path}
                        className="font-Inter text-primary4 font-normal leading-[24px] mb-[100px]"
                      >
                        {' '}
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary4"></div>
          <div className="py-[30px]">
            <div className="flex justify-between container">
              <p className="text-primary4 font-Inter text-base font-normal leading-[24px]">
                © 2023 Filmina. Designed by ThemeWarrior
              </p>
              <div className="flex items-center gap-x-[30px]">
                <FaFacebookF className="text-primary4 cursor-pointer" />
                <FaTwitter className="text-primary4 cursor-pointer" />
                <CiInstagram className="text-primary4 cursor-pointer" />
                <FaYoutube className="text-primary4 cursor-pointer" />
                <CiLinkedin className="text-primary4 cursor-pointer" />
              </div>
            </div>
            <div className="relative">
              <div className=" h-[548px] absolute top-[-520px] right-[250px]">
                <img src={footershep} alt="" className="h-full z-0" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
