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
    return this.props.movieList.map(movieItem => {
      return (
        <div className="container" key={movieItem._id}>
          <div className="poster">
            <img src={movieItem.poster} width="150" alt={movieItem.title} />
          </div>
          <div className="description">
            <h4>{movieItem.title}</h4>
            <p>{movieItem.year}</p>
            <p>Date saved: {new Date(movieItem.date).toLocaleDateString()}</p>
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
