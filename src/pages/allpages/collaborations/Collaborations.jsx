import React from 'react';
import aboutimgshep from '../../../assets/img/aboutimgshep.png';

const Collaborations = () => {
  return (
    <div className="bg-primary3 pb-[60px] md:pb-[120px]">
      <section className="container px-4 md:px-0">
        <div className="md:max-w-[1170px] mx-auto rounded-[5px] bg-[#515186] py-10 px-5 md:py-[82px] md:px-[50px] relative overflow-hidden">
          {/* Heading */}
          <div className="flex items-center gap-x-3.5">
            <div className="w-[40px] h-[1px] bg-white"></div>
            <span className="text-white font-Roboto_Condensed text-sm md:text-[14px] uppercase">
              About Us
            </span>
          </div>

          {/* Title */}
          <h2 className="font-Roboto_Condensed text-2xl sm:text-4xl md:text-[72px] font-bold leading-tight md:leading-[72px] text-white mt-[10px] mb-[30px] max-w-full md:max-w-[729px]">
            We Love Collaborating With Other Creatives
          </h2>

          {/* Button */}
          <button className="py-3 px-5 md:py-[17px] md:px-[25px] bg-primary2 text-white text-sm md:text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer hover:bg-white hover:text-primary2 transition duration-300">
            let’s collaborations
          </button>

          {/* Decorative Image */}
          <div className="hidden md:block absolute bottom-[-135px] right-[-50px] z-10">
            <img
              src={aboutimgshep}
              alt="img"
              className="w-full max-w-[300px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
