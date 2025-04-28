import React from 'react';
import { testidata } from './Testimonialsdata';
import { FaStar } from 'react-icons/fa';
import tesit from '../../../assets/img/testi.jpg';

const Testimonials = () => {
  return (
    <div>
      <div className="bg-primary3 pb-[100px]">
        <div className="container">
          <section>
            <div className="flex">
              <div>
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      testimonials
                    </span>
                  </div>
                </div>
                <h4 className="font-Roboto_Condensed text-[72px] leading-[72px] font-bold text-white mt-[10px]">
                  What People Says?
                </h4>
                <p className="mt-[30px] mb-[30px] font-Roboto_Condensed text-[24px] font-bold leading-[30px] text-[#82869A]">
                  What they say about us?
                </p>
                <p className="font-Inter font-normal text-base text-[#82869A] leading-[24px]  w-[650px]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien. Aenean purus nunc, cursus in ante in, vehicula
                  facilisis dui. Integer consequat consectetur est id
                </p>
                <div className=" flex gap-[30px] mt-[30px]">
                  {testidata.map((item, index) => (
                    <div className="w-[435px] p-[30px] bg-white rounded-[5px] z-20">
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
                          <h5 className="font-Roboto_Condensed text-[36px] font-bold leading-[40px] text-[#11121E] mt-[20px] mb-[20px]">
                            {item.title}
                          </h5>
                          <p className="font-Inter text-base font-normal leading-[24px] text-[#82869A] mb-[20px]">
                            {item.discrition}
                          </p>
                          <div className="flex items-center gap-x-[15px]">
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                              <img
                                src={item.manImg}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex gap-x-[14px]">
                              <p className="font-Roboto_Cdondensed text-[14px] font-bold uppercase text-[#11121E]">
                                {item.name}
                              </p>
                              <span className="text-primary2 text-[14px] font-bold uppercase">
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
              <div className="relative">
                <div className="w-[470px] h-[618px] absolute top-[15px] rounded-[5px] overflow-hidden left-[-210px] z-[1]">
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
