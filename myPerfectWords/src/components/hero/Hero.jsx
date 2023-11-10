import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Calculator from "../calculator/Calculator";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper flex-wrap w-full md:flex justify-around mt-12 py-8 md:mt-[80px] ">
        <div className="py-0 pr-0 hero-left md:w-[60%] md:py-8  md:pr-12 ">
          <h3 className="text-blue-500 text-xl font-semibold px-2 ">
            Your Go-To Essay Writing Service for Top-Notch Papers!
          </h3>
          <h2 className="text-zinc-900 px-2 text-2xl md:text-5xl font-semibold py-8 md:leading-tight ">
            Outstanding Research and Affordable Writing Help Starting at just
            $11/Page
          </h2>

          <div className="hero-features ">
            <ul className="decoration-none flex flex-col md:flex md:flex-row">
              <li className="pr-3 py-2 px-2 md:px-0 text-zinc-900 font-semibold md:py-5">
                ✔ 250+ Qualified Writers
              </li>
              <li className="pr-3py-2 px-2 md:px-0 text-zinc-900 font-semibold md:py-5">
                ✔ 100% Plagiarism-free Papers
              </li>
              <li className="pr-3 py-2 px-2 md:px-0 text-zinc-900 font-semibold md:py-5">
                ✔ 50/50 Payment Terms
              </li>
            </ul>
          </div>

          <button className="ml-12 rounded md:ml-0 py-2 px-8 text-white text-lg font-semibold bg-blue-600 my-8 md:mt-8">
            Order Essay Now
          </button>
          <div className="hero-review flex flex-col ">
            <h2 className="font-bold text-xl my-4 mx-7 md:mx-0">
              Trusted by <span className="text-blue-600">30k+</span> Students
            </h2>
            <div className="review-website flex px-2 md:mx-0 justify-between  w-[300px] py-4 items-center">
              <div className="w-[130px] sitejabber flex  justify-between items-center">
                <div className="siteJabber-left flex">
                  <img
                    src="https://myperfectwords.com/new-land/homePage/images/banner-siteJabber.svg"
                    alt=""
                  />
                </div>
                <div className="sitejabber-right ">
                  <span className="px-1">4.6</span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />

                  <p>sitejabber</p>
                </div>
              </div>
              <div className="w-[130px] review-io flex  justify-between items-center">
                <div className="siteJabber-right flex">
                  <img
                    src="https://myperfectwords.com/new-land/homePage/images/banner-reviews-io.svg"
                    alt=""
                  />
                </div>
                <div className="sitejabber-right ">
                  <span className="px-1">4.6</span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FD8C04]"
                    style={{ fontSize: "0.75em" }}
                  />
                  <p>Reviews.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero left ends here  */}
        <div className="hero-right mt-12 ml-2 md:mr-5">
          <Calculator />
        </div>
        <hr className="border-t border-gray-300 w-[80%]" />
      </div>
    </>
  );
};

export default Hero;
