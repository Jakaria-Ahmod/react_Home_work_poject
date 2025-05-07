import React from 'react';
import { barndimg } from './BrandsData';
import partnerBannerImg from '../../../assets/img/pratnerbanner.jfif';
import pratnershep from '../../../assets/img/partnershep.png';

const Brands = () => {
  return (
    <div className="bg-primary3 pt-[60px] sm:pt-[100px] pb-[60px] sm:pb-[100px]">
      <section className="container px-4 sm:px-6 lg:px-0">
        {/* Header Section */}
        <div className="mx-auto text-center max-w-[90%] sm:max-w-[500px]">
          <div className="flex items-center justify-center gap-x-3 mb-4">
            <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
            <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
              partners
            </span>
          </div>
          <h4 className="text-[28px] sm:text-[40px] font-Roboto_Condensed font-bold leading-[38px] sm:leading-[48px] text-white mt-[10px]">
            Trusted by the Best Brands
          </h4>
        </div>

        {/* Partners' Brands */}
        <div className="flex gap-[100px] mt-[56px] mb-[100px] justify-center">
          {barndimg.map((item, index) => (
            <div>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>

        {/* Partner Image (Optional Decoration) */}
        <div className="relative hidden">
          <div className="absolute top-[-80px] sm:top-[-120px] left-[-20px] sm:left-[-80px] z-10 hidden md:block">
            <img
              src={pratnershep}
              alt="Partner"
              className="w-[120px] sm:w-[180px]"
            />
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full h-[220px] sm:h-[350px] md:h-[500px] rounded overflow-hidden mb-12">
          <img
            src={partnerBannerImg}
            alt="Partner Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Directors Section */}
        <div className="relative w-full bg-[#11121E] rounded-[5px] p-5 sm:p-10 md:p-[50px] -mt-[100px] sm:-mt-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-10">
            <div>
              <div className="flex items-center gap-x-3 mb-4">
                <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                  directors
                </span>
              </div>
              <h3 className="font-Roboto_Condensed text-[28px] sm:text-[48px] font-bold leading-[38px] sm:leading-[60px] text-white">
                Meet Our Video Directors
              </h3>
            </div>

            <div>
              <p className="font-Roboto_Condensed text-[15px] sm:text-[20px] font-bold text-white leading-[24px] mb-4">
                Our team is made up of experienced and talented filmmakers who
                share a common goal.
              </p>
              <p className="font-Inter text-[14px] sm:text-[16px] text-[#82869A] leading-[24px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
