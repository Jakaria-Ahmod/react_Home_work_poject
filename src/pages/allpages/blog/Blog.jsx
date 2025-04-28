import React from 'react';

const Blog = () => {
  return (
    <div className="bg-primary3 pb-[100px]">
      <div className="container">
        <section>
          <div>
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
                Proin et magna blandit arcu pellentes scelerisque sit amet a
                sapien. Aenean purus nunc cursus in ante
              </p>
              <div>
                <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer">
                  learn more
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
