import React, { Component } from 'react';

import $ from 'jquery';
import { connect } from 'react-redux';
import MovieResults from '../../../components/MovieResults/MovieResults';
import * as actions from '../../../store/actions/index';
import '../MovieList.css';
import Modal from '../../../components/UI/Modal/Modal';
import MovieSummary from '../../../components/MovieSummary/MovieSummary';

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.contentElement = React.createRef();
  }

  state = {
    margin: 0
  };

  componentDidMount = () => {
    this.props.onLoadMovies();
  };

  slideLeftHandler = event => {
    event.preventDefault();
    if (this.state.margin < 2000) {
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
    for (let i = 0; i < this.props.popularMovies.name.length; i++) {
      fetchedMovieResults.push(
        <MovieResults
          key={this.props.popularMovies.id[i]}
          title={this.props.popularMovies.name[i]}
          poster={this.props.popularMovies.poster[i]}
          id={this.props.popularMovies.id[i]}
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
      <div className="MovieList">
        <Modal show={this.props.modalShow}>{movieSummary}</Modal>
        <h3>Popular</h3>
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
    popularMovies: state.loadMovies.popularMovies,
    movieSummary: state.fetchMovies.movieSummary,
    castNames: state.fetchMovies.castNames,
    modalShow: state.fetchMovies.modalShow,
    error: state.loadMovies.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: search => dispatch(actions.onLoadPopularMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
