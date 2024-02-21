import ModuleList from "../Modules/List";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function Home() {
  return (
    <div className="flex-fill">
          <div className="d-flex justify-content-end">
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
        <div className="d-flex">
  <div className="row">
    <div className="col-9">
      <h2>Home</h2>
      <ModuleList />
    </div>

  <div className="col-3 justify-content-left" id="side-bar-buttons">
    <p className="course-status">Course Status</p>
        <button type="button" className="btn-pub"><i className="fa fa-ban" aria-hidden="true"></i> Unpublish</button>
        <button type="button" className="btn-pub" id="btn-publish"><i className="fa fa-check" aria-hidden="true"></i>Published</button>
            <button className="btn-status" id="btn-status-import-existing-content"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Import Existing Content</button>
            <button className="btn-status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i> Import From Commons</button>
            <button className="btn-status"><i className="fa fa-file-image-o" aria-hidden="true"></i> Choose Home Page</button>
            <button className="btn-status"><i className="fa fa-video-camera" aria-hidden="true"></i> View Course Stream</button>
            <button className="btn-status"><i className="fa fa-microphone" aria-hidden="true"></i> New Announcement</button>
            <button className="btn-status"><i className="fa fa-line-chart" aria-hidden="true"></i> New Analytics</button>
            <button className="btn-status"><i className="fa fa-envelope-open-o" aria-hidden="true"></i> View Course Notifications</button>
            <div>
            <p className="side-title">To Do</p>
          </div>
          <hr/>
          <ul className="list-group">
            <li className="list-group-item">
              <p className="grade-a1"><i className="fa fa-circle" aria-hidden="true"></i>Grade A1
                <i className="fa fa-window-close-o" aria-hidden="true"></i></p>
                  <p className="grade-a1-points">100 points • Jan 30 at 11:59pm</p>
            </li>
          </ul>
          <div className="coming-up-div">
            <p className="side-title">Coming up <i className="fa fa-calendar" aria-hidden="true"></i> View Calendar</p>
          </div>
            <hr/>
            <ul className="list-group">
            <li><div className="flex"><div><i className="fa fa-calendar" aria-hidden="true"></i></div> 
                  <div>Lecture <p className="calendar-lecture-name">CS4550.12631.202410<br/>Sep 7 at 11:45am</p></div></div></li>
                  <li><div className="flex"><div><i className="fa fa-calendar" aria-hidden="true"></i></div> 
                  <div><p className="calendar-lecture-name">CS4550.12631.202410<br/>Sep 11 at 11:45am</p></div></div></li>

              <li><div className="flex"><div><i className="fa fa-calendar" aria-hidden="true"></i></div> 
                <div>Lecture <p className="calendar-lecture-name">CS5610 SP23 Lecture<br/>Sep 11 at 6pm</p></div></div></li>


                
        </ul>

        </div> 
        </div> 
        </div> 
          </div>
          


    
  );
}
export default Home;
