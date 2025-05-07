import React from 'react';
import { serivcedata } from './Servicedata';
import { MdOutlineMovie } from 'react-icons/md';
import serviceShep from '../../../assets/img/serviceShep.png';
const Service = () => {
  return (
    <div className="bg-primary3 pb-[60px] md:pb-[100px]">
      <div className="container px-4 md:px-0">
        <section className="relative">
          {/* Background Shape */}
          <div className="absolute top-[-150px] right-[-50px] w-[200px] md:w-[300px] z-0">
            <img src={serviceShep} alt="img" className="w-full" />
          </div>

          {/* Section Header */}
          <div className="mb-[40px] relative z-10">
            <div className="mx-auto flex justify-center mb-[10px]">
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  services
                </span>
              </div>
            </div>
            <h3 className="text-[36px] sm:text-[48px] md:text-[72px] leading-[1.2] font-bold font-Roboto_Condensed text-white text-center">
              Our Services
            </h3>
            <p className="mt-[10px] text-sm sm:text-base font-Inter font-normal leading-[24px] text-[#82869A] text-center max-w-[700px] mx-auto">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien aenean
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] relative z-10">
            {serivcedata.map((item, index) => (
              <div
                key={index}
                className="w-full transform transition-transform duration-300 hover:scale-105 h-[400px] rounded-[5px] overflow-hidden relative"
              >
                <img
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 p-5 flex flex-col justify-end">
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
        </section>
      </div>
    </div>
  );
};

export default Service;
