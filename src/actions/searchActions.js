import { SEARCH_BY_ALPHABET, SEARCH_BY_TODONAME, SEARCH_BY_COMPLETED } from '../actions/actionTypes';

export const searchByAlphabet = () => {
  return {
    type: SEARCH_BY_ALPHABET
  };
};

export const searchByTodoName = (nameTodo) => {
  return {
    type: SEARCH_BY_TODONAME,
    payload: nameTodo
  };
};

export const searchByCompleted = (selectedSorting) => {
  return {
    type: SEARCH_BY_COMPLETED,
    payload: selectedSorting
  };
};