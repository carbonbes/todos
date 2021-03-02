import React from "react";
import SortingTodosComponent from "./SortingTodosComponent";
import SearchTodosComponent from "./SearchTodosComponent";
import filterIcon from "../images/icons/filter.svg";

const SortingListCollapseComponent = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <h1 className="fw-bold">Мои задачи</h1>
        <button
          className="btn btn-outline-primary collapsed btn-sm ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <img src={filterIcon} />
        </button>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="row p-3 px-0">
          <div className="col">
            <SortingTodosComponent />
          </div>
          <div className="col">
            <SearchTodosComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingListCollapseComponent;
