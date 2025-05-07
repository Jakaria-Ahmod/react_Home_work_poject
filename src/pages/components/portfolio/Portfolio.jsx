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
        <div className="bg-primary1">
          <div className="flex items-center justify-center pb-[60px] md:pb-[100px] px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-x-3.5 mb-2">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  Our Portfolio
                </span>
              </div>
              <h2 className="text-[40px] sm:text-[64px] md:text-[96px] font-Roboto_Condensed font-bold text-white leading-tight">
                Our Portfolio
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-[10px] sm:gap-x-[20px] mt-[20px] text-white text-[14px] font-bold uppercase">
                <Link to="/">
                  <IoHome size={14} />
                </Link>
                <Link to="/">Home</Link>
                <FaChevronRight size={12} />
                <Link to="/works">Our Portfolio</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary3">
          <div className="container pt-[60px] md:pt-[100px] pb-[41px] px-4 md:px-0">
            <div className="mb-4">
              <div className="flex items-center gap-x-3.5 mb-2">
                <div className="w-[40px] h-[1px] bg-primary2"></div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  works
                </span>
              </div>
              <h3 className="text-[36px] sm:text-[48px] md:text-[72px] font-Roboto_Condensed font-bold leading-tight text-white">
                Check Out Our Latest Works
              </h3>
              <p className="font-Inter text-sm sm:text-base font-normal leading-[24px] text-primary4 mt-[10px] max-w-[700px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien aenean
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] mt-[30px]">
              {currentItems.map((item, indx) => (
                <div
                  key={indx}
                  className="rounded-[5px] overflow-hidden relative group"
                >
                  <img
                    src={item.img}
                    alt="portfolio-img"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-5 py-4">
                    <p className="text-[20px] sm:text-[28px] font-bold font-Roboto_Condensed text-white">
                      {item.movieName}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 mt-1">
                      <p className="text-white font-Inter text-sm sm:text-base">
                        {item.title}
                      </p>
                      <p className="text-white font-Roboto_Condensed text-sm sm:text-[18px] font-semibold">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center md:justify-end items-center mt-10 space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="w-[37px] h-[29px] bg-white text-black rounded hover:bg-opacity-80 disabled:opacity-40 transition"
              >
                &#8592;
              </button>
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(idx + 1)}
                  className={`w-[37px] h-[29px] text-sm rounded flex items-center justify-center font-semibold transition ${
                    currentPage === idx + 1
                      ? 'bg-primary4 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-[37px] h-[29px] bg-white text-black rounded hover:bg-opacity-80 disabled:opacity-40 transition"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
