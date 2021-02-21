import React from "react";
import SortingTodosComponent from "./SortingTodosComponent";
import SearchTodosComponent from "./SearchTodosComponent";

const TodoEmptyAlertComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <SortingTodosComponent />
        </div>
        <div className="col">
          <SearchTodosComponent />
        </div>
      </div>
      <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading">Здесь ничего нет 😞</h4>
        <p className="mb-0">
          Попробуйте обновить страницу, изменить тип сортировки или ввести
          другое название задачи.
        </p>
      </div>
    </>
  );
};

export default TodoEmptyAlertComponent;
