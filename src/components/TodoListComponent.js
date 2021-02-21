import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestTodo } from "../actions/todoActions";
import SortingTodosComponent from "./SortingTodosComponent";
import SearchTodosComponent from "./SearchTodosComponent";
import TodoComponent from "./TodoComponent";
import TodoEmptyAlertComponent from "./TodoEmptyAlertComponent";

const TodoListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodo());
  }, []);

  const completedStatus = useSelector((state) => state.completedFilter.toString());
  const todos = useSelector((state) => state.foundTodos.length ? state.foundTodos : state.todos);

  return (
    todos.length ? (
      <>
        <div className="row">
          <div className="col">
            <SortingTodosComponent />
          </div>
          <div className="col">
            <SearchTodosComponent />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                </tr>
              </thead>
              {todos
                .filter((todo) => todo.completed.toString() == completedStatus || completedStatus == '')
                .map((todo) => <TodoComponent key={todo.id} todo={todo} />)}
            </table>
          </div>
        </div>
      </>
    ) : (
      <TodoEmptyAlertComponent />
    )
  );
};

export default TodoListComponent;
