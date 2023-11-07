import React,{useState} from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import ResponsiveMenu from '../responsiveHeader/ResponsiveHeader';
const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
  return (
    <>
      {/* header main container */}
      <div className="main-wrapper w-full  ">
        {/* header-wrapper */}
        <div className="header-container flex justify-between xl:justify-evenly items-center h-30 py-3 px-2">
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
                <ul className="dropdown-menu hidden absolute top-full left-0 bg-white border border-gray-300 rounded-md p-2 mt-2 space-y-2">
                  <li>
                    <a href="#">Service 1</a>
                  </li>
                  <li>
                    <a href="#">Service 2</a>
                  </li>
                  <li>
                    <a href="#">Service 3</a>
                  </li>
                </ul>
              </li>
              <li className="px-4">
                <a href="#" id="menu-item-dropdown">
                  Best Offers
                </a>
              </li>
              <li className="px-4">
                <a href="#">Compnay</a>
              </li>
              <li className="px-4">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* menu item div ends here */}

          {/* order div starts here */}
          <div className=" hidden order-signUp xl:block  ">
            <button className="border-2 px-3 py-1 border-slate-900">
              AI Essay Writers
            </button>
            <button className=" mx-2 px-3 py-1 bg-[#2D96EE] text-white rounded hover:bg-[#1150CA] hover:cursor-pointer">
              Order Now
            </button>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
