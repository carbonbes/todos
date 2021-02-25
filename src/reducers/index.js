import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import searchSortingReducer from './searchSortingReducer';

export default combineReducers({
  todosReducer,
  searchSortingReducer,
});