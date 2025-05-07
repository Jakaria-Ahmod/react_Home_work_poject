import React from 'react';
import photGrpiImg from '../../../assets/img/photogrpiimg.jpg';
import partnershep from '../../../assets/img/partnershep.png';
import { motion } from 'framer-motion';

const PhotoGrapi = () => {
  return (
    <div className="bg-primary3 pb-[60px] md:pb-[100px]">
      <section className="container px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px] pt-[60px] md:pt-[100px] items-center">
          {/* Image Block */}
          <motion.div
            className="w-full h-[300px] sm:h-[400px] md:h-[536px] order-1 md:order-none rounded-[5px] overflow-hidden relative"
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
            <div className="absolute bottom-0 left-0">
              <img src={partnershep} alt="shape" />
            </div>
          </motion.div>

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-x-3.5 mb-2">
              <div className="w-[40px] h-[1px] bg-primary2"></div>
              <span className="text-primary2 font-Roboto_Condensed text-sm uppercase">
                Our Cinematography
              </span>
            </div>

            <h3 className="font-Roboto_Condensed text-white text-3xl sm:text-5xl md:text-[72px] font-bold leading-tight md:leading-[72px]">
              Cinematography and Film Production
            </h3>

            <p className="font-Roboto_Condensed font-bold text-[#82869A] text-base sm:text-lg leading-[30px] mt-6 mb-4 max-w-full md:max-w-[460px]">
              Our video production company is here to help you create stunning
              images from start to finish.
            </p>

            <p className="font-Inter text-base text-[#82869A] leading-[24px] mb-6">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit.
            </p>

            <button className="py-3 px-6 bg-primary2 text-white text-sm font-bold uppercase font-Roboto_Condensed cursor-pointer">
              Get started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGrapi;
