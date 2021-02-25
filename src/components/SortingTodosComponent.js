import React from "react";
import { useDispatch } from "react-redux";
import { searchByCompleted } from "../actions/searchActions";

const SortingTodosComponent = () => {
  const dispatch = useDispatch();

  return (
    <select
      className="form-select mb-3"
      aria-label="Default select example"
      onChange={(e) => {
        dispatch(searchByCompleted(e.target.value));
      }}
    >
      <option defaultValue value="">Все</option>
      <option value="true">Выполненные</option>
      <option value="false">Невыполненные</option>
    </select>
  );
};

export default SortingTodosComponent;
