import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navigation.css';

const Navigation = props => {
  const { location } = props;
  console.log(location);
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li>
            <span
              className="brand"
              style={{ float: 'left', marginLeft: '20px' }}
            >
              <Link to="/" id="link-title">
                <i className="fa fa-film" aria-hidden="true" /> MovieDeets
              </Link>
            </span>
          </li>
          <li>
            {!props.auth ? (
              <a href="/auth/google">Login</a>
            ) : (
              <a href="/api/logout">Logout</a>
            )}
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/discover" exact>
              Discover
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.authUser.auth
  };
};

export default connect(mapStateToProps)(Navigation);
