import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movieDetails: {
    name: [],
    releasedDate: [],
    summary: [],
    poster: [],
    voteAvg: [],
    id: []
  },
  movieSummary: {
    title: null,
    summary: null,
    releaseDate: null,
    poster: null,
    rating: null,
    runtime: null,
    certification: null,
    genres: null,
    homepage: null
  },
  castNames: [],
  modalShow: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE:
      return {
        ...state,
        movieDetails: action.movieDetails,
        error: false
      };
    case actionTypes.FETCH_MOVIE_SUMMARY:
      return {
        ...state,
        movieSummary: action.movieSummary,
        modalShow: true
      };
    case actionTypes.FETCH_CAST_NAMES:
      return {
        ...state,
        castNames: action.castNames
      };
    case actionTypes.FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.TURN_OFF_MODAL:
      return {
        ...state,
        modalShow: false,
        movieSummary: {
          title: '',
          summary: '',
          releaseDate: '',
          poster: '',
          rating: '',
          runtime: '',
          homepage: ''
        },
        castNames: []
      };
    default:
      return state;
  }
};

export default reducer;
