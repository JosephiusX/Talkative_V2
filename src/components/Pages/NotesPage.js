import React from 'react';
import NoteList from '../Notes/NoteList';
import NoteListFilters from '../Notes/NoteListFilters';

const NotesPage = () => (
  <div>
    <NoteListFilters />
    <NoteList />
  </div>
);

export default NotesPage;
   