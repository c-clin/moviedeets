import React, { Component } from 'react';

import PopularMovies from './PopularMovies/PopularMovies';
import NowPlayingMovies from './NowPlayingMovies/NowPlayingMovies';
import TopRatedMovies from './TopRatedMovies/TopRatedMovies';
import UpcomingMovies from './UpComingMovies/UpComingMovies';

import coverPhoto from '../../assets/images/pirates.jpg';

import './Discover.css';

class Discover extends Component {
  render() {
    return (
      <div className="Discover">
        <div className="container">
          <img src={coverPhoto} alt="cover phto" />
          <p className="subheading">
            Discover the most popular movies <em>now</em>.
          </p>
        </div>
        <div className="movieLists">
          <PopularMovies />
          <TopRatedMovies />
          <NowPlayingMovies />
          <UpcomingMovies />
        </div>
      </div>
    );
  }
}

export default Discover;
