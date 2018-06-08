import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './MovieResults.css';

const MovieResults = props => {
  let image = '';
  props.poster
    ? (image = props.poster)
    : (image =
        'http://www.aarcorp.com/cms/images/dev/placeholders/imageNotFound.jpg');

  return (
    <div className="card">
      <img src={image} alt={props.title} width="220" />
      <div className="overlay">
        <div className="buttonContainer">
          <span
            className="playButton"
            onClick={() => props.onLoadMovieSummary(props.id)}
          >
            &#9654;
          </span>
        </div>
        <p className="movie-title">{props.title}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovieSummary: id => dispatch(actions.onFetchMovieSummary(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieResults);
