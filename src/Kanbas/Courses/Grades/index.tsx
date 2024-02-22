import React from "react";
import { assignments, enrollments, grades, users } from "../../Database";
import { FaFile, FaDownload, FaCog, FaFilter, FaKeyboard, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import "./index.css"; 

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (

      <div className="flex-fill" id="grade-screen">
      <div className="d-flex justify-content-between">
      <div>
        <button className="clear-button" id="gradebook-button">Gradebook <IoIosArrowDown/></button>
      </div>
      <div className="d-flex">
        <button type="button" className="clear-button"><FaKeyboard/></button>
        <button type="button" className="grade-button"> <FaFile/> Import</button>
        <button type="button" className="grade-button"> <FaDownload/> Export <IoIosArrowDown/> </button>
        <button type="button" className="grade-button"><FaCog/></button>
      </div>
    </div>

                <div className="row">
                    <div className="col-6">
                    <p className="search-bar-title">Student Names</p>
                    <div className="button-search">
                      <button className="clear-button" id="search-button"><FaSearch/></button>
                      <input 
                      placeholder="Search Students" className="form-select"
                      id="student-search"></input> 
                    </div>

                    </div>
                <div className="col-6">
                    <p className="search-bar-title">Assignment Names</p>
                    <div className="button-search">
                      <button className="clear-button" id="search-button"><FaSearch/></button>
                      <input 
                      placeholder="Search Students" className="form-select"
                      id="student-search"></input> 
                    </div>
                    </div>
                </div>
                <button type="button" className="grade-button"> <FaFilter/> Apply Filters</button>
      <div className="table-responsive">
        <table className="grade-book">
          <thead>
            <tr>
              <th className="table-title" id = "student-name-grade-head">Student Name</th>
              {as.map((assignment) => (
                <th className="each-assignment" key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);

              return (
                <tr className= "each-student" key={enrollment.user}>
                  <td className="each-student" id="each-student">{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    console.log('Assignment:', assignment._id);
                    console.log('Grade:', grade?.grade || "");
                    console.log('Student:', grade?.student);
                    return <td className = "each-grade" key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
