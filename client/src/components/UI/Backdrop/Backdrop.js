import React from 'react';
import './Backdrop.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

const backdrop = props =>
  props.show ? (
    <div
      className="Backdrop"
      onClick={() => {
        props.modalOff(), props.unSaveMovie();
      }}
    />
  ) : null;

const mapDispatchToProps = dispatch => {
  return {
    modalOff: () => dispatch({ type: actionTypes.TURN_OFF_MODAL }),
    unSaveMovie: () => dispatch({ type: actionTypes.MOVIE_UNSAVED })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(backdrop);
