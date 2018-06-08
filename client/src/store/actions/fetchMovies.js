import * as actionTypes from './actionTypes';
import axios from '../../axios-movies';
import errorImage from '../../assets/images/404-image.png';
const apiKey = '6d5e6148e4b2ff6605ab0d7f0535a34e';

export const fetchMovie = data => {
  return {
    type: actionTypes.FETCH_MOVIE,
    movieDetails: data
  };
};

export const loadMovieSummary = data => {
  return {
    type: actionTypes.FETCH_MOVIE_SUMMARY,
    movieSummary: data
  };
};

export const loadCastNames = data => {
  return {
    type: actionTypes.FETCH_CAST_NAMES,
    castNames: data
  };
};

export const onFetchMovie = search => {
  return dispatch => {
    let names = [];
    let posters = [];
    let ids = [];

    axios
      .get(`/search/movie?api_key=${apiKey}&query=${search}`)
      .then(res => {
        let numOfResults = 8;
        let i = 0;
        let imgPath = 'https://image.tmdb.org/t/p/w780';

        while (i < numOfResults) {
          let image;
          res.data.results[i].backdrop_path
            ? (image = imgPath + res.data.results[i].backdrop_path)
            : (image = errorImage);

          console.log(image);
          names[i] = res.data.results[i].title;
          posters[i] = image;
          ids[i] = res.data.results[i].id;
          i++;
        }
        let movieDetails = {
          name: names,
          poster: posters,
          id: ids
        };
        dispatch(fetchMovie(movieDetails));
      })
      .catch(err => {
        //console.log(err);
        dispatch(fetchMoviesFailed());
      });
  };
};

export const onFetchMovieSummary = id => {
  return dispatch => {
    let title = '';
    let castNames = [];
    let summary = '';
    let releaseDate = '';
    let poster = '';
    let vote = '';
    let runtime = '';
    let certification = '';
    let homepage = '';
    let genres = [];

    // get movie details
    //api.themoviedb.org/3/movie/337167?api_key=6d5e6148e4b2ff6605ab0d7f0535a34e&language=en-US
    axios
      .get(
        `/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=releases`
      )
      .then(res => {
        // console.log(res);
        let imgPath = 'https://image.tmdb.org/t/p/w780';

        let rating = res.data.releases.countries.filter(
          obj => obj['iso_3166_1'] === 'US'
        );
        let usRating;
        rating.length !== 0
          ? (usRating = rating[0].certification)
          : (usRating = '');

        let genresList = res.data.genres.map(obj => obj.name);

        title = res.data.original_title;
        summary = res.data.overview;
        releaseDate = res.data.release_date;
        poster = imgPath + res.data.poster_path;
        vote = res.data.vote_average;
        runtime = res.data.runtime;
        certification = usRating;
        genres = genresList;
        homepage = res.data.homepage;

        let movieSummary = {
          title: title,
          summary: summary,
          releaseDate: releaseDate,
          poster: poster,
          rating: vote,
          runtime: runtime,
          certification: certification,
          genres: genres,
          homepage: homepage
        };

        dispatch(loadMovieSummary(movieSummary));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchMoviesFailed());
      });

    // get cast
    axios
      .get(`/movie/${id}/credits?api_key=${apiKey}`)
      .then(res => {
        let numOfResults = 4;
        let i = 0;

        while (i < numOfResults) {
          castNames[i] = res.data.cast[i].name;
          i++;
        }

        dispatch(loadCastNames(castNames));
      })
      .catch(err => {
        //console.log(err);
        dispatch(fetchMoviesFailed());
      });
  };
};

export const fetchMoviesFailed = () => {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED
  };
};
