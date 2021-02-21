import { TODO_REQUEST, TODO_SUCCESS, TODO_FAILED } from "./actionTypes";

export const requestTodo = () => {
  return {
    type: TODO_REQUEST
  };
};

export const successTodo = (data) => {
  return {
    type: TODO_SUCCESS,
    payload: data
  };
};

export const failedTodo = (data) => {
  return {
    type: TODO_FAILED,
    payload: data
  };
};