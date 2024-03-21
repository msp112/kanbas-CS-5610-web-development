import { Link, useLocation } from "react-router-dom";
import "./index.css";
import Northeastern_logo from "./Northeastern_logo.png"; 
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaClock, FaPlayCircle, FaQuestionCircle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <CiMail className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaPlayCircle className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className = "d-none d-md-block">
    <ul className="wd-kanbas-navigation">
      <li><img src={Northeastern_logo} alt="NortheasternLogo" className="NortheasternLogo"></img></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;