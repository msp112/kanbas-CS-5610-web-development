import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import React from "react";
import {courses} from "./Database"; 
import {useState} from "react"; 
import { Provider } from "react-redux";
import store from "./store";


function Kanbas() {
  const [classes, setClasses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../images/reactjs.jpg"
  });
  const addNewCourse = () => {
    setClasses([...classes, { ...course, _id: new Date().getTime().toString() }]);
  };

  const deleteCourse = (courseId: string) => {
    setClasses(classes.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setClasses(
      classes.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
    return (
      <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation /> 
        <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              classes={classes}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />

          <Route path="Courses/:courseId/*" element={<Courses classes={classes} />} />
        </Routes>
        </div>
      </div>
      </Provider> 
    );
  } export default Kanbas; 
  
// since the Kanbas component consists of an entire application with lots of screens
// each implemented in several files, we've decided to use an entire folder to implement
// the component. It is common use the same name for the folder and component name, but
// it is not required.

//<Link to="/Labs/a3">A3</Link> |
//<Link to="/Kanbas">Kanbas</Link> |
//<Link to="/hello">Hello</Link> |