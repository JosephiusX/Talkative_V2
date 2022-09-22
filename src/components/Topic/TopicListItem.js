import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({id, description, phrases, createdAt}) => (
  <div>
    <Link to={`/edit_topic/${id}`}>
      <h3>{description}</h3>
      <p>{phrases}</p>
      <p>{createdAt}</p>
    </Link>
  </div>
);

export default TopicListItem;