import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveMovie = (title, poster, year) => {
  let obj = {
    title,
    poster,
    year
  };
  return dispatch => {
    axios
      .post('/api/add-movie', obj)
      .then(res => {
        console.log('success :', res);
      })
      .catch(err => console.log(err));
  };
};

export const fetchList = data => {
  return {
    type: actionTypes.FETCH_LIST,
    movieList: data
  };
};

export const onFetchList = () => {
  return dispatch => {
    axios
      .get('/api/my-list')
      .then(res => {
        console.log(res.data);
        dispatch(fetchList(res.data));
      })
      .catch(err => console.log(err));
  };
};
