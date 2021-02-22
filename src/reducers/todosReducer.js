import {
  TODO_REQUEST,
  TODO_SUCCESS,
  TODO_FAILED,
  SEARCH_BY_TODONAME,
  SEARCH_BY_COMPLETED,
} from "../actions/actionTypes";
import { searchByTodoName } from "../actions/searchActions";

const initialState = {
  todos: [],
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
      const searchNameTodos = action.payload;
      return {
        ...state,
        searchFilter: searchNameTodos,
      };

    case SEARCH_BY_COMPLETED:
      const selectedSorting = action.payload;
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
