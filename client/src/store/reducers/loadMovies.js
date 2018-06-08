import * as actionTypes from '../actions/actionTypes';

const initialState = {
  popularMovies: {
    name: [],
    poster: [],
    id: []
  },
  nowPlayingMovies: {
    name: [],
    poster: [],
    id: []
  },
  topRatedMovies: {
    name: [],
    poster: [],
    id: []
  },
  upcomingMovies: {
    name: [],
    poster: [],
    id: []
  },
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POP_MOVIES:
      return {
        ...state,
        popularMovies: action.popularMovies,
        error: false
      };
    case actionTypes.LOAD_RECENT_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.nowPlayingMovies,
        error: false
      };
    case actionTypes.LOAD_TOP_MOVIES:
      return {
        ...state,
        topRatedMovies: action.topRatedMovies,
        error: false
      };
    case actionTypes.LOAD_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.upcomingMovies,
        error: false
      };
    case actionTypes.LOAD_MOVIES_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
