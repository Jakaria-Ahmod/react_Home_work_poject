import React from 'react';
import photGrpiImg from '../../../assets/img/photogrpiimg.jpg';
import partnershep from '../../../assets/img/partnershep.png';
import { motion } from 'motion/react';
const PhotoGrapi = () => {
  return (
    <div className="bg-primary3 pb-[100px]">
      <div>
        <section className="container">
          <div>
            <div className="grid grid-cols-2 pt-[100px] gap-[50px]">
              <motion.div
                className="w-[550px] h-[536px] rounded-[5px] overflow-hidden"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={photGrpiImg}
                  alt="img"
                  className="w-full h-full object-cover"
                />
                <div className="relative">
                  <div className="absolute bottom-0 left-0">
                    <img src={partnershep} alt="img" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      Our Cinematography
                    </span>
                  </div>
                </div>
                <h3 className="font-Roboto_Condensed text-white text-[72px] font-bold leading-[72px]">
                  Cinematography and Film Production
                </h3>
                <p className="font-Roboto_Condensed font-bold leading-[30px] text-[#82869A] mt-[30px] mb-[30px] w-[360px]">
                  Our video production company is here to help you create
                  stunning images from start to finish.
                </p>
                <p className="font-Inter text-base font-normal leading-[ 24px] text-[#82869A] mb-[30px]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien. Aenean purus nunc, cursus in ante in, vehicula
                  facilisis dui. Integer consequat consectetur est id blandit.
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien.
                </p>
                <div>
                  <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                    Get started
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoGrapi;
