import React from "react";
import { useDispatch } from "react-redux";
import { searchByTodoName } from "../actions/searchActions";

const SearchTodosComponent = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Поиск"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e) => {
        dispatch(searchByTodoName(e.target.value));
      }}
    />
  );
};

export default SearchTodosComponent;
