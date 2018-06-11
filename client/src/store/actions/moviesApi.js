import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchList = data => {
  return {
    type: actionTypes.FETCH_LIST,
    movieList: data
  };
};

export const onDeleteMovie = id => {
  return dispatch => {
    axios
      .delete(`/api/delete/${id}`)
      .then(res => {
        console.log('movie deleted');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const onSaveMovie = props => {
  let obj = {
    title: props.title,
    poster: props.poster,
    releaseDate: props.releaseDate,
    summary: props.summary
  };
  return dispatch => {
    axios
      .post('/api/add-movie', obj)
      .then(res => {
        dispatch({ type: actionTypes.MOVIE_SAVED });
      })
      .catch(error => alert(error.response.data.error));
  };
};

export const onFetchList = () => {
  return dispatch => {
    axios
      .get('/api/my-list')
      .then(res => {
        dispatch(fetchList(res.data));
      })
      .catch(err => console.log(err));
  };
};
