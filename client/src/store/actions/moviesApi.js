import * as actionTypes from './actionTypes';
import axios from 'axios';

// export const saveMovie = () => {
//   return {

//   }
// }

export const fetchList = data => {
  return {
    type: actionTypes.FETCH_LIST,
    movieList: data
  };
};

export const onSaveMovie = props => {
  console.log(props);

  let obj = {
    title: props.title,
    poster: props.poster,
    releaseDate: props.releaseDate,
    // certification: props.certification,
    cast: props.castNames,
    summary: props.summary
  };
  return dispatch => {
    axios
      .post('/api/add-movie', obj)
      .then(res => {
        console.log('success :', res);
        dispatch({ type: actionTypes.MOVIE_SAVED });
      })
      .catch(err => console.log(err));
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
