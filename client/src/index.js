import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import fetchMoviesReducer from './store/reducers/fetchMovies';
import loadMoviesReducer from './store/reducers/loadMovies';
import authUserReducer from './store/reducers/authUser';
import movieListReducer from './store/reducers/movieList';

import axios from 'axios';
window.axios = axios;

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  loadMovies: loadMoviesReducer,
  fetchMovies: fetchMoviesReducer,
  authUser: authUserReducer,
  movieList: movieListReducer
});

const store = createStore(
  rootReducer,
  composedEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
