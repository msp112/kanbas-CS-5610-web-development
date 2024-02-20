import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2"; 
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

import Grades from "./Grades";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";

function Courses() {
    const { courseId } = useParams(); 
    const course = courses.find((course) => course._id === courseId);
    return (
    //   <div class="d-none d-md-flex justify-content-between align-items-center">
    //   <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    //     <ol class="breadcrumb">
    //       <li class="breadcrumb-item">
    //         <i class="fa fa-align-justify" aria-hidden="true" style="color: #D41B2C; margin-right:10px;"></i>
    //         <a href="/Kanbas/Courses/Home/screen.html" style="text-decoration:none;">CS5610.36915.202430</a>
    //       </li>
    //       <li class="breadcrumb-item active" aria-current="page">Home</li>
    //     </ol>
    //   </nav>
    //   <button class="btn-top"><i class="fa fa-binoculars" aria-hidden="true"></i> Student View</button>
    // </div>
    // <hr class="d-none d-md-block"></hr>
      <div className = "m">
        <div className = "breadcrumb"> 
          <p className="breadcrumb-title"><HiMiniBars3 /> {course?.name} SP23</p>
          
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