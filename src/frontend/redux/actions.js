const Actions = {}

export const SET_NAME = "SET_NAME"
export const GET_LIST = "GET_LIST"
export const ADD_LIST = "ADD_LIST"


Actions.setName = function setName(selected_name) {
  return {
    type: SET_NAME,
    selected_name
  }
}

Actions.addList = function addList(list) {
  return {
    type: ADD_LIST,
    payload: {list}
  }
}

Actions.getList = function getList() {
  return dispatch => {
    /* mocking api call - don't change */
    const list = ["Wendy", "Cole", "James", "Radu"]
    setTimeout(function() {
      dispatch({
        type: GET_LIST,
        payload: {
          list
        }
      })
     }, 1500);
    // /* End mock */
  }
}

export default Actions
