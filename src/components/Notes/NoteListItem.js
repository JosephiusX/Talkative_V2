import React from 'react';
import { Link } from 'react-router-dom';

const NoteListItem = ({ id, note, createdAt }) => (
  <div>
    <Link to={`/edit_note)/${id}`}>
      <h3>{note}</h3>
    </Link>
    <p>{createdAt}</p>
  </div>
);

export default NoteListItem;