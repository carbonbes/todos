import {
  SEARCH_BY_TODONAME,
  SEARCH_BY_COMPLETED,
} from "../actions/actionTypes";

const initialState = {
  searchFilter: "",
  completedFilter: "",
};

const searchSortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_TODONAME:
      return {
        ...state,
        searchFilter: action.payload,
      };

    case SEARCH_BY_COMPLETED:
      return {
        ...state,
        completedFilter: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchSortingReducer;
