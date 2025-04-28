import React from 'react';
import aboutimgshep from '../../../assets/img/aboutimgshep.png';

const Collaborations = () => {
  return (
    <div className="bg-primary3 pb-[120px]">
      <section className="container">
        <div>
          <div className="max-w-[1170px] h-[480px] rounded-[5px] bg-[#515186] py-[82px] px-[50px] ">
            <div className="flex items-center gap-x-3.5">
              <div className="w-[40px] h-[1px] bg-white"></div>
              <div>
                <span className="text-white font-Roboto_Condensed text-[14px] uppercase">
                  About Us
                </span>
              </div>
            </div>
            <h2 className="font-Roboto_Condensed text-[72px] font-bold leading-[72px] text-white w-[729px] mt-[10px] mb-[30px]">
              We Love Collaborating With Other Creatives
            </h2>

            <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
              let’s collaborations
            </button>
            <div className="relative">
              <div className="absolute bottom-[-135px] right-[-50px] z-10">
                <img src={aboutimgshep} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
