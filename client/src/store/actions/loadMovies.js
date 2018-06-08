import * as actionTypes from './actionTypes';
import axios from '../../axios-movies';
const apiKey = '6d5e6148e4b2ff6605ab0d7f0535a34e';

export const loadPopularMovies = data => {
  return {
    type: actionTypes.LOAD_POP_MOVIES,
    popularMovies: data
  };
};

export const loadRecentMovies = data => {
  return {
    type: actionTypes.LOAD_RECENT_MOVIES,
    nowPlayingMovies: data
  };
};

export const loadTopMovies = data => {
  return {
    type: actionTypes.LOAD_TOP_MOVIES,
    topRatedMovies: data
  };
};

export const loadUpcomingMovies = data => {
  return {
    type: actionTypes.LOAD_UPCOMING_MOVIES,
    upcomingMovies: data
  };
};

export const loadMoviesFailed = () => {
  return {
    type: actionTypes.LOAD_MOVIES_FAILED
  };
};

export const onLoadPopularMovies = () => {
  return dispatch => {
    let names = [];
    let posters = [];
    let ids = [];

    axios
      .get(
        `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`
      )
      .then(res => {
        let numOfResults = 12;
        let i = 0;
        let imgPath = 'https://image.tmdb.org/t/p/w780';

        while (i < numOfResults) {
          names[i] = res.data.results[i].title;
          posters[i] = imgPath + res.data.results[i].backdrop_path;
          ids[i] = res.data.results[i].id;
          i++;
        }
        let popularMovies = {
          name: names,
          poster: posters,
          id: ids
        };
        dispatch(loadPopularMovies(popularMovies));
      })
      .catch(err => {
        //console.log(err);
        dispatch(loadMoviesFailed());
      });
  };
};

export const onLoadNowPlaying = () => {
  return dispatch => {
    let names = [];
    let posters = [];
    let ids = [];

    axios
      .get(`/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => {
        let numOfResults = 12;
        let i = 0;
        let imgPath = 'https://image.tmdb.org/t/p/w780';
        while (i < numOfResults) {
          names[i] = res.data.results[i].title;
          posters[i] = imgPath + res.data.results[i].backdrop_path;
          ids[i] = res.data.results[i].id;
          i++;
        }
        let recentMovies = {
          name: names,
          poster: posters,
          id: ids
        };

        dispatch(loadRecentMovies(recentMovies));
      })
      .catch(err => {
        //console.log(err);
        dispatch(loadMoviesFailed());
      });
  };
};

export const onLoadTopMovies = () => {
  return dispatch => {
    let names = [];
    let posters = [];
    let ids = [];

    axios
      .get(`/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => {
        let numOfResults = 12;
        let i = 0;
        let imgPath = 'https://image.tmdb.org/t/p/w780';
        while (i < numOfResults) {
          names[i] = res.data.results[i].title;
          posters[i] = imgPath + res.data.results[i].backdrop_path;
          ids[i] = res.data.results[i].id;
          i++;
        }
        let topMovies = {
          name: names,
          poster: posters,
          id: ids
        };

        dispatch(loadTopMovies(topMovies));
      })
      .catch(err => {
        //console.log(err);
        dispatch(loadMoviesFailed());
      });
  };
};

export const onLoadUpcomingMovies = () => {
  return dispatch => {
    let names = [];
    let posters = [];
    let ids = [];

    axios
      .get(`/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => {
        let numOfResults = 12;
        let i = 0;
        let imgPath = 'https://image.tmdb.org/t/p/w780';
        while (i < numOfResults) {
          names[i] = res.data.results[i].title;
          posters[i] = imgPath + res.data.results[i].backdrop_path;
          ids[i] = res.data.results[i].id;
          i++;
        }
        let upcomingMovies = {
          name: names,
          poster: posters,
          id: ids
        };

        dispatch(loadUpcomingMovies(upcomingMovies));
      })
      .catch(err => {
        //console.log(err);
        dispatch(loadMoviesFailed());
      });
  };
};
