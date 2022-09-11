import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({ id, topic, usage, createdAt }) => (
  <div>
    <Link to={`/edit_topic/${id}`}>
      <h3>{topic}</h3>
    </Link>
  </div>
);

export default TopicListItem;