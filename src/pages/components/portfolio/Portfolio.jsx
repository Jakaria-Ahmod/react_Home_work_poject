import React, { useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { portfoliData } from './portfolioData';
import { Link } from 'react-router';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(portfoliData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfoliData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section>
        <div>
          <div className="bg-primary1">
            <div className="flex items-center justify-center pb-[100px]">
              <div>
                <div className="flex items-center justify-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      Our Portfolio
                    </span>
                  </div>
                </div>
                <h2 className="text-center font-Roboto_Condensed text-[96px] font-bold leading-[101px] text-white">
                  Our Portfolio
                </h2>
                <div className="flex items-center justify-center gap-x-[20px] mt-[20px]">
                  <Link to="/">
                    <IoHome size={13} color="white" />
                  </Link>
                  <Link
                    className="text-white text-[14px] font-bold uppercase"
                    to="/"
                  >
                    Home
                  </Link>
                  <FaChevronRight size={13} color="white" />
                  <Link
                    className="text-white text-[14px] font-bold uppercase"
                    to="/works"
                  >
                    Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div className="bg-primary3">
            <div className="container pt-[100px] pb-[41px]">
              <div className="flex items-center gap-x-3.5">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <div>
                  <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                    works
                  </span>
                </div>
              </div>
              <h3 className="text-[72px] font-Roboto_Condensed font-bold leading-[72px] text-white">
                Check Out Our Latest Works
              </h3>
              <p className="font-Inter text-base font-normal leading-[24px] text-primary4 mt-[20px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>

              {/* Portfolio Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px] rounded-[5px] overflow-hidden">
                {currentItems.map((item, indx) => (
                  <div key={indx}>
                    <div className="w-full h-[321px]">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative">
                      <div className="px-[5px] bg-gray-700 w-full absolute top-[-100px] pl-[30px] py-[20px]">
                        <p className="text-[36px] font-bold leading-[40px] font-Roboto_Condensed text-white">
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
                ))}
              </div>

              {/* Pagination Buttons */}
              <div className="flex justify-end items-center mt-10 space-x-2">
                {/* Prev Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="w-[37px] h-[29px] bg-white text-black rounded-[5px]  hover:bg-opacity-80 disabled:opacity-40 transition"
                >
                  &#8592;
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageClick(idx + 1)}
                    className={`w-[37px] h-[29px]  text-black rounded-[5px] flex items-center justify-center font-semibold transition
                    ${
                      currentPage === idx + 1
                        ? 'bg-primary4 text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="w-[37px] h-[29px] bg-white text-black rounded-[5px] text-[18px] hover:bg-opacity-80 disabled:opacity-40 transition"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
