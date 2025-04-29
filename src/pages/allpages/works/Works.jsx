import React from 'react';
import { workdata } from './WorksData';
import { Link } from 'react-router';

const Works = () => {
  return (
    <div className="bg-primary3">
      <div className="container">
        <section className="pb-[100px]">
          <div className="flex justify-between mb-50px">
            <div>
              {' '}
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    works
                  </span>
                </div>
              </div>
              <h4 className="text-[72px] font-bold leading-[72px] font-Roboto_Condensed ] text-white ">
                Check Out Our Latest Works
              </h4>
              <p className="mt-[20px] text-base font-normal font-Inter leading-[24px] text-[#82869A]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>
            <div>
              <Link
                to="/works"
                className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer"
              >
                View all works
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[50px] rounded-[5px] overflow-hidden">
            {workdata.map((item, index) => (
              <div key={index}>
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <div>
                    <div className="w-[570px] h-[321px]">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="px-[5px] bg-[gray] w-full absolute top-[-100px] pl-[30px] py-[20px]">
                      <p className="text-[36px] font-bold leading-[40px] font-Roboto_Condensed text-white ">
                        {item.movieName}
                      </p>
                      <div className="flex items-center gap-x-[20px]">
                        <p className="font-Inter text-base font-normal leading-[24px] text-white">
                          {item.title}
                        </p>
                        <p className="font-Roboto_Condensed text-[20px] font-bold text-white">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
