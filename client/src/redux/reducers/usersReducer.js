import { SELECTED_USER } from "../actions/usersActions.js";

const initialState = {
  selectedUser: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
