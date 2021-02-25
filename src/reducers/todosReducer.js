import {
  TODO_REQUEST,
  TODO_SUCCESS,
  TODO_FAILED,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
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

    default:
      return {
        ...state,
      };
  }
};

export default todosReducer;
