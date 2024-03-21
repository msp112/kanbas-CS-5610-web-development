import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom"; 
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { assignments } from "../../../Database"; 
import { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } from "../assignmentsReducer";
  import { useSelector, useDispatch } from "react-redux";
import "./index.css";

export interface KanbasState {
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
}

function AssignmentEditor() {
    const { assignmentId } = useParams();
    console.log(assignmentId);
    const assignments = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
    //const assignment = assignments.find(
    //  (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const courseString = courseId?.toString(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    // const handleSave = () => {
    //   console.log("Actually saving assignment TBD in later assignments");
    //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    // };
    return (
      <>
      <div className="flex-fill" id="assignment-edit-screen">
        <div className="published-bar">
            <FaCheckCircle/> Published 
            <button className="button-edit" id="ellipsis-assignment-edit-button"><IoEllipsisVertical/></button>
        </div>
        <hr></hr>
        <p className="assignment-name-header">Assignment Name</p>
        <input value={assignment?.title}
               className="form-control mb-2" onChange={(e) =>
                dispatch(setAssignment({ ...assignment, title: e.target.value }))}/>
          <textarea className="form-control" id="assignment-description" value={assignment?.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))}></textarea>
                  <div className="container-input">
                    <div className="row">
                      <div className="col-3">Points</div>
                      <div className="col-7"><input type="number" className="form-control"
                        value={assignment?.points} onChange={(e) =>
                          dispatch(setAssignment({ ...assignment, points: e.target.value }))}/></div>
                    </div>
                    <div className="row">
                      <div className="col-3">Assignment Group</div>
                          <div className="col-7">
                          <select id="assignment-group" className="form-select">
                              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                          </select>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                          Display Grade as </div>
                          <div className="col-7">
                          <select id="display-grade-as" className="form-select">
                              <option value="PERCENTAGE">Percentage</option>
                          </select>
                        </div>
                      </div>
                      
                        <div className="row">
                          <div className="col-3">
                            Assign
                          </div>
                          <div className="col-7">
                            <label className="form-control">Assign to
                              <textarea className="form-select" >Everyone</textarea>
                              <label className="assign-info">Due</label>
                              <input type="date" className="form-control" onChange={(e) =>
                          dispatch(setAssignment({ ...assignment, due: e.target.value }))}/> 
                              <div className="row"> 
                                <div className="col-6">
                                  <label className="assign-info">Available from</label>
                                  <input type="date" className="form-control" onChange={(e) =>
                          dispatch(setAssignment({ ...assignment, available: e.target.value }))}/>
                                </div>
                                <div className="col-6">
                                  <label className="assign-info">Until</label>
                                  <input type="date" value="2021-01-01" className="form-control" onChange={(e) =>
                          dispatch(setAssignment({ ...assignment, until: e.target.value }))}/>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <hr/> 
                        <div className="d-flex justify-content-between" id="assignment-edit-button-bottom">
                          <span>
                            <input type="checkbox"/> Notify users the content has changed
                          </span>
                          <span>
                          <button  onClick={() => {
                            if (assignmentId === "New") {
                              dispatch(addAssignment({...assignment, assignmentId: {assignmentId}, course: courseString}));
                              console.log(assignments)
                              navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                            } else {
                              dispatch(updateAssignment(assignment));
                              console.log(assignment)
                              navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                            }
                              
                            }} className="btn btn-success ms-2 float-end" id="button-edit-save">
                            Save
                            </button>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn btn-danger float-end" id="button-edit-cancel">
                            Cancel
                            </Link>
                          </span>
                          
                          </div>

      </div>
      </div>
      </>
    );
  }
  export default AssignmentEditor;
  