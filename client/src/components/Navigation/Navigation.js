import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Navigation.css';

const Navigation = props => {
  console.log(props.auth);
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">MovieDeets</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li role="presentation" className="nav-links">
            <NavLink to="/discover" exact>
              Discover
            </NavLink>
          </li>
          <li role="presentation" className="nav-links">
            <NavLink to="/search">Search</NavLink>
          </li>
          {!props.auth ? (
            <li role="presentation">
              <a href="/auth/google" className="login-btn">
                Login
              </a>
            </li>
          ) : null}
          <Nav>
            {props.auth ? (
              <NavDropdown eventKey={3} title="Manage" id="basic-nav-dropdown">
                <li role="presentation" class="">
                  <NavLink to="/my-list">My List</NavLink>
                </li>
                <li role="separator" className="divider" />
                <li role="presentation">
                  <a href="/api/logout" role="menuitem">
                    Logout
                  </a>
                </li>
              </NavDropdown>
            ) : null}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.authUser.auth
  };
};

export default connect(mapStateToProps)(Navigation);
