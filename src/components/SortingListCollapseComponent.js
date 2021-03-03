import React from "react";
import SortingTodosComponent from "./SortingTodosComponent";
import SearchTodosComponent from "./SearchTodosComponent";
import filterIcon from "../images/icons/filter.svg";

const SortingListCollapseComponent = () => {
  return (
    <>
      <div className="col d-flex align-items-center">
        <h1 className="fw-bold">Мои задачи</h1>
        <button
          type="button"
          className="btn btn-primary btn-sm ms-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          +
        </button>
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
      <div
        className="col modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingListCollapseComponent;
