import React, { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { PiInstagramLogoLight, PiLinkedinLogo } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { MdPhone, MdOutlineMailOutline } from 'react-icons/md';
import { menuItem } from './navData';
import filmLogo from '../../../assets/img/filmLogo.png';
import { Link } from 'react-router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 lg:pb-[82px] transition-all duration-300 ${
          isScrolled
            ? 'bg-primary1 bg-opacity-90 backdrop-blur-md shadow-md'
            : 'bg-primary1'
        }`}
      >
        <div className="container px-4 md:px-0">
          {/* Top Bar */}
          <div className="hidden md:block">
            <header className="flex flex-col md:flex-row items-center justify-between gap-y-6 py-6">
              {/* Social Icons */}
              <div className="flex items-center gap-x-4 order-2 md:order-1">
                <FaFacebookF
                  color="white"
                  size={18}
                  className="cursor-pointer"
                />
                <IoLogoTwitter
                  color="white"
                  size={18}
                  className="cursor-pointer"
                />
                <PiInstagramLogoLight
                  color="white"
                  size={18}
                  className="cursor-pointer"
                />
                <AiOutlineYoutube
                  color="white"
                  size={18}
                  className="cursor-pointer"
                />
                <PiLinkedinLogo
                  color="white"
                  size={18}
                  className="cursor-pointer"
                />
              </div>

              {/* Logo */}
              <div className="order-1 md:order-2">
                <img
                  src={filmLogo}
                  alt="Logo"
                  className="w-[120px] md:w-auto"
                />
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-4 items-center order-3">
                <div className="flex items-center gap-x-2">
                  <MdPhone color="white" size={20} />
                  <span className="text-white text-sm font-Roboto_Condensed uppercase">
                    (+021) 345 678 910
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <MdOutlineMailOutline color="white" size={20} />
                  <span className="text-white text-sm font-Roboto_Condensed uppercase">
                    info@filmina.com
                  </span>
                </div>
              </div>
            </header>
          </div>
          {/* Navigation Menu */}
          <nav className="relative">
            {/* Toggle Button for Mobile */}
            <div className="flex justify-end md:hidden mb-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl"
              >
                {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>

            {/* Menu Items */}
            <ul
              className={`flex flex-col md:flex-row md:justify-center items-start md:items-center gap-y-4 md:gap-y-0 gap-x-10 md:gap-x-[60px] transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex border-t md:border-t-0 border-[#989AA9] pt-4 md:pt-0 pb-4`}
            >
              {menuItem.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    className="text-white font-Roboto_Condensed text-sm uppercase hover:text-primary2 transition duration-200 block"
                    to={item.path}
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown */}
                  {item.name === 'pages' && (
                    <div className="hidden group-hover:block md:absolute md:top-full left-0 mt-2 bg-white z-10 rounded shadow-md py-2 px-4 w-[150px]">
                      {item.drop.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.path}
                          className="block text-sm text-[#11121E] font-Roboto_Condensed uppercase font-bold mb-2 hover:text-primary2"
                        >
                          {dropItem.name}
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

      {/* Padding below header to avoid content hiding */}
      <div className=" pt-[40px] lg:pt-[200px]"></div>
    </>
  );
};

export default Nav;
