import React from 'react';
import { Link } from 'react-router-dom';

const NoteListItem = ({ id, title, note, createdAt }) => (
  <div>
    <Link to={`/edit_note)/${id}`}>
      <h3>{title}</h3>
      <p>{note}</p>
    </Link>
    <p>{createdAt}</p>
  </div>
);

export default NoteListItem;