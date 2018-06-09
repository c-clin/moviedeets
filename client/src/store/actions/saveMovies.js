import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveMovie = values => {
  return dispatch => {
    axios.get('/api/current_user', values).then(res => {
      console.log('success :', res);
    });
  };
};
