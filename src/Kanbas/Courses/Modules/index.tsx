import ModuleList from "./List";
import { FaEllipsisV } from "react-icons/fa";
function Modules() {
  return (
    <>
    <div className = "row" id="breadcrumb-space"></div>
    <div className="module-div">
          <div className="flex-fill">
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
                </div>
                <hr/>

      <ModuleList />
    </div>
    </>
  );
}
export default Modules;
