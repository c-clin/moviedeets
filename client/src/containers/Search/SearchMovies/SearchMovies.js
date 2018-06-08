import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import './SearchMovies.css';
import MovieResults from '../../../components/MovieResults/MovieResults';
import MovieSummary from '../../../components/MovieSummary/MovieSummary';
import Modal from '../../../components/UI/Modal/Modal';

class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.contentElement = React.createRef();
  }

  state = {
    searchInput: '',
    margin: 0
  };

  slideLeftHandler = event => {
    event.preventDefault();
    if (this.state.margin <= 1000) {
      this.setState({ margin: this.state.margin + 250 });

      const el = this.contentElement.current;
      $(el).animate(
        {
          marginLeft: '-=250px'
        },
        'fast'
      );
    }
  };

  slideRightHandler = event => {
    event.preventDefault();
    if (this.state.margin >= 250) {
      this.setState({ margin: this.state.margin - 250 });
      const el = this.contentElement.current;
      $(el).animate(
        {
          marginLeft: '+=250px'
        },
        'fast'
      );
    }
  };

  render() {
    let fetchedMovieResults = [];

    for (let i = 0; i < this.props.movieDetails.name.length; i++) {
      fetchedMovieResults.push(
        <MovieResults
          key={this.props.movieDetails.id[i]}
          title={this.props.movieDetails.name[i]}
          poster={this.props.movieDetails.poster[i]}
          id={this.props.movieDetails.id[i]}
        />
      );
    }

    let movieSummary = null;

    movieSummary = (
      <MovieSummary
        title={this.props.movieSummary.title}
        summary={this.props.movieSummary.summary}
        releaseDate={this.props.movieSummary.releaseDate}
        poster={this.props.movieSummary.poster}
        url={this.props.movieSummary.homepage}
        rating={this.props.movieSummary.rating}
        runtime={this.props.movieSummary.runtime}
        certification={this.props.movieSummary.certification}
        genres={this.props.movieSummary.genres}
        castNames={this.props.castNames}
      />
    );

    return (
      <div className="SearchMovies">
        {/* movies carousel */}
        <Modal show={this.props.modalShow}>{movieSummary}</Modal>
        <div id="wrapper">
          <span
            id="controlL"
            className="left-controls"
            role="button"
            aria-label="See Previous Modules"
            onClick={this.slideLeftHandler}
          >
            <b
              className="fa fa-chevron-left fa-chevron-left-extra"
              aria-hidden="true"
            />
          </span>

          <div className="module-section clearfix">
            <div id="content" ref={this.contentElement}>
              {fetchedMovieResults}
            </div>
          </div>

          <span
            id="controlR"
            className="right-controls"
            role="button"
            aria-label="See Previous Modules"
            onClick={this.slideRightHandler}
          >
            <b
              className="fa fa-chevron-right fa-chevron-right-extra"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieDetails: state.fetchMovies.movieDetails,
    // popularMovies: state.fetchMovies.popularMovies,
    movieSummary: state.fetchMovies.movieSummary,
    castNames: state.fetchMovies.castNames,
    modalShow: state.fetchMovies.modalShow,
    error: state.fetchMovies.error
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchMovies);
