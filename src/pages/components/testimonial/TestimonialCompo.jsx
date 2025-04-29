import React from 'react';
import img from '../../../assets/img/indian.webp';
import partnerBannerImg from '../../../assets/img/pratnerbanner.jfif';
import { testData } from './TestiData';

const TestimonialCompo = () => {
  return (
    <div>
      <div className="bg-primary1">
        <div className="flex items-center justify-center pb-[100px]">
          <div>
            <div className="flex items-center justify-center gap-x-3.5">
              <div className="w-[40px] h-[1px] bg-primary2"></div>
              <div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  our PoDrtfolio
                </span>
              </div>
            </div>
            <h2 className="text-center font-Roboto_Condensed text-[96px] font-bold leading-[101px] text-white">
              TV Commecial
            </h2>
            <p className="text-white font-Roboto_Condensed font-bold text-[14px] uppercase text-center mt-[20px]">
              commercials
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary3 pb-[100px] pt-[100px]">
        <section className="container">
          <div>
            <div className="w-[1170px] h-[658px] rounded-[5px] overflow-hidden">
              <iframe
                className="w-full h-full object-cover "
                src="https://www.youtube.com/embed/XJ_P97f0EtA?si=OE7iKUsIyQz5Qf2g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-2 5 order-2 gap-x-[50px] pt-[100px] pb-[100px">
                  <div>
                    <div className="flex items-center gap-x-3.5 ]">
                      <div className="w-[40px] h-[1px] bg-primary2"></div>
                      <div>
                        <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                          Keep it concise
                        </span>
                      </div>
                    </div>
                    <h3 className="text-white font-Roboto_Condensed text-[71px] leading-[72px] font-black">
                      TV Commercials are Typically Short, so it's Important
                    </h3>
                    <h4 className="text-primary4 font-Roboto_Condensed font-bold text-[24px] leading-[30px] mt-[30px] mb-[30px]">
                      Focus on the most important details about your portfolio
                      and convey them in a clear and straightforward manner.
                    </h4>
                    <p className="text-primary4 font-Inter text-base font-normal leading-[24px]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien. Aenean purus nunc, cursus in ante in,
                      vehicula facilisis dui. Integer consequat consectetur est
                      id blandit. Proin et magna blandit arcu pellentesque
                      scelerisque sit amet.{' '}
                    </p>
                  </div>
                  <div className="w-[570px] h-[524px]  rounded-[5px] overflow-hidden">
                    <img
                      src={img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 5 gap-x-[50px] pt-[100px] pb-[100px">
                  <div className="w-[570px] h-[524px] rounded-[5px] overflow-hidden">
                    <img
                      src={img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-3.5 ]">
                      <div className="w-[40px] h-[1px] bg-primary2"></div>
                      <div>
                        <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                          Visually
                        </span>
                      </div>
                    </div>
                    <h3 className="text-white font-Roboto_Condensed text-[71px] leading-[72px] font-black">
                      Make it Visually Appealing
                    </h3>
                    <h4 className="text-primary4 font-Roboto_Condensed font-bold text-[24px] leading-[30px] mt-[30px] mb-[30px]">
                      Your commercial should be visually appealing and engaging.
                      Use high-quality images or video to showcase
                    </h4>
                    <p className="text-primary4 font-Inter text-base font-normal leading-[24px]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien. Aenean purus nunc, cursus in ante in,
                      vehicula facilisis dui. Integer consequat consectetur est
                      id blandit. Proin et magna blandit arcu pellentesque
                      scelerisque sit amet.
                    </p>
                    <p className="text-primary4 font-Inter text-base font-normal leading-[24px] mt-[44px]">
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien. Aenean purus nunc, cursus in ante in,
                      vehicula facilisis dui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[100px] pb-[100px]">
              <div>
                <div className="w-[1170px] h-[500px]">
                  <img
                    src={partnerBannerImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-x-[30px] absolute top-[-150px] w-[1070px] p-[50px] bg-[#11121E] rounded-[3px]">
                    <div>
                      <div className="flex items-center gap-x-3.5">
                        <div className="w-[40px] h-[1px] bg-primary2"></div>
                        <div>
                          <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                            Audience
                          </span>
                        </div>
                      </div>
                      <h3 className="font-Roboto_Condensed text-[65px] font-bold leading-[72px] text-white">
                        Tailor the Message to Your Target Audience
                      </h3>
                    </div>
                    <div className="w-[441px]">
                      <p className="font-Roboto_Condensed text-[24px] font-bold text-white leading-[30px]">
                        Consider who your target audience is and tailor your
                        message accordingly.
                      </p>
                      <p className="font-Inter text-base font-normal leading-[24pxs] text-[#82869A] mt-[20px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit
                        amet a sapien. Aenean purus nunc, cursus in ante in,
                        vehicula facilisis dui. Integer consequat consectetur
                        est id blandit. Proin et magna blandit arcu pellentesque
                        scelerisque sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[200px] ">
              <div>
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
                      Proin et magna blandit arcu pellentesque scelerisque sit
                      amet a sapien aenean
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[30px] mt-[50px] rounded-[5px] overflow-hidden">
                {testData.map((item, index) => (
                  <div key={index}>
                    <div>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialCompo;
