import React from 'react';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutHedar = () => {
  return (
    <div className="bg-primary1 py-[10px] pb-3 md:py-[100px]">
      <div className="flex items-center justify-center text-center">
        <div>
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-x-3.5">
            <div className="w-[40px] h-[1px] bg-primary2"></div>
            <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-Roboto_Condensed text-[48px] md:text-[96px] font-bold leading-tight text-white mt-[10px]">
            About
          </h2>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-x-[10px] mt-[20px] text-white text-[14px] font-bold uppercase">
            <Link to="/">
              <IoHome size={13} />
            </Link>
            <Link to="/">Home</Link>
            <FaChevronRight size={13} />
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHedar;
