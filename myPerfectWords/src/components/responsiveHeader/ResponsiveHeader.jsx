import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
const ResponsiveMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="xl:hidden">
      <button onClick={toggleMenu} className="text-gray-600">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {isMenuOpen && (
        <div className="bg-white mt-3 p-4 border border-gray-300 rounded-md">
          <ul>
            <li>
              <a href="#">Our Writers</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Best Offers</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;