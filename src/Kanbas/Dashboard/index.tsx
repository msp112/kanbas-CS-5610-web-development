import {useState} from "react"; 
import { Link } from "react-router-dom"; 
import { courses } from "../Database";
import { IoMegaphoneOutline } from "react-icons/io5";
import "./index.css";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

type DashboardFunction = () => void;
type DashboardFunctionDelete = (courseId: string) => void;


function Dashboard( { classes, course, setCourse, addNewCourse, deleteCourse, updateCourse}:
  {classes: Course[];
  course: Course; 
  setCourse: React.Dispatch<React.SetStateAction<Course>>;
  addNewCourse: DashboardFunction; 
  deleteCourse: DashboardFunctionDelete; 
  updateCourse: DashboardFunction;}) {
   
  // const [classes, setClasses] = useState(courses);
  // const [course, setCourse] = useState({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg"
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //                       _id: new Date().getTime().toString() };
  //   setClasses([...classes, { ...classes, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setClasses(classes.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setClasses(
  //     classes.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };



  return (
    <div className="p-3">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({...course, name: e.target.value})}/>
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({...course, number: e.target.value})}/>
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({...course, endDate: e.target.value})}/>

      <button onClick={addNewCourse} className="editing-dashboard-button">
        Add
      </button>
      <button onClick={updateCourse} className="editing-dashboard-button" >
        Update
      </button>

      <h2>Published Courses ({classes.length})</h2> <hr />
      <div className="row">
        <div className="courses-rows row row-cols-1 row-cols-md-5 g-4 justify-content-start">
          {classes.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
              <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }} alt="Class"/>
                <div className="card-body">
                  <Link className="card.title" to={`/Kanbas/Courses/${course._id}/Home`}> {course.number} {course.name} </Link>
                  <br/>
                  <Link className="card-text-top" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course.number} {course.name} </Link>
                  <p className="card-text-bottom">Spring 2023 Semester {course.startDate} - {course.endDate} </p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn-primary">
                    <IoMegaphoneOutline/> </Link>
                    <button className="editing-dashboard-button" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>

                    <button className="editing-dashboard-button" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>

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