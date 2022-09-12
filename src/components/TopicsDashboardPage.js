import React from 'react';
import TopicList from './TopicList';
import ListFilters from './ListFilters';

const TopicDashboardPage = () => (
  <div>
    <ListFilters />
    <TopicList />
  </div>
);

export default TopicDashboardPage;
