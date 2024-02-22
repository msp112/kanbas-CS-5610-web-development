import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
import { FaBars, FaBinoculars, FaHome, FaPlug, FaPencilAlt, FaRocket, FaBook, FaMicrophone, FaClipboard, FaCog } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineViewModule } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Example from "../Off-Canvas";
import { useParams } from "react-router-dom";
import { courses } from "../../Database";
import { IoIosArrowDown } from "react-icons/io";
import { LuTarget } from "react-icons/lu";
import { SlSpeech } from "react-icons/sl";

import { FaTachometerAlt, FaRegUserCircle, FaRegCalendarAlt, FaClock, FaPlayCircle, FaQuestionCircle, FaRegSmile, FaFile, FaFolder, FaRegCircle  } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Collapse from 'react-bootstrap/Collapse';



function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes"];
  const linksTop = [{label: "Home", icon: <FaHome/> }, 
  {label: "Modules", icon: <MdOutlineViewModule/> }, 
  {label: "Piazza", icon: <FaPlug/>}, 
  {label: "Zoom Meetings", icon: <FaPlug/>}, 
  {label: "Assignments", icon: <FaPencilAlt/> }, 
  {label: "Quizzes", icon: <FaRocket/>}, 
  {label: "Grades", icon: <FaBook/>}, 
  {label: "People", icon: <FaRegSmile/>}, 
  {label: "Panopto Video", icon: <FaPlug/>}, 
  {label: "Discussions", icon: <SlSpeech/> }, 
  {label: "Announcements", icon: <FaMicrophone/>}, 
  {label: "Pages", icon: <FaFile/>}, 
  {label: "Files", icon: <FaFolder />}, 
  {label: "Rubrics", icon: <FaClipboard />}, 
  {label: "Outcomes", icon: <LuTarget/>}, 
];

  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const { courseId} = useParams(); 
  const course = courses.find((course) => course._id === courseId);
  const pathParts = pathname.split('/');
  const currentLocation = pathParts.slice(4,5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);

  const naviLinks = [
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
  return (
    <div>
    <div className="d-block d-sm-block d-md-none">
    <nav className="navbar navbar-dark bg-dark">
      <Button variant="primary" onClick={handleShow} className = "left-side-button-navi">
        <FaBars />
      </Button>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="left-navi-links">
      <ul className="navi-bar-links-left-list">
        {naviLinks.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} className="link-text" style={{ paddingTop: '20px' }}> {link.icon} {link.label} </Link>
        </li>
      ))}
      </ul>
        </Offcanvas.Body>
      </Offcanvas>


      <span className="navbar-brand mb-0 h1" >{course?.name} <br/>{currentLocation}</span>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} 
        className = "left-side-button-navi"
      >
        <FaBinoculars/><IoIosArrowDown/>
      </Button>
      <Collapse in={open}>
        <div id="navigation-course-dropdown" style={{ position: 'absolute', top: '100%' }}>
          <ul className="top-right-navi-bar">
        {linksTop.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/Courses/${courseId}/${link.label}`} className="link-text" style={{ paddingTop: '20px' }}> {link.icon} {link.label} </Link>
        </li>
      ))} </ul>
        </div>
      </Collapse>
    </nav>
    </div>
    <div className = "d-none d-md-block">
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}
export default CourseNavigation;
