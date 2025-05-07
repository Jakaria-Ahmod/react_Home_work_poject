import React from 'react';
import aboutImg from '../../../assets/img/aboutimg.jpg';
import aboutshep from '../../../assets/img/aboutimgshep.png';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="bg-primary3">
      <div className="pt-[50px] sm:pt-[100px] pb-[50px] sm:pb-[94px]">
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] sm:gap-[50px]">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-x-3.5 mb-[20px] sm:mb-[30px]">
                <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                    About Us
                  </span>
                </div>
              </div>
              <h2 className="font-Roboto_Condensed text-[32px] sm:text-[56px] lg:text-[72px] leading-[40px] sm:leading-[60px] lg:leading-[72px] text-white font-bold mb-[20px] sm:mb-[30px]">
                We Are a Team of Passionate Filmmakers
              </h2>
              <strong className="font-Roboto_Condensed text-[16px] sm:text-[20px] font-bold text-[#82869A] leading-[24px] sm:leading-[30px] mt-[20px] sm:mt-[30px]">
                Dedicated to bringing creative and compelling stories to life on
                screen
              </strong>
              <div className="relative mt-[30px] sm:mt-[40px]">
                <div className="absolute bottom-[-140px] sm:bottom-[-210px] right-[-50px] sm:right-[-620px] z-20">
                  <img src={aboutshep} alt="Shepherd" />
                </div>
              </div>
              <p className="font-Inter text-[14px] sm:text-[16px] font-normal leading-[24px] text-[#82869A] max-w-[500px] sm:max-w-[600px] mt-[20px] sm:mt-[30px] mb-[20px] sm:mb-[30px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
                dui. Integer consequat consectetur est id blandit. Proin et
                magna blandit arcu pellentesque scelerisque sit amet.
              </p>
              <div>
                <button className="py-[12px] sm:py-[17px] px-[20px] sm:px-[25px] bg-primary2 text-white text-[12px] sm:text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                  learn more
                </button>
              </div>
            </motion.div>
            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute top-[-120px] sm:top-[-160px] left-0 w-[400px] sm:w-[570px] h-[500px] sm:h-[700px] rounded-[5px] overflow-hidden bg-amber-600">
                  <img
                    src={aboutImg}
                    alt="Filmmakers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
