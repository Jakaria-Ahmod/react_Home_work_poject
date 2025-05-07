import React from 'react';
import { blogData } from './BlogData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Blog = () => {
  return (
    <div className="bg-primary3 pt-[50px] pb-[100px]">
      <div className="container">
        <section>
          <div className="flex gap-x-[50px]">
            <div className="w-[286px]">
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    Blog
                  </span>
                </div>
              </div>
              <h5 className="font-Roboto_Condensed text-[72px] font-bold leading-[72px] text-white ">
                Our Latest Blog
              </h5>
              <p className="font-Inter text-base font-normal leading-[24px] text-primary4 mt-[30px] mb-[30px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc cursus in ante
              </p>
              <div>
                <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>

            {/* Swiper Component with Responsive Breakpoints */}
            <Swiper
              slidesPerView={1} // Default to 1 slide per view
              spaceBetween={30}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2, // Show 2 slides for small screens
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides for larger screens
                },
              }}
            >
              {blogData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[258px]">
                    <div className="w-[258px] h-[258px] rounded-[5px] overflow-hidden">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-Roboto_Condensed text-[24px] font-bold text-white leading-[30px] mt-[20px] mb-[10px]">
                        {item.title}
                      </h3>
                      <p className="font-Inter text-base font-normal text-primary4 leading-[24px]">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
