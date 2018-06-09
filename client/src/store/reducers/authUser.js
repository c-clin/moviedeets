import * as actionTypes from '../actions/actionTypes';

const initialState = {
  auth: null
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        auth: action.payload || false
      };
    //    action.payload || false;
    default:
      return state;
  }
}
