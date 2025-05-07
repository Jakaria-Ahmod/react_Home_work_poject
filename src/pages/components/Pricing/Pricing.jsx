import React from 'react';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { pricingCardData } from './PricingData';
import { Button } from '@/components/ui/button';
import Collaborations from '@/pages/allpages/collaborations/Collaborations';
import Acoridon from '../Acoridon/Acoridon';

const Pricing = () => {
  return (
    <div>
      <div>
        <div>
          <div className="bg-primary1">
            <div className="flex items-center justify-center pb-[50px] sm:pb-[100px]">
              <div className="text-center">
                <div className="flex items-center justify-center gap-x-3.5 mb-[20px]">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                      Pricing
                    </span>
                  </div>
                </div>
                <h2 className="font-Roboto_Condensed text-[56px] sm:text-[72px] lg:text-[96px] font-bold leading-[60px] sm:leading-[80px] lg:leading-[101px] text-white">
                  Pricing
                </h2>
                <div className="flex items-center justify-center gap-x-[10px] sm:gap-x-[20px] mt-[10px] sm:mt-[20px]">
                  <Link to="/">
                    <IoHome size={13} color="white" />
                  </Link>
                  <Link
                    className="text-white text-[12px] sm:text-[14px] font-bold uppercase"
                    to="/"
                  >
                    Home
                  </Link>
                  <FaChevronRight size={13} color="white" />
                  <Link
                    className="text-white text-[12px] sm:text-[14px] font-bold uppercase"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary3">
          <div className="pt-[100px] pb-[100px] container">
            <div>
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    Pricing
                  </span>
                </div>
              </div>
              <h4 className="text-[72px] sm:text-[48px] font-bold leading-[72px] font-Roboto_Condensed text-white">
                Choose Your Plans
              </h4>
              <p className="mt-[20px] text-base font-normal font-Inter leading-[24px] text-[#82869A]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-3 gap-x-[30px] mt-[50px]">
                {pricingCardData.map((item, index) => (
                  <div
                    key={index}
                    className="p-[30px] bg-[#11121E] rounded-[5px] group transition duration-200 hover:bg-primary2 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-[36px] font-bold font-Roboto_Condensed leading-[40px] group-hover:text-white transition duration-200">
                        {item.name}
                      </h3>
                      <p className="p-[10px] bg-[#11121E] text-white font-Roboto_Condensed text-[11px] font-bold leading-[11px] uppercase group-hover:text-white transition duration-200">
                        {item?.buttonText}
                      </p>
                    </div>
                    <p className="font-Inter text-base font-normal leading-[24px] text-primary4 mt-[10px] mb-[30px] group-hover:text-white transition duration-200">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-x-[5px] mb-[30px]">
                      <h4 className="font-Roboto_Condensed text-[45px] font-bold leading-[50px] text-white group-hover:text-white transition duration-200">
                        {item.money}
                      </h4>
                      <span className="font-Roboto_Condensed text-[11px] text-white font-bold leading-[11px] uppercase group-hover:text-white transition duration-200">
                        {item.moneyTitle}
                      </span>
                    </div>
                    <Button className="w-full rounded-[3px] bg-primary4 text-white font-Roboto_Condensed text-[14px] font-bold uppercase py-[17px] hover:bg-primary4 cursor-pointer group-hover:text-white transition duration-200">
                      {item.plane}
                    </Button>
                    <p className="text-white font-Roboto_Condensed font-bold uppercase mt-[30px] mb-[20px] group-hover:text-white transition duration-200">
                      {item.includes}
                    </p>
                    <div className="flex items-center justify-between border-b border-dotted mb-[20px]">
                      <p className="font-Inter text-base font-normal leading-[24px] text-primary4 mb-[10px] group-hover:text-white transition duration-200">
                        {item.Pre_production}
                      </p>
                      <p className="font-Roboto_Condensed text-[14px] font-bold text-white uppercase group-hover:text-white transition duration-200">
                        {item.limited}
                      </p>
                    </div>
                    {/* Other similar blocks for production, post-production, etc. */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Collaborations />
          <div className="container pb-[100px]">
            <div>
              <div className="flex items-center gap-x-3.5 justify-center">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    About Us
                  </span>
                </div>
              </div>
              <h3 className="text-center text-white font-Roboto_Condensed text-[72px] font-bold leading-[72px] mb-[20px]">
                Pricing FAQs
              </h3>
              <p className="text-center font-Inter text-[16px] font-normal leading-[24px] text-primary4">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>
            <Acoridon />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
