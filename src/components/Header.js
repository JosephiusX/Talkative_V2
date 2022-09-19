import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>TalkifyV2</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Topics</NavLink>
    <NavLink to="/create_topic" activeClassName="is-active">Create Topic</NavLink>
    <NavLink to="/notes" activeClassName="is-active">Notes</NavLink>
    <NavLink to="/create_note" activeClassName="is-active">Create Note</NavLink>
  </header>
);

export default Header;
