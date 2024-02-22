import React from "react"; 
import { Link } from "react-router-dom"; 
import { courses } from "../Database";
import { IoMegaphoneOutline } from "react-icons/io5";
import "./index.css";

function Dashboard() {
  return (
    <div className="p-3">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (7)</h2> <hr />
      <div className="row">
        <div className="courses-rows row row-cols-1 row-cols-md-5 g-4 justify-content-left">

          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }} alt="Class"/>
                <div className="card-body">
                  <Link className="card.title" to={`/Kanbas/Courses/${course._id}/Home`}> {course.number} {course.name} </Link>
                  <br/>
                  <Link className="card-text-top" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course.number} {course.name} </Link>
                  <p className="card-text-bottom">Spring 2023 Semester {course.startDate} - {course.endDate} </p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    <IoMegaphoneOutline/> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;