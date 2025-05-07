// import React from 'react';
// import { workdata } from './WorksData';
// import { Link } from 'react-router';

// const Works = () => {
//   return (
//     <div className="bg-primary3">
//       <div className="container">
//         <section className="pb-[100px]">
//           <div className="flex justify-between mb-50px">
//             <div>
//               {' '}
//               <div className="flex items-center gap-x-3.5">
//                 <div className="w-[40px] h-[1px] bg-primary2"></div>
//                 <div>
//                   <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
//                     works
//                   </span>
//                 </div>
//               </div>
//               <h4 className="text-[72px] font-bold leading-[72px] font-Roboto_Condensed ] text-white ">
//                 Check Out Our Latest Works
//               </h4>
//               <p className="mt-[20px] text-base font-normal font-Inter leading-[24px] text-[#82869A]">
//                 Proin et magna blandit arcu pellentesque scelerisque sit amet a
//                 sapien aenean
//               </p>
//             </div>
//             <div>
//               <Link
//                 to="/works"
//                 className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer"
//               >
//                 View all works
//               </Link>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-[30px] mt-[50px] rounded-[5px] overflow-hidden">
//             {workdata.map((item, index) => (
//               <div key={index}>
//                 <div className="transform transition-transform duration-300 hover:scale-105">
//                   <div>
//                     <div className="w-[570px] h-[321px]">
//                       <img
//                         src={item.img}
//                         alt="img"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="relative">
//                     <div className="px-[5px] bg-[gray] w-full absolute top-[-100px] pl-[30px] py-[20px]">
//                       <p className="text-[36px] font-bold leading-[40px] font-Roboto_Condensed text-white ">
//                         {item.movieName}
//                       </p>
//                       <div className="flex items-center gap-x-[20px]">
//                         <p className="font-Inter text-base font-normal leading-[24px] text-white">
//                           {item.title}
//                         </p>
//                         <p className="font-Roboto_Condensed text-[20px] font-bold text-white">
//                           {item.year}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Works;

import React from 'react';
import { workdata } from './WorksData';
import { Link } from 'react-router';

const Works = () => {
  return (
    <div className="bg-primary3">
      <div className="container px-4 md:px-6 lg:px-0">
        <section className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="flex flex-col lg:flex-row justify-between gap-y-6 lg:items-end mb-[30px] md:mb-[50px]">
            <div>
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    works
                  </span>
                </div>
              </div>
              <h4 className="text-[32px] md:text-[48px] lg:text-[72px] font-bold leading-[40px] md:leading-[60px] lg:leading-[72px] font-Roboto_Condensed text-white mt-2">
                Check Out Our Latest Works
              </h4>
              <p className="mt-[12px] md:mt-[20px] text-sm md:text-base font-normal font-Inter leading-[22px] md:leading-[24px] text-[#82869A] max-w-[500px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>
            <div>
              <Link
                to="/works"
                className="inline-block py-[12px] md:py-[17px] px-[20px] md:px-[25px] bg-primary2 text-white text-[13px] md:text-[14px] font-bold uppercase font-Roboto_Condensed"
              >
                View all works
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] mt-[30px] md:mt-[50px]">
            {workdata.map((item, index) => (
              <div key={index} className="mt-[20px] md:mt-0">
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <div className="w-full h-[200px] md:h-[260px] lg:h-[321px] rounded-[5px] overflow-hidden">
                    <img
                      src={item.img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="px-[15px] sm:px-[20px] md:px-[30px] bg-[gray] w-full absolute top-[-100px] py-[12px] sm:py-[18px] md:py-[20px]">
                      <p className="text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[36px] font-Roboto_Condensed text-white">
                        {item.movieName}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-[20px]">
                        <p className="font-Inter text-sm md:text-base font-normal leading-[22px] md:leading-[24px] text-white">
                          {item.title}
                        </p>
                        <p className="font-Roboto_Condensed text-[16px] md:text-[20px] font-bold text-white">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
