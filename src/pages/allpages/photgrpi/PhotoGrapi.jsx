import React from 'react';
import photGrpiImg from '../../../assets/img/photogrpiimg.jpg';
import partnershep from '../../../assets/img/partnershep.png';
import { motion } from 'framer-motion';

const PhotoGrapi = () => {
  return (
    <div className="bg-primary3 pb-[60px] md:pb-[100px]">
      <section className="container px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-[40px] md:gap-[50px] pt-[60px] md:pt-[100px] items-center">
          {/* Image Block */}
          <motion.div
            className="w-full h-[240px] sm:h-[350px] md:h-[500px] order-2 md:order-1 rounded-[5px] overflow-hidden relative"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={photGrpiImg}
              alt="Cinematography"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-[80px] sm:w-[100px] md:w-[120px]">
              <img src={partnershep} alt="shape" className="w-full" />
            </div>
          </motion.div>

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-x-3 mb-3">
              <div className="w-[30px] sm:w-[40px] h-[1px] bg-primary2"></div>
              <span className="text-primary2 font-Roboto_Condensed text-xs sm:text-sm uppercase">
                Our Cinematography
              </span>
            </div>

            <h3 className="font-Roboto_Condensed text-white text-[24px] sm:text-[40px] md:text-[60px] font-bold leading-tight md:leading-[72px]">
              Cinematography and Film Production
            </h3>

            <p className="font-Roboto_Condensed font-bold text-[#82869A] text-sm sm:text-base leading-[24px] sm:leading-[30px] mt-4 sm:mt-6 mb-3 sm:mb-4 max-w-full md:max-w-[460px]">
              Our video production company is here to help you create stunning
              images from start to finish.
            </p>

            <p className="font-Inter text-sm sm:text-base text-[#82869A] leading-[22px] sm:leading-[26px] mb-5 sm:mb-6">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit.
            </p>

            <button className="py-2 sm:py-3 px-4 sm:px-6 bg-primary2 text-white text-xs sm:text-sm font-bold uppercase font-Roboto_Condensed cursor-pointer">
              Get started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGrapi;
