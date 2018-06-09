import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
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
            <a href="/auth/google">Login</a>
            <NavLink to="/search" exact>
              Search
            </NavLink>
            <NavLink to="/discover" exact>
              Discover
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
