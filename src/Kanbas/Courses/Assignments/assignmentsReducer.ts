import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { useParams } from "react-router-dom"; 

const initialState = {
    assignments: assignments,
    assignment: { "_id": "A101", "title": "Downloading React", "description": "Downloading React for Class","course": "CS101", "points": 100, "available": "Jan 1 at 12:00am", "until": "May 1", "due": "Jan 30 at 11:59pm"},
    defaultAssignment: { "_id": "A101", "title": "Downloading React", "description": "Downloading React for Class","course": "CS101", "points": 100, "available": "Jan 1 at 12:00am", "until": "May 1", "due": "Jan 30 at 11:59pm"} 
  };

  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        ); console.log(assignments)
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  
  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;
  