import React from 'react';
import { testidata } from './Testimonialsdata';
import { FaStar } from 'react-icons/fa';
import tesit from '../../../assets/img/testi.jpg';
import shep from '../../../assets/img/serviceShep.png';
// import aboutimgshep from '../../../assets/img/aboutimgshep.png';

const Testimonials = () => {
  return (
    <div>
      <div className="bg-primary3 pb-[100px]">
        <div className="container px-4 md:px-6 lg:px-0">
          <section>
            <div className="flex flex-col lg:flex-row">
              <div>
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      testimonials
                    </span>
                  </div>
                </div>
                <h4 className="font-Roboto_Condensed text-[36px] md:text-[48px] lg:text-[72px] leading-[42px] md:leading-[60px] lg:leading-[72px] font-bold text-white mt-[10px]">
                  What People Says?
                </h4>
                <p className="mt-[20px] mb-[20px] md:mt-[30px] md:mb-[30px] font-Roboto_Condensed text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[28px] text-[#82869A]">
                  What they say about us?
                </p>
                <p className="font-Inter font-normal text-sm md:text-base text-[#82869A] leading-[24px] w-full md:w-[650px]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien. Aenean purus nunc, cursus in ante in, vehicula
                  facilisis dui. Integer consequat consectetur est id
                </p>

                <div className="relative hidden lg:block">
                  <div className="absolute top-[-280px] left-[-300px]">
                    <img src={shep} alt="" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:flex-wrap gap-[20px] md:gap-[30px] mt-[30px]">
                  {testidata.map((item, index) => (
                    <div
                      key={index}
                      className="w-full md:w-[calc(50%-15px)] lg:w-[435px] p-[20px] md:p-[30px] bg-white rounded-[5px] z-20"
                    >
                      <div>
                        <div className="flex justify-between">
                          <div className="flex">
                            <FaStar className="text-primary2" />
                            <FaStar className="text-primary2" />
                            <FaStar className="text-primary2" />
                            <FaStar className="text-primary2" />
                            <FaStar className="text-primary2" />
                          </div>
                          <div>
                            <img src={item.qoutImg} alt="" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-Roboto_Condensed text-[24px] md:text-[28px] lg:text-[36px] font-bold leading-[30px] md:leading-[34px] lg:leading-[40px] text-[#11121E] mt-[20px] mb-[15px]">
                            {item.title}
                          </h5>
                          <p className="font-Inter text-sm md:text-base font-normal leading-[22px] text-[#82869A] mb-[20px]">
                            {item.discrition}
                          </p>
                          <div className="flex items-center gap-x-[15px]">
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                              <img
                                src={item.manImg}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex gap-x-[10px] md:gap-x-[14px]">
                              <p className="font-Roboto_Cdondensed text-[12px] md:text-[14px] font-bold uppercase text-[#11121E]">
                                {item.name}
                              </p>
                              <span className="text-primary2 text-[12px] md:text-[14px] font-bold uppercase">
                                {item.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image section */}
              <div className="relative mt-[40px] lg:mt-0">
                <div className="w-full sm:w-[320px] md:w-[400px] lg:w-[470px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[618px] relative lg:absolute top-[15px] rounded-[5px] overflow-hidden lg:left-[-210px] z-[1] mx-auto lg:mx-0">
                  <img
                    src={tesit}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
