import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import ResponsiveMenu from "../responsiveHeader/ResponsiveHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* header main container */}
      <div className="main-wrapper w-full  shadow-lg fixed top-0 z-2 bg-white">
        {/* header-wrapper */}
        <div className="header-container flex justify-between xl:justify-evenly items-center h-30 py-3 px-2 " >
          {/* logo div starts */}
          <div className="logo">
            <img
              src="https://myperfectwords.com/new-land/images/mpw-service-logo.svg"
              alt=""
            />
          </div>
          {/* logo div ends here */}
          {/* Include the responsive menu component */}
          <ResponsiveMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {/* menu items div starts here */}
          <div className="hidden xl:block menu-items text-gray-600 font-semibold">
            <ul className="md:flex  ">
              <li className="px-4">
                <a href="#">Our Writers</a>
              </li>
              <li className="px-4">
                <a href="#">Pricing</a>
              </li>
              <li className="px-4 relative group">
                <a
                  href="#"
                  id="menu-item-dropdown"
                  className="group-hover:text-blue-600"
                >
                  Services
                </a>
                <ul className="dropdown-menu hidden absolute w-[200px] p-2 border border-blue-300 rounded-md  text-sm bg-white shadow">
                  <li className="">
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                  <li>
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                  <li>
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                  <li>
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                  <li>
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                  <li>
                    <a href="#">Argumentive Essay Writing</a>
                  </li>
                </ul>
              </li>
              <li className="px-4  group">
                <a
                  href="#"
                  id="menu-item-dropdown"
                  className="group-hover:text-blue-600"
                >
                  Best Offers
                </a>
                <ul className="dropdown-menu hidden absolute w-[150px] p-2 border border-blue-300 rounded-md  text-sm bg-white shadow ">
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                  <li>
                    <a href="#">Buy Research Paper</a>
                  </li>
                </ul>
              </li>
              <li className="px-4 relative group">
                <a href="#" id="menu-item-dropdown">
                  Compnay
                </a>
                <ul className="dropdown-menu hidden absolute w-[100px] p-2 border border-blue-300 rounded-md  text-sm bg-white shadow">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Why Us</a>
                  </li>
                  <li>
                    <a href="">Other</a>
                  </li>
                </ul>
              </li>
              <li className="px-4">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* menu item div ends here */}

          {/* order div starts here */}
          <div className=" hidden order-signUp  xl:flex items-center ">
            <button className="border px-3 py-1 border-slate-900 hover:bg-[#2D96EE] hover:text-white hover:rounded-sm hover:border-[#2D96EE]">
              AI Essay Writers
            </button>
            <button className=" mx-2 px-3 py-1 bg-[#2D96EE] text-white rounded hover:bg-[#1150CA] hover:cursor-pointer">
              Order Now
            </button>
            <div className="user-icon relative group">
              <FontAwesomeIcon
                icon={faUser}
                className="user-icon menu-item-dropdown hover:cursor-pointer"
              />
              <ul className="dropdown-menu hidden absolute right-0 w-[80px] p-2 border border-blue-300 rounded-md text-sm my-4 menu-items font-semibold text-gray-600 bg-white shadow">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
          {/* order div closes here */}
        </div>
      </div>
    </>
  );
};

export default Header;
