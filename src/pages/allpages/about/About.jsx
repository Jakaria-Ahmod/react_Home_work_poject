import React from 'react';
import aboutImg from '../../../assets/img/aboutimg.jpg';
import aboutshep from '../../../assets/img/aboutimgshep.png';

const About = () => {
  return (
    <div className="bg-primary3">
      <div className="pt-[100px] pb-[94px]">
        <section className="container">
          <div className="grid grid-cols-2 gap-[50px]">
            <div>
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    About Us
                  </span>
                </div>
              </div>
              <h2 className="font-Roboto_Condensed text-[72px] leading-[72px] text-white font-bold mb-[30px]">
                We Are a Team of Passionate Filmmakers
              </h2>
              <strong className="font-Roboto_Condensed text-[24px] font-bold text-[#82869A] leading-[30px] mt-[30px]">
                Dedicated to bringing creative and compelling stories to life on
                screen
              </strong>
              <div className="relative">
                <div className="absolute bottom-[-210px] right-[-620px] z-20 ">
                  <img src={aboutshep} alt="" />
                </div>
              </div>
              <p className="font-Inter text-[16px] font-normal leading-[24px] text-[#82869A] max-w-[600px] mt-[30px] mb-[30px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
                dui. Integer consequat consectetur est id blandit. Proin et
                magna blandit arcu pellentesque scelerisque sit amet.
              </p>
              <div>
                <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                  learn more
                </button>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute top-[-160px] left-0 w-[570px] h-[700px] rounded-[5px] overflow-hidden bg-amber-600">
                  <img
                    src={aboutImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
