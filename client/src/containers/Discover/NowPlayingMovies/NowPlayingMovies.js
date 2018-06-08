import React, { Component } from 'react';

import $ from 'jquery';
import { connect } from 'react-redux';
import MovieResults from '../../../components/MovieResults/MovieResults';
import * as actions from '../../../store/actions/index';
import '../MovieList.css';

class NowPlayingMovies extends Component {
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
    for (let i = 0; i < this.props.nowPlaying.name.length; i++) {
      fetchedMovieResults.push(
        <MovieResults
          key={this.props.nowPlaying.id[i]}
          title={this.props.nowPlaying.name[i]}
          poster={this.props.nowPlaying.poster[i]}
          id={this.props.nowPlaying.id[i]}
        />
      );
    }

    return (
      <div className="MovieList">
        <h3>Now Playing</h3>
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
    nowPlaying: state.loadMovies.nowPlayingMovies,
    error: state.loadMovies.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: search => dispatch(actions.onLoadNowPlaying())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingMovies);
