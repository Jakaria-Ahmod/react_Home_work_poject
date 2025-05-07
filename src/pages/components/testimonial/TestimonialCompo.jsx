import React from 'react';
import img from '../../../assets/img/indian.webp';
import partnerBannerImg from '../../../assets/img/pratnerbanner.jfif';
import { testData } from './TestiData';

const TestimonialCompo = () => {
  return (
    <div>
      {/* Section: Header */}
      <div className="bg-primary1">
        <div className="flex items-center justify-center pb-[60px] md:pb-[100px] px-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-x-3.5 mb-6">
              <div className="w-[30px] md:w-[40px] h-[1px] bg-primary2"></div>
              <span className="text-primary2 font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-Roboto_Condensed text-[36px] sm:text-[48px] md:text-[96px] font-bold leading-tight text-white mb-2">
              TV Commercial
            </h2>
            <p className="text-white font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
              Commercials
            </p>
          </div>
        </div>
      </div>

      {/* Section: Video and Description */}
      <div className="bg-primary3 py-[60px] md:py-[100px] px-4">
        <section className="container mx-auto">
          <div className="w-full h-[200px] sm:h-[400px] md:h-[658px] rounded-[5px] overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/XJ_P97f0EtA?si=OE7iKUsIyQz5Qf2g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Section: Content Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[50px] mt-[60px]">
            <div>
              <div className="flex items-center gap-x-3.5">
                <div className="w-[30px] md:w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
                  Keep it concise
                </span>
              </div>
              <h3 className="text-white font-Roboto_Condensed text-[28px] sm:text-[36px] md:text-[71px] leading-tight font-black mt-2">
                TV Commercials are Typically Short, so it's Important
              </h3>
              <h4 className="text-primary4 font-Roboto_Condensed font-bold text-[16px] sm:text-[20px] leading-[28px] mt-[20px] mb-[20px]">
                Focus on the most important details about your portfolio.
              </h4>
              <p className="text-primary4 font-Inter text-sm md:text-base leading-relaxed">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien.
              </p>
            </div>

            <div className="w-full h-[300px] sm:h-[400px] lg:h-[524px] rounded-[5px] overflow-hidden">
              <img src={img} alt="img" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Section: Content Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px] mt-[60px]">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[524px] rounded-[5px] overflow-hidden">
              <img src={img} alt="img" className="w-full h-full object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-x-3.5">
                <div className="w-[30px] md:w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
                  Visually
                </span>
              </div>
              <h3 className="text-white font-Roboto_Condensed text-[28px] sm:text-[36px] md:text-[71px] leading-tight font-black mt-2">
                Make it Visually Appealing
              </h3>
              <h4 className="text-primary4 font-Roboto_Condensed font-bold text-[16px] sm:text-[20px] leading-[28px] mt-[20px] mb-[20px]">
                Your commercial should be visually appealing and engaging.
              </h4>
              <p className="text-primary4 font-Inter text-sm md:text-base leading-relaxed">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien.
              </p>
              <p className="text-primary4 font-Inter text-sm md:text-base leading-relaxed mt-[20px]">
                Aenean purus nunc, cursus in ante in, vehicula facilisis dui.
              </p>
            </div>
          </div>

          {/* Section: Partner Banner */}
          <div className="pt-[80px] md:pt-[100px]">
            <div className="w-full h-[200px] sm:h-[300px] md:h-[500px]">
              <img
                src={partnerBannerImg}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] absolute top-[-80px] sm:top-[-150px] w-full bg-[#11121E] p-[30px] sm:p-[50px] rounded-[3px]">
                <div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="w-[30px] md:w-[40px] h-[1px] bg-primary2"></div>
                    <span className="text-primary2 font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
                      Audience
                    </span>
                  </div>
                  <h3 className="text-white font-Roboto_Condensed text-[28px] sm:text-[48px] md:text-[65px] font-bold leading-tight mt-2">
                    Tailor the Message to Your Target Audience
                  </h3>
                </div>
                <div>
                  <p className="text-white font-Roboto_Condensed text-[16px] sm:text-[20px] font-bold leading-[28px]">
                    Consider who your target audience is and tailor your message
                    accordingly.
                  </p>
                  <p className="text-[#82869A] font-Inter text-sm md:text-base leading-relaxed mt-[10px] sm:mt-[20px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit
                    amet a sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Latest Works */}
          <div className="pt-[80px] sm:pt-[200px]">
            <div>
              <div className="flex flex-col gap-4 mb-[30px]">
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[30px] md:w-[40px] h-[1px] bg-primary2"></div>
                  <span className="text-primary2 font-Roboto_Condensed text-[12px] md:text-[14px] uppercase">
                    works
                  </span>
                </div>
                <h4 className="text-[28px] sm:text-[48px] md:text-[72px] font-bold leading-tight font-Roboto_Condensed text-white">
                  Check Out Our Latest Works
                </h4>
                <p className="text-sm md:text-base font-Inter text-[#82869A]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien aenean
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] mt-[30px]">
              {testData.map((item, index) => (
                <div key={index}>
                  <div className="w-full h-[200px] sm:h-[280px] md:h-[321px]">
                    <img
                      src={item.img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="px-[10px] bg-[gray] w-full absolute top-[-60px] sm:top-[-100px] pl-[20px] py-[15px]">
                      <p className="text-[18px] sm:text-[24px] md:text-[36px] font-bold font-Roboto_Condensed text-white">
                        {item.movieName}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-[10px]">
                        <p className="font-Inter text-sm md:text-base text-white">
                          {item.title}
                        </p>
                        <p className="font-Roboto_Condensed text-[16px] sm:text-[20px] font-bold text-white">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialCompo;
