import ModuleList from "./List";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
function Modules() {
  return (
    <div className="flex-fill">
    <div className="module-div container-fluid d-flex flex-column ">
          <div className="d-flex justify-content-end">
              <button type="button" className="group-button">Collapse All</button>
              <button type="button" className="group-button">Expand All</button>
              <button type="button" className="group-button">View Progress</button>
              <select id="Publish">
                  <option value="ALL">Publish All</option>
                  <option value="unpublish-all">Unpublish All</option>
              </select>
              <button type="button" className="group-button" id="module-button">+ Module</button>
              <button type="button" className="group-button"><FaEllipsisV/></button>

          </div>
                <hr/>

      <ModuleList />
    </div>
    </div>
  );
}
export default Modules;