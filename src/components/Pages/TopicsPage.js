import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicList from '../Topic/TopicList';
import TopicListFilters from '../Topic/TopicListFilters';

const TopicsPage = () => (
  <div>
    <NavLink to="/create_topic" activeClassName="is-active">Create Topic</NavLink>
    <TopicListFilters />
    <TopicList />
  </div>
);

export default TopicsPage;
   