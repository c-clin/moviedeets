import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movieList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        movieList: action.movieList
      };
    default:
      return state;
  }
};

export default reducer;
