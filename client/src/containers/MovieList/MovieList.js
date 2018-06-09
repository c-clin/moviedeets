import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import './MovieList.css';

class MovieList extends Component {
  componentDidMount = () => {
    this.props.loadMovieList();
    console.log(this.props.movieList);
  };

  renderContent = () => {
    return this.props.movieList.reverse().map(movieItem => {
      let year = movieItem.releaseDate
        ? movieItem.releaseDate.toString().substr(0, 4)
        : null;

      return (
        <div className="container" key={movieItem._id}>
          <div className="poster">
            <img src={movieItem.poster} width="150" alt={movieItem.title} />
          </div>
          <div className="description">
            <h4>{movieItem.title}</h4>
            <p>{year}</p>
            <p>Date saved: {new Date(movieItem.date).toLocaleDateString()}</p>
            <p>{movieItem.summary}</p>
            <p>Cast: {movieItem.cast}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="MovieList">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return { movieList: state.movieList.movieList };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovieList: () => dispatch(actions.onFetchList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
