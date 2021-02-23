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

  const todos = useSelector((state) => state.todos);
  const searchingFilter = useSelector((state) => state.searchFilter);
  const completedFilter = useSelector((state) => state.completedFilter.toString());

  return (
    todos.length ? (
      <>
        <div className="row p-3 px-0 pb-0 bg-white sticky-top shadow-sm">
          <h1 className='fw-bold'>Мои задачи</h1>
          <div className="col pt-2">
            <SortingTodosComponent />
          </div>
          <div className="col pt-2">
            <SearchTodosComponent />
          </div>
        </div>
        <div className="row pt-2 bg-white">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                </tr>
              </thead>
                {todos
                  .filter((todo) => todo.title
                  .includes(searchingFilter.toLowerCase()) && todo.completed.toString()
                  .includes(completedFilter))
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
