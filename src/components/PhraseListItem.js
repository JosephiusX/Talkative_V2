import React from 'react';
import { Link } from 'react-router-dom';

const PhraseListItem = ({ id, phrase, usage }) => (
  <div>
    <Link to={`/edit_phrase/${id}`}>
      <h3>{phrase}</h3>
    </Link>
  </div>
);

export default PhraseListItem;