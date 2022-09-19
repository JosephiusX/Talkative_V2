import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit_topic/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default TopicListItem;