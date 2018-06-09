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
      .catch(error => console.log(error));
  };
};
