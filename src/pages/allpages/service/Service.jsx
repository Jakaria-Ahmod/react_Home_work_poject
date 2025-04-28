import React from 'react';
import { serivcedata } from './Servicedata';
import { MdOutlineMovie } from 'react-icons/md';
import serviceShep from '../../../assets/img/serviceShep.png';
const Service = () => {
  return (
    <div className="bg-primary3 pb-[100px]">
      <div className="container">
        <section className="relative">
          <div className="absolute top-[-300px] right-[-230px]">
            <img src={serviceShep} alt="img" />
          </div>
          <div className="mb-[50px]">
            <div className=" mx-auto w-[300px] flex justify-center mb-[10px]">
              <div className="flex items-center gap-x-3.5 w-[200px]">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase block">
                    services
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-[72px] leading-[72px] font-bold font-Roboto_Condensed text-white text-center">
              Our Services
            </h3>
            <p className="mt-[20px] font-Inter font-normal leading-[24px] text-[#82869A] text-center">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien aenean
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[30px]">
            {serivcedata.map((item, index) => (
              <div className="w-[370px] h-[400px] rounded-[5px] overflow-hidden">
                <img
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />

                <div className="relative">
                  <div className="absolute top-[-130px] left-0 px-[20px]">
                    <MdOutlineMovie color="black" size={30} />
                    <p className="text-[36px] font-bold leading-[40px] text-white font-Roboto_Condensed">
                      {item.movieName}
                    </p>
                    <p className="font-Inter text-base font-normal leading-[24px] text-white">
                      {item.title}
                    </p>
                  </div>
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
