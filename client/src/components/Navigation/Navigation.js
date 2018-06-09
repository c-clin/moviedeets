import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

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
          <li role="presentation">
            <NavLink to="/discover" exact>
              Discover
            </NavLink>
          </li>
          <li role="presentation">
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
                  <NavLink to="/api/my-list">My List</NavLink>
                </li>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/api/logout">
                  Logout
                </MenuItem>
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
