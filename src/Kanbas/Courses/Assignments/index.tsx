import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (

    <div className="flex-fill">
                    <div className="d-flex justify-content-between">
                        <span><input className="search-assignments" placeholder="Search for Assignments"/></span>
                        <div>
                        <button type="button" className="group-button">+ Group</button>
                        <button type="button" className="group-button" id="assignment-group-button">+ Assignment</button>
                        <button className="group-button" id="ellisis-group-button"><FaEllipsisV/></button>
                    </div>
                </div>

    <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="assignment-header">
            <FaEllipsisV className="me-2" /> <IoIosArrowDown/> ASSIGNMENTS
            <span className="float-end">
              <button id="total-percent-button">40% of Total</button>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">

            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className = "row py-1">
                <div className="col-1">
                
                <button className="edit-assignment-button"><FaEllipsisV className="me-2" /> </button>
                
                <button className="edit-assignment-button"><FiEdit/></button>
                </div>
                <div className = "col-10">
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                   <p>Multiple Modules | {assignment.due} | 100pts</p>
                </div>
                <div className="col-1 d-flex justify-content-end" id="left-size-assignment">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </div>
                  </div>
              </li>))}
          </ul>
        </li>
      </ul>
      </div>
);}
export default Assignments;
