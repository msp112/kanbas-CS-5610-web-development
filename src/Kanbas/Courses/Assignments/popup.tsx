import React from "react";
import "./popup.css"; 
import { deleteAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

export interface KanbasState {
    assignmentsReducer: {
      assignments: any[];
      assignment: any;
      defaultAssignment: any;
    };
  }

function Popup({show}: {show: any}) {

    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    if (!show) {
        return <></>
    }

    return (
        <div className="overlay">
            <div className="dialog">
                <div className="title"> 
                
                </div>
                <div className="content">
                    <p><b>Are you sure you want to delete this assignment?</b></p>
                </div>
                <div className="popup-buttons">
                    <button className="cancel-button" onClick={() => show(false)}>Cancel</button>
                    <button className="confirm-button" onClick={() => {show(false);
                        dispatch(deleteAssignment(assignment._id));}}>Confirm</button>
                </div>
            </div>

        </div>
    )
} export default Popup;