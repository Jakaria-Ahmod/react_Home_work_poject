import React from 'react';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutHedar = () => {
  return (
    <div className="bg-primary1">
      <div className="flex items-center justify-center pb-[100px]">
        <div>
          <div className="flex items-center justify-center gap-x-3.5">
            <div className="w-[40px] h-[1px] bg-primary2"></div>
            <div>
              <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                About Us
              </span>
            </div>
          </div>
          <h2 className="text-center font-Roboto_Condensed text-[96px] font-bold leading-[101px] text-white">
            About
          </h2>
          <div className="flex items-center justify-center gap-x-[20px] mt-[20px]">
            <Link to="/">
              {' '}
              <IoHome size={13} color="white" />
            </Link>
            <Link className="text-white text-[14px] font-bold uppercase" to="/">
              Home
            </Link>
            <FaChevronRight size={13} color="white" />
            <Link
              className="text-white text-[14px] font-bold uppercase"
              to="/about"
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHedar;
