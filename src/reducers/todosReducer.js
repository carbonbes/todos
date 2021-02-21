import {
  TODO_REQUEST,
  TODO_SUCCESS,
  TODO_FAILED,
  SEARCH_BY_TODONAME,
  SEARCH_BY_COMPLETED,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  foundTodos: [],
  searchFilter: '',
  completedFilter: '',
  isFetching: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
      
    case TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isFetching: false,
      };

    case TODO_FAILED:
      return {
        ...state,
        isFetching: false,
      };

    case SEARCH_BY_TODONAME:
      state.searchFilter = action.payload.toLowerCase();
      const foundTodos = state.todos.filter((todo) => {
        return todo.title.toLowerCase().includes(state.searchFilter);
      });
      return {
        ...state,
        foundTodos: foundTodos,
      };

    case SEARCH_BY_COMPLETED:
      const selectedSorting = action.payload.toString();
      return {
        ...state,
        completedFilter: selectedSorting,
      };

    default:
      return {
        ...state,
      };
  }
};

export default todosReducer;
