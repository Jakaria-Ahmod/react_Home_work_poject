import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { PiLinkedinLogo } from 'react-icons/pi';
import filmLogo from '../../../assets/img/filmLogo.png';
import { MdPhone } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';
import { menuItem } from './navData';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className="bg-primary1 pb-[100px]">
      <div className="container">
        <header>
          <div className="flex items-center justify-between flex-col gap-y-[16px] md:gap-y-0 md:flex-row  gap-x-4 xl:gap-x-0 py-[30px]">
            <div className="flex items-center gap-x-8">
              <FaFacebookF color="white" size={20} className="cursor-pointer" />
              <IoLogoTwitter
                color="white"
                size={20}
                className="cursor-pointer"
              />
              <PiInstagramLogoLight
                color="white"
                size={20}
                className="cursor-pointer"
              />
              <AiOutlineYoutube
                color="white"
                size={20}
                className="cursor-pointer"
              />
              <PiLinkedinLogo
                color="white"
                size={20}
                className="cursor-pointer"
              />
            </div>
            <div>
              <img src={filmLogo} alt="logo" />
            </div>
            <div className="flex items-center gap-x-[30px]">
              <div className="flex items-center gap-x-3">
                <MdPhone size={20} color="white" className="cursor-pointer" />
                <span className="font-Roboto_Condensed text-[14px] font-normal uppercase text-white">
                  (+021) 345 678 910
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <MdOutlineMailOutline
                  size={25}
                  color="white"
                  className="cursor-pointer"
                />
                <span className="font-Roboto_Condensed text-[14px] font-normal uppercase text-white">
                  info@filmina.com
                </span>
              </div>
            </div>
          </div>
        </header>
        <nav className="border-t border-[#989AA9] flex items-center justify-center">
          <ul className="flex flex-col md:flex-row gap-y-2.5 md:gap-y-0 items-center gap-x-[60px] mt-[20px] relative">
            {menuItem.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  className="font-Roboto_Condensed text-[14px] font-normal uppercase text-white hover:text-primary2 transition duration-200"
                  to={item.path}
                >
                  {item.name}
                </Link>
                {item.name === 'pages' && (
                  <div className="absolute top-[16px] w-[132px]  left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 z-10 min-h-[230px] px-[20px]">
                    {item.drop.map((item, index) => (
                      <Link
                        to={item.path}
                        className="block px-[4] text-[#11121E] font-Roboto_Condensed text-[14px] font-bold uppercase mb-[10px] mt-[5px] hover:text-primary2 transition duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
