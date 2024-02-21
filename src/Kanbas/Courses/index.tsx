import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaBinoculars } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2"; 
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import CustomBreadcrumb from "./Breadcrumb";


import Grades from "./Grades";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";

function Courses() {
    const { courseId, pageName } = useParams(); 
    const course = courses.find((course) => course._id === courseId);
    const {pathname} = useLocation(); 
    const currentLocation = pathname.split("/");


    return (

      <div className = "m">
        <div className="row d-none d-md-flex " id="breadcrumb-row">
          <div className="col-9">
          <CustomBreadcrumb/>
          </div>
          <div className="col-3">
          <button className="student-view"><FaBinoculars/>Student View</button>
          </div>
          <hr/>
    
        </div>

            
        
        <CourseNavigation />
        
        
        
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

      </div>
    );
  }
export default Courses; 