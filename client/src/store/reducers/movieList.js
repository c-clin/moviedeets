import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movieList: [],
  movieSaved: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_SAVED:
      return {
        ...state,
        movieSaved: true
      };
    case actionTypes.MOVIE_UNSAVED:
      return {
        ...state,
        movieSaved: false
      };
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
