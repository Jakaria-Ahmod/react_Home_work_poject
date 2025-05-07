import React from 'react';
import { Link } from 'react-router';
import { FaPlayCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <div>
      <div className="bg-primary1 pb-[20px] md:pb-[244px]">
        <section className="container md:pt-[70px] mt:[20px]">
          <div className="md:w-[770px]">
            <p className="font-Roboto_Condensed text-[14px] font-bold uppercase text-primary2">
              One scene at a time - the movie maker director.
            </p>
            <h1 className="lg:text-[96px] font-Roboto_Condensed md:leading-[101px] text-[22px] text-white font-bold">
              Behind Every Great Film is a Visionary.
            </h1>
            <p className="font-Source_Sans_Pro font-normal leading-[30px] text-[20px] max-w-[530px] text-white mt-[30px] mb-[30px]">
              Crafting unforgettable stories bringing their creative vision to
              life on the big screen - the movie maker director
            </p>
            <div className="flex items-center">
              <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                Get started
              </button>
              <div className="flex items-center px-[25px] gap-x-2.5">
                <Link className=" font-Roboto_Condensed text-[14px]  uppercase font-bold text-white">
                  view our works
                </Link>
                <FaPlayCircle size={17} color="white" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
