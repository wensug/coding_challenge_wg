import { combineReducers } from "redux";

import { SET_NAME, GET_LIST, ADD_LIST } from "./actions";

function names(
  state = {
    list: [],
    selected_name: "Cole"
  },
  action
) {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        selected_name: action.selected_name
      });
    case GET_LIST:
      return Object.assign({}, state, {
        list: action.payload.list
      });
    case ADD_LIST:
      console.log(action.payload.list)
      return Object.assign({}, state, {
        list: action.payload.list
      });

    default:
      return state;
  }
}

const reducers = combineReducers({
  names
});

export default reducers;
