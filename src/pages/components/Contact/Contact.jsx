import React from 'react';
import img from '../../../assets/img/indian.webp';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';
const Contact = () => {
  return (
    <div>
      <div className="bg-primary1">
        <div className="flex items-center justify-center pb-[100px]">
          <div>
            <div className="flex items-center justify-center gap-x-3.5">
              <div className="w-[40px] h-[1px] bg-primary2"></div>
              <div>
                <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                  contact
                </span>
              </div>
            </div>
            <h2 className="text-center font-Roboto_Condensed text-[96px] font-bold leading-[101px] text-white">
              Contact
            </h2>
            <div className="flex items-center justify-center gap-x-[20px] mt-[20px]">
              <Link to="/">
                {' '}
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
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary3">
        <div className="container">
          <section>
            <div className="grid grid-cols-2 items-center pb-[100px] pt-[100px]">
              <div>
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[40px] h-[1px] bg-primary2"></div>
                  <div>
                    <span className="text-primary2 font-Roboto_Condensed text-[14px] uppercase">
                      About Us
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-Roboto_Condensed text-[72px] font-bold leading-[72px]">
                    Get In Touch
                  </h3>
                  <div className="flex gap-x-[5px] mt-[30px]">
                    <span className="text-primary4 text-[24px] font-Roboto_Condensed font-bold leading-[30px]">
                      For more information, contact us at
                    </span>
                    <Link className="font-Roboto_Condensed text-[24px] font-bold text-white leading-[30px]">
                      info@filmina.com
                    </Link>
                  </div>
                  <h4 className="text-white font-Roboto_Condensed text-[36px] font-bold leading-[40px] mt-[30px] mb-[20px ]">
                    Keep in touch
                  </h4>
                  <p className="text-primary4 font-Source_Sans_Pro text-[20px] font-normal leading-[30px] mt-[20px]">
                    768 Market Street San Francisco, CA 64015, United States
                  </p>
                  <div className="flex gap-x-[50px]">
                    <Link className="text-primary4 font-Source_Sans_Pro text-[20px] font-normal leading-[30px] mt-[20px]">
                      info@filmina.com
                    </Link>
                    <Link className="text-primary4 font-Source_Sans_Pro text-[20px] font-normal leading-[30px] mt-[20px]">
                      (+021) 345 678 910
                    </Link>
                  </div>
                  <div className="w-[550px] h-[280px] rounded-[5px] overflow-hidden mt-[30px]">
                    <img
                      src={img}
                      alt="img"
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
              <div>
                <form
                  action=""
                  className="p-[30px] bg-white w-[570px] rounded-[5px]"
                >
                  <h5 className="font-Roboto_Condensed text-primary3 font-bold leading-[40px] text-[36px]">
                    Send us message
                  </h5>
                  <p className="font-Inter text-[16px] font-normal text-primary4 leading-[24px] mt-[20px] mb-[20px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit
                    amet a
                  </p>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border w-full px-[24px] py-[10px] outline-0 mb-[20px]"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      name=""
                      id=""
                      className="border w-full px-[24px] py-[10px] outline-0 mb-[20px]"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="border w-full px-[24px] py-[10px] outline-0 mb-[20px]"
                    />
                    <textarea
                      name=""
                      placeholder="Message"
                      id=""
                      className="w-full h-[154px] px-[24px] py-[10px] border outline-0"
                    ></textarea>
                    <div>
                      <button className="py-[17px] px-[25px] bg-primary2 text-white text-[14px] font-bold uppercase font-Roboto_Condensed cursor-pointer mt-[20px] rounded-[5px]">
                        send message
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
