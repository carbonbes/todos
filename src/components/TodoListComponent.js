import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestTodo } from "../actions/todoActions";
import TodoComponent from "./TodoComponent";
import SortingListCollapseComponent from "./SortingListCollapseComponent";

const TodoListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodo());
  }, []);

  const todos = useSelector((state) => state.todosReducer.todos);
  const searchingFilter = useSelector((state) => state.searchSortingReducer.searchFilter);
  const completedFilter = useSelector((state) => state.searchSortingReducer.completedFilter.toString());

  return (
    <>
      <div className="row p-3 px-0 pb-2 bg-white sticky-top shadow-sm">
        <SortingListCollapseComponent />
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
              .filter((todo) =>
                  todo.title.includes(searchingFilter.toLowerCase()) &&
                  todo.completed.toString().includes(completedFilter)
              ).map((todo) => (
                <TodoComponent key={todo.id} todo={todo} />
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default TodoListComponent;
