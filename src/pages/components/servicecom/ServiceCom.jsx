import React from 'react';
import { Link } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { serivcedata } from '@/pages/allpages/service/Servicedata';
import { MdOutlineMovie } from 'react-icons/md';
import Collaborations from '@/pages/allpages/collaborations/Collaborations';

const ServiceCom = () => {
  return (
    <div>
      <section>
        {/* Header Section */}
        <div className="bg-primary1">
          <div className="flex items-center justify-center pb-[60px] md:pb-[100px]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-x-3.5 mb-2">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="font-Roboto_Condensed text-[40px] sm:text-[64px] md:text-[96px] font-bold leading-tight text-white">
                Our Services
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-[10px] sm:gap-x-[20px] mt-[20px] text-white text-[14px] font-bold uppercase">
                <Link to="/">
                  <IoHome size={14} />
                </Link>
                <Link to="/">Home</Link>
                <FaChevronRight size={12} />
                <Link to="/services">our services</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="bg-primary3 py-[60px] md:py-[100px]">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-[20px]">
              <div className="flex items-center justify-center gap-x-3.5 mb-2">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  Services
                </span>
              </div>
              <h3 className="font-Roboto_Condensed text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-tight text-white">
                Our Services
              </h3>
              <p className="text-primary4 text-sm sm:text-base font-Inter leading-[24px] max-w-[700px] mx-auto mt-2">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
              {serivcedata.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[400px] rounded-[5px] overflow-hidden relative group transition-transform transform hover:scale-105"
                >
                  <img
                    src={item.img}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-ful bg-opacity-40 p-5 flex flex-col justify-end">
                    <MdOutlineMovie color="white" size={30} />
                    <p className="text-[20px] sm:text-[28px] md:text-[36px] font-bold leading-[1.2] text-white font-Roboto_Condensed mt-2">
                      {item.movieName}
                    </p>
                    <p className="font-Inter text-sm sm:text-base font-normal leading-[1.5] text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collaborations Section */}
        <Collaborations />
      </section>
    </div>
  );
};

export default ServiceCom;
