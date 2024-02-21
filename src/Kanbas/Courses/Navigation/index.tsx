import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdClose } from "react-icons/io";
import Example from "../Off-Canvas";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaClock, FaPlayCircle, FaQuestionCircle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Collapse from 'react-bootstrap/Collapse';



function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

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


      <span className="navbar-brand mb-0 h1" >CS5610<br/>Modules</span>
      <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
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
