import React from 'react';
import { barndimg } from './BrandsData';
import partnerBannerImg from '../../../assets/img/pratnerbanner.jfif';

const Brands = () => {
  return (
    <div className="bg-primary3 pt-[144px] pb-[100px]">
      <div>
        <section className="container">
          <div className="mx-auto w-[500px] w-">
            <div className="flex items-center gap-x-3.5 justify-center">
              <div className="w-[40px] h-[1px] bg-primary2"></div>
              <div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  About Us
                </span>
              </div>
            </div>
            <h4 className="text-[45px] font-Roboto_Condensed font-bold leading-[50px] text-white">
              Trusted by the Best Brands
            </h4>
          </div>
          <div className="flex gap-[100px] mt-[56px] mb-[100px] justify-center">
            {barndimg.map((item, index) => (
              <div>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <div>
            <div className="w-[1170px] h-[500px]">
              <img
                src={partnerBannerImg}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-x-8 absolute top-[-150px] w-[1070px] p-[50px] bg-[#11121E] rounded-[3px]">
                <div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="w-[40px] h-[1px] bg-primary2"></div>
                    <div>
                      <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                        About Us
                      </span>
                    </div>
                  </div>
                  <h3 className="font-Roboto_Condensed text-[72px] font-bold leading-[72px] text-white">
                    Meet the Our Video Directors
                  </h3>
                </div>
                <div className="w-[441px]">
                  <p className="font-Roboto_Condensed text-24px font-bold text-white leading-[30px] pr-[150px]">
                    Our team is made up of experienced and talented filmmakers
                    who share a common goal
                  </p>
                  <p className="font-Inter text-base font-normal leading-[24pxs] text-[#82869A] mt-[20px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit
                    amet a sapien. Aenean purus nunc cursus in ante in.
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
