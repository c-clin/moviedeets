import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import $ from 'jquery';

import SearchMovies from './SearchMovies/SearchMovies';
import './Search.css';

class Search extends Component {
  state = {
    searchInput: '',
    showInput: '',
    searchClicked: false
  };

  inputChangedHandler = event => {
    this.setState({ searchInput: event.target.value });
  };

  loadMoviesHandler = () => {
    this.props.onLoadMovies(this.state.searchInput);
    this.setState({ showInput: this.state.searchInput });
    this.setState({ searchInput: '' });
    this.setState({ searchClicked: true });
    this.scrollDownHandler();
  };

  scrollDownHandler = () => {
    $('.Search').animate({ scrollTop: $(document).height() }, 'slow');
  };

  checkEnterHandler = event => {
    if (event.keyCode === 13) {
      this.loadMoviesHandler();
    }
  };

  render() {
    let searchMovies = null;

    searchMovies = this.state.searchClicked ? (
      <div>
        <h4 className="searchHint">
          You Searched for: <em>{this.state.showInput}</em>
        </h4>
        <SearchMovies />
      </div>
    ) : null;

    return (
      <div
        className="Search"
        style={{
          overflow: this.state.searchClicked ? 'scroll' : 'hidden'
        }}
      >
        <div className="input-box">
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.inputChangedHandler}
            onKeyDown={this.checkEnterHandler}
            placeholder="Search Movie"
          />
          <a onClick={this.loadMoviesHandler}>
            <b className="fa fa-search" aria-hidden="true" />
          </a>
        </div>

        <b
          onClick={this.scrollDownHandler}
          className="fa fa-angle-double-down"
          style={{
            transform: this.state.searchClicked
              ? 'translateY(0)'
              : 'translateY(-30vh)',
            zIndex: this.state.searchClicked ? '15' : -1,
            opacity: this.state.searchClicked ? 1 : 0
          }}
        />
        <div className="searchMovies" id="searchMovies">
          {searchMovies}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: search => dispatch(actions.onFetchMovie(search))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
