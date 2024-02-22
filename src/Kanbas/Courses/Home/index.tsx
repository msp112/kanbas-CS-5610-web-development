import ModuleList from "../Modules/List";
import { TiCancelOutline } from "react-icons/ti";
import { IoMdCheckmark, IoMdClose  } from "react-icons/io";
import { FaEllipsisV, FaArrowCircleRight, FaFileImage, FaMicrophone, FaChartLine, FaRegEnvelopeOpen, FaCalendar, FaCircle } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className = "row" id="breadcrumb-space"></div>
        <div className="d-flex">
          <div className="row">
            <div className="col-8 d-none d-md-block">
              
            <div className="d-flex justify-content-center">
              <button type="button" className="btn-top">Collapse All</button>
              <button type="button" className="btn-top">Expand All</button>
              <button type="button" className="btn-top">View Progress</button>
              <select id="Publish">
                  <option value="ALL">Publish All</option>
                  <option value="unpublish-all">Unpublish All</option>
              </select>
              <button type="button" className="btn-top" id="btn-module">+ Module</button>
              <button type="button" className="btn-top"><FaEllipsisV/></button>
        </div>
              <ModuleList />
    </div>
    <div className="d-small-block d-md-none">
                    
    <div className="d-flex justify-content-center">
              <button type="button" className="btn-top">Collapse All</button>
              <button type="button" className="btn-top">Expand All</button>
              <button type="button" className="btn-top">View Progress</button>
              <select id="Publish">
                  <option value="ALL">Publish All</option>
                  <option value="unpublish-all">Unpublish All</option>
              </select>
              <button type="button" className="btn-top" id="btn-module">+ Module</button>
              <button type="button" className="btn-top"><FaEllipsisV/></button>
        </div>
              <ModuleList />
    </div>

  <div className="col-3 d-none d-md-block" id="side-bar">
    <div className = "title-and-publish-buttons">
    <p className="course-status">Course Status</p>
        <button type="button" className="btn-pub"><TiCancelOutline/> Unpublish</button>
        <button type="button" className="btn-pub" id="btn-publish"> <IoMdCheckmark/> Published</button>
        </div>
            <button className="btn-status" id="btn-status-import-existing-content"> <FaArrowCircleRight/> Import Existing Content</button>
            <button className="btn-status"><FaRegCircleDot/> Import From Commons</button>
            <button className="btn-status"><FaFileImage/> Choose Home Page</button>
            <button className="btn-status"><HiVideoCamera/> View Course Stream</button>
            <button className="btn-status"><FaMicrophone/> New Announcement</button>
            <button className="btn-status"><FaChartLine/> New Analytics</button>
            <button className="btn-status"><FaRegEnvelopeOpen/> View Course Notifications</button>
        <div>
          <p className="side-title">To Do</p>
        </div>
          <hr/>
          <ul className="list-group">
            <li className="list-group-item">
              <p className="grade-a1"><FaCircle/>Grade A1 <IoMdClose/>
                </p>
                  <p className="grade-a1-points">100 points • Jan 30 at 11:59pm</p>
            </li>
          </ul>
          <div className="coming-up-div">
            <p className="side-title">Coming up <FaCalendar/> View Calendar</p>
          </div>
            <hr/>
            <ul className="list-group">
            <li><div className="flex"><div><FaCalendar/></div> 
                  <div>Lecture <p className="calendar-lecture-name">CS4550.12631.202410<br/>Sep 7 at 11:45am</p></div></div></li>
                  <li><div className="flex"><div><FaCalendar/></div> 
                  <div><p className="calendar-lecture-name">CS4550.12631.202410<br/>Sep 11 at 11:45am</p></div></div></li>

              <li><div className="flex"><div><FaCalendar/></div> 
                <div>Lecture <p className="calendar-lecture-name">CS5610 SP23 Lecture<br/>Sep 11 at 6pm</p></div></div></li>


                
        </ul>

        </div> 
        </div> 
        </div> 
          </div>
          


    
  );
}
export default Home;
