import React from 'react';
import { Link } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { serivcedata } from '@/pages/allpages/service/Servicedata';
import { MdOutlineMovie } from 'react-icons/md';
import Collaborations from '@/pages/allpages/collaborations/Collaborations';

const ServiceCom = () => {
  return (
    <div>
      <div>
        <section>
          <div className="bg-primary1">
            <div className="flex items-center justify-center pb-[100px]">
              <div>
                <div className="flex items-center justify-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      Our Services
                    </span>
                  </div>
                </div>
                <h2 className="text-center font-Roboto_Condensed text-[96px] font-bold leading-[101px] text-white">
                  Our Services
                </h2>
                <div className="flex items-center justify-center gap-x-[20px] mt-[20px]">
                  <Link to="/">
                    {' '}
                    <IoHome size={13} color="white" />
                  </Link>
                  <Link
                    className="text-white text-[14px] font-bold uppercase"
                    to="/"
                  >
                    Home
                  </Link>
                  <FaChevronRight size={13} color="white" />
                  <Link
                    className="text-white text-[14px] font-bold uppercase"
                    to="/services"
                  >
                    our services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-primary3 py-[100px]">
              <div className="container">
                <div className="flex items-center justify-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      Services
                    </span>
                  </div>
                </div>
                <h3 className="font-Roboto_Condensed text-[72px] font-bold leading-[72px] text-white text-center mb-[20px]">
                  Our Services
                </h3>
                <p className="text-primary4 text-base font-Inter leading-[24px] text-center mb-[50px]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien aenean
                </p>

                <div>
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
                </div>
              </div>
            </div>
            <Collaborations></Collaborations>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceCom;
