import React from 'react';
import { Link } from 'react-router-dom';

const NoteListItem = ({ id, message, createdAt }) => (
  <div>
    <Link to={`/edit)/${id}`}>
      <h3>{message}</h3>
    </Link>
    <p>{createdAt}</p>
  </div>
);

export default NoteListItem;