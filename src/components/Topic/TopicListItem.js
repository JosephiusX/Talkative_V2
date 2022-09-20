import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({ id, title }) => (
  <div>
    <Link to={`/edit_topic/${id}`}>
      <h3>{title}</h3>
    </Link>
  </div>
);

export default TopicListItem;