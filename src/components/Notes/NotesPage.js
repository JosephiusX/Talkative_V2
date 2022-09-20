import React from 'react';
import NoteList from '../Notes/NoteList';
import NoteListFilters from '../Notes/NoteListFilters';
import { NavLink } from 'react-router-dom';


const NotesPage = () => (
  <div>
    <NavLink to="/create_note" activeClassName="is-active">Create Note</NavLink>
    <NoteListFilters />
    <NoteList />
  </div>
);

export default NotesPage;
   