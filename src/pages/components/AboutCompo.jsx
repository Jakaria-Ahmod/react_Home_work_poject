import React from 'react';
import AboutHedar from './AboutHedar';
// import aboutImg from '../../../assets/img/aboutimg.jpg';
// import aboutshep from '../../../assets/img/aboutimgshep.png';
import aboutImg from '../../../src/assets/img/aboutimg.jpg';
import aboutshep from '../../../src/assets/img/aboutimgshep.png';
import PhotoGrapi from '../allpages/photgrpi/PhotoGrapi';
import Collaborations from '../allpages/collaborations/Collaborations';
import Testimonials from '../allpages/testimonial/Testimonials';
import { motion } from 'motion/react';
const AboutCompo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <section className="">
        <AboutHedar></AboutHedar>
        <div className="bg-primary3">
          <div className="pt-[60px] md:pt-[100px] pb-[60px] md:pb-[94px]">
            <section className="container px-4 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px]">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-x-3.5 mb-2">
                    <div className="w-[40px] h-[1px] bg-primary2"></div>
                    <span className="text-primary2 font-Roboto_Condensed text-sm uppercase">
                      About Us
                    </span>
                  </div>

                  <h2 className="font-Roboto_Condensed text-3xl sm:text-5xl md:text-[72px] font-bold text-white leading-tight mb-5">
                    We Are a Team of Passionate Filmmakers
                  </h2>

                  <strong className="block font-Roboto_Condensed text-lg sm:text-xl md:text-[24px] font-bold text-[#82869A] leading-snug mt-4">
                    Dedicated to bringing creative and compelling stories to
                    life on screen
                  </strong>

                  {/* Hidden decoration shape (can be adjusted later) */}
                  <div className="relative hidden">
                    <div className="absolute bottom-[-210px] right-[-620px] z-20">
                      <img src={aboutshep} alt="" />
                    </div>
                  </div>

                  {/* Paragraphs */}
                  <div className="mt-6 space-y-6">
                    <p className="font-Inter text-base leading-[24px] text-[#82869A]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien. Aenean purus nunc, cursus in ante in,
                      vehicula facilisis dui. Integer consequat consectetur est
                      id blandit.
                    </p>
                    <p className="font-Inter text-base leading-[24px] text-[#82869A]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien. Aenean purus nunc, cursus in ante in,
                      vehicula facilisis dui.
                    </p>
                    <p className="font-Inter text-base leading-[24px] text-[#82869A]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien.
                    </p>
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-[300px] sm:h-[400px] md:h-[770px] bg-amber-600 rounded overflow-hidden">
                    <img
                      src={aboutImg}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
        <PhotoGrapi></PhotoGrapi>
        <Collaborations></Collaborations>
        {/* <Testimonials> </Testimonials> */}
      </section>
    </motion.div>
  );
};

export default AboutCompo;
