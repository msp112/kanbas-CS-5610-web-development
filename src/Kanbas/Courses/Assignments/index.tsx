import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { assignments } from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } from "./assignmentsReducer";
import Popup from "./popup";
import { useState } from "react";

export interface KanbasState {
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
    defaultAssignment: any;
  };
}



function Assignments() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Kanbas/Courses/${courseId}/Assignments/New`; 
    navigate(path);
  }
  const { courseId } = useParams();
  const [trigger, setTrigger] = useState(false);
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const defaultAssignment = useSelector((state: KanbasState) => state.assignmentsReducer.defaultAssignment);

   
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  return (

    <div className="flex-fill">
      {trigger && <Popup show = {setTrigger} />} 
                    <div className="d-flex justify-content-between">
                        <span><input className="search-assignments" placeholder="Search for Assignments"/></span>
                        <div>
                        <button type="button" className="group-button">+ Group</button>
                        <button type="button" className="group-button" id="assignment-group-button" onClick={() => {routeChange();
                        dispatch(setAssignment(defaultAssignment));}}>+ Assignment </button>
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
            

            {assignmentList.filter((assignment) => assignment.course === courseId)
            .map((assignment) => (
              
              <li className="list-group-item">
                <div className = "row py-1">
                <div className="col-1">
                
                <button className="edit-assignment-button"><FaEllipsisV className="me-2" /> </button>
                
                <button className="edit-assignment-button"><FiEdit/></button>
                </div>
                <div className = "col-10">
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><span onClick={() => dispatch(setAssignment(assignment))}>{assignment.title}</span></Link>
                   <p>{assignment.description} | Due: {assignment.due} | From: {assignment.available} | Until: {assignment.until} | {assignment.points}pts</p>
                </div>
                <div className="col-1 d-flex justify-content-end" id="left-size-assignment">
                  <button className="check-mark-button"><FaCheckCircle className="text-success" /></button> 
                  <button className="delete-button" onClick={() => {setTrigger(true);
                        dispatch(setAssignment(assignment));}}>Delete</button>
                  
                </div>
                  </div>
              </li>))}
          </ul>
        </li>
      </ul>
      </div>
);}
export default Assignments;