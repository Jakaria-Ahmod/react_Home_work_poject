import React from 'react';
import img from '../../../assets/img/indian.webp';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-primary1">
        <div className="flex items-center justify-center pb-[50px] sm:pb-[100px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-x-3.5 mb-[20px]">
              <div className="w-[40px] h-[1px] bg-primary2"></div>
              <div>
                <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                  contact
                </span>
              </div>
            </div>
            <h2 className="font-Roboto_Condensed text-[56px] sm:text-[72px] lg:text-[96px] font-bold leading-[60px] sm:leading-[80px] lg:leading-[101px] text-white">
              Contact
            </h2>
            <div className="flex items-center justify-center gap-x-[10px] sm:gap-x-[20px] mt-[10px] sm:mt-[20px]">
              <Link to="/">
                <IoHome size={13} color="white" />
              </Link>
              <Link
                className="text-white text-[12px] sm:text-[14px] font-bold uppercase"
                to="/"
              >
                Home
              </Link>
              <FaChevronRight size={13} color="white" />
              <Link
                className="text-white text-[12px] sm:text-[14px] font-bold uppercase"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-primary3">
        <div className="container">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center pb-[50px] sm:pb-[100px] pt-[50px] sm:pt-[100px]">
              {/* Left Section */}
              <div>
                <div className="flex items-center gap-x-3.5 mb-[20px]">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[12px] sm:text-[14px] uppercase">
                      About Us
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-Roboto_Condensed text-[36px] sm:text-[48px] lg:text-[72px] font-bold leading-[40px] sm:leading-[60px] lg:leading-[72px]">
                    Get In Touch
                  </h3>
                  <div className="flex gap-x-[5px] sm:gap-x-[10px] mt-[20px] sm:mt-[30px]">
                    <span className="text-primary4 text-[18px] sm:text-[20px] font-Roboto_Condensed font-bold leading-[24px] sm:leading-[30px]">
                      For more information, contact us at
                    </span>
                    <Link className="font-Roboto_Condensed text-[18px] sm:text-[20px] font-bold text-white leading-[24px] sm:leading-[30px]">
                      info@filmina.com
                    </Link>
                  </div>
                  <h4 className="text-white font-Roboto_Condensed text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-[30px] mt-[30px] mb-[20px]">
                    Keep in touch
                  </h4>
                  <p className="text-primary4 font-Source_Sans_Pro text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[30px] mt-[20px]">
                    768 Market Street San Francisco, CA 64015, United States
                  </p>
                  <div className="flex gap-x-[30px] sm:gap-x-[50px] mt-[20px]">
                    <Link className="text-primary4 font-Source_Sans_Pro text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[30px]">
                      info@filmina.com
                    </Link>
                    <Link className="text-primary4 font-Source_Sans_Pro text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[30px]">
                      (+021) 345 678 910
                    </Link>
                  </div>
                  <div className="w-full sm:w-[550px] h-[280px] rounded-[5px] overflow-hidden mt-[30px]">
                    <img
                      src={img}
                      alt="Contact Us"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div>
                <form
                  action=""
                  className="p-[20px] sm:p-[30px] bg-white w-full sm:w-[570px] rounded-[5px]"
                >
                  <h5 className="font-Roboto_Condensed text-primary3 font-bold leading-[40px] text-[28px] sm:text-[36px]">
                    Send us a message
                  </h5>
                  <p className="font-Inter text-[14px] sm:text-[16px] font-normal text-primary4 leading-[24px] sm:leading-[24px] mt-[20px] mb-[20px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit
                    amet a
                  </p>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border w-full px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] outline-0 mb-[20px]"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      name=""
                      id=""
                      className="border w-full px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] outline-0 mb-[20px]"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="border w-full px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] outline-0 mb-[20px]"
                    />
                    <textarea
                      name=""
                      placeholder="Message"
                      id=""
                      className="w-full h-[120px] sm:h-[154px] px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] border outline-0 mb-[20px]"
                    ></textarea>
                    <div>
                      <button className="py-[12px] sm:py-[17px] px-[20px] sm:px-[25px] bg-primary2 text-white text-[12px] sm:text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer mt-[20px] rounded-[5px]">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
