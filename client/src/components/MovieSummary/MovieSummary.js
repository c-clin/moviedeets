import React from 'react';

import './MovieSummary.css';

const MovieSummary = props => {
  let casts = props.castNames.toString().replace(/[,]/g, ', ');
  // let genres = props.genres.toString().replace(/[,]/g, ', ');

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
            style={{
              display: props.certification ? 'inline-block' : 'none'
            }}
          >
            {props.certification}
          </span>
          <span className="runtime">
            <i className="fa fa-clock-o" aria-hidden="true" />
            &nbsp;
            {props.runtime} minutes
          </span>
          <p className="summary">{props.summary}</p>
          <p>
            {props.url ? (
              <a href={props.url} target="_blank">
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

export default MovieSummary;
