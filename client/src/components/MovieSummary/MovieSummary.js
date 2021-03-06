import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './MovieSummary.css';

const MovieSummary = props => {
  let casts = props.castNames.toString().replace(/[,]/g, ', ');

  let thumbsUp = <i className="fa fa-thumbs-o-up" />;
  let thumbsDown = <i className="fa fa-thumbs-o-down" />;

  let year = props.releaseDate
    ? props.releaseDate.toString().substr(0, 4)
    : null;

  return (
    <div className="MovieSummary">
      <div className="container-box">
        <div className="poster">
          <img src={props.poster} alt={props.title} width="300" />
        </div>

        <div className="description">
          <h3>{props.title}</h3>
          <span
            className="rating"
            style={{ color: props.rating > 5 ? '#51c053' : 'red' }}
          >
            {props.rating > 5 ? thumbsUp : thumbsDown}
            &nbsp;
            {props.rating}
          </span>
          <span className="date">{year}</span>
          <span
            className="certification"
            style={{ display: props.certification ? 'inline-block' : 'none' }}
          >
            {props.certification}
          </span>
          <span className="runtime">
            <i className="fa fa-clock-o" aria-hidden="true" />
            &nbsp;
            {props.runtime} minutes
          </span>
          <div className="links">
            <a
              className="goto-trailer"
              href={`https://www.youtube.com/results?search_query=${
                props.title
              }`}
              target="_blank"
            >
              <i className="fa fa-video-camera" aria-hidden="true" />
              &nbsp; &nbsp; TRAILER
            </a>
            <button
              className="add-movie"
              onClick={() => props.onSaveMovie(props)}
            >
              {props.movieSaved ? (
                <i className="fa fa-check" aria-hidden="true" />
              ) : (
                <i className="fa fa-plus" aria-hidden="true" />
              )}
              &nbsp; &nbsp; MY LIST
            </button>
          </div>

          <p className="summary">{props.summary}</p>
          <p>
            {props.url ? (
              <a href={props.url} target="_blank" className="website">
                <i className="fa fa-link" aria-hidden="true" /> &nbsp; Movie
                Website
              </a>
            ) : null}
          </p>
          <p className="genres">
            Genres: <em>{props.genres ? props.genres.join(', ') : null}</em>
          </p>
          <p className="casts">
            Starring: <em>{casts}</em>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movieSaved: state.movieList.movieSaved
  };
};

export default connect(
  mapStateToProps,
  actions
)(MovieSummary);
