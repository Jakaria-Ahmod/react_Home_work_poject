import React from 'react';
import { barndimg } from './BrandsData';
import partnerBannerImg from '../../../assets/img/pratnerbanner.jfif';
import pratnershep from '../../../assets/img/partnershep.png';

const Brands = () => {
  return (
    <div className="bg-primary3 pt-[60px] sm:pt-[144px] pb-[60px] sm:pb-[100px]">
      <div>
        <section className="container">
          {/* Header Section */}
          <div className="mx-auto w-[90%] sm:w-[500px]">
            <div className="flex items-center gap-x-3.5 justify-center">
              <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
              <div>
                <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                  partners
                </span>
              </div>
            </div>
            <h4 className="text-[32px] sm:text-[45px] font-Roboto_Condensed font-bold leading-[40px] sm:leading-[50px] text-white mt-[20px] sm:mt-[0]">
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

          {/* Partner Image and Section */}
          <div className="relative hidden">
            <div className="absolute top-[-100px] sm:top-[-150px] left-[-40px] sm:left-[-100px] z-20">
              <img
                src={pratnershep}
                alt="Partner"
                className="w-[150px] sm:w-[250px]"
              />
            </div>
          </div>

          {/* Banner with Director Info */}
          <div>
            <div className="w-full sm:w-[1170px] h-[300px] sm:h-[500px]">
              <img
                src={partnerBannerImg}
                alt="Partner Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 absolute top-[-120px] sm:top-[-150px] w-full sm:w-[1070px] p-[30px] sm:p-[50px] bg-[#11121E] rounded-[3px]">
                <div>
                  <div className="flex items-center gap-x-3.5 mb-[20px] sm:mb-[30px]">
                    <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
                    <div>
                      <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                        directors
                      </span>
                    </div>
                  </div>
                  <h3 className="font-Roboto_Condensed text-[32px] sm:text-[72px] font-bold leading-[40px] sm:leading-[72px] text-white">
                    Meet Our Video Directors
                  </h3>
                </div>

                <div className="w-full sm:w-[441px]">
                  <p className="font-Roboto_Condensed text-[16px] sm:text-[24px] font-bold text-white leading-[24px] sm:leading-[30px] pr-[30px] sm:pr-[150px] mb-[20px] sm:mb-[30px]">
                    Our team is made up of experienced and talented filmmakers
                    who share a common goal.
                  </p>
                  <p className="font-Inter text-[14px] sm:text-[16px] font-normal leading-[24px] text-[#82869A] mt-[20px] sm:mt-[30px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit
                    amet a sapien. Aenean purus nunc, cursus in ante in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brands;
