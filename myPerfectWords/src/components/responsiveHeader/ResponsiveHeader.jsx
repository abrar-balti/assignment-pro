import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faEnvelope,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./ResponsiveHeader.css";

const ResponsiveMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="xl:hidden relative">
      <div className="humberger ">
        <button onClick={toggleMenu} className="text-gray-600">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col flex-wrap px-2 min-h-screen bg-white border border-blue-300 rounded-sm">
          <div className="mobile-logo">
            <img
              src="https://myperfectwords.com/new-land/images/mpw-service-logo.svg"
              alt=""
              className="w-[150px] my-3"
            />
          </div>
          <div className="mobile-menu my-3  ">
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://myperfectwords.com/images/ai-essay-writer-icon.svg"
                    alt=""
                  />
                  Our Writers
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img
                    src="https://myperfectwords.com/images/pricing-icon.svg"
                    alt=""
                  />
                  Pricing
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img
                    src="https://myperfectwords.com/images/nav-pen.svg"
                    alt=""
                  />
                  Services
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://myperfectwords.com/images/company.svg"
                    alt=""
                  />
                  Best Offers
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://myperfectwords.com/images/company.svg"
                    alt=""
                  />
                  Company
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://myperfectwords.com/images/blogIcon.svg"
                    alt=""
                  />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-section  flex flex-col flex-wrap my-3">
            <button className="bg-blue-600 text-white font-bold rounded-3xl py-3 px-4 my-5">
              {" "}
              Sign Up Now
            </button>
            <span className="flex items-center my-2">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              <p className="px-2">info@assignmentpro.com</p>
            </span>
            <span className="flex items-center  my-2">
              <FontAwesomeIcon icon={faPhone} size="1x" />
              <p className="px-2">+1-345-4432-543</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
