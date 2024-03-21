import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule
} from "./modulesReducer";
import store from "../../store";
import { Provider } from "react-redux";

interface Lesson {
  name: string;
}

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
}

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(modules[0]);
  return (

      <>
        <ul className="list-group wd-modules">
          <li id = "edit-screen">
       <button className = "group-button" id="add-group-button"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className = "group-button"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name} className = "module-name-input"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description} className="module-description-input"
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>

        
      </li>
          {modules.filter((module) => module.course === courseId)
          .map((module) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
              
                <FaEllipsisV className="me-2" />
                <b>{module.name}</b>
                <span className="float-end">
                <button className = "group-button"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className = "group-button"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <br></br>
                {module.description}

              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons.map((lesson: Lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">

                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </>
  );
}
export default ModuleList;