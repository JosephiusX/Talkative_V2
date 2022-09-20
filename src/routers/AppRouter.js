import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopicsPage from '../components/Topic/TopicsPage';
import AddTopicPage from '../components/Topic/AddTopicPage';
import AddNotePage from '../components/Notes/AddNotePage';
import EditTopicPage from '../components/Topic/EditTopicPage';
import EditNotePage from '../components/Notes/EditNotePage';
import NotesPage from '../components/Notes/NotesPage';
import NotFoundPage from '../components/Pages/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/topics" component={TopicsPage} exact={true} />
        <Route path="/notes" component={NotesPage} />
        <Route path="/create_topic" component={AddTopicPage} />
        <Route path="/create_note" component={AddNotePage} />
        <Route path="/edit_note/:id" component={EditNotePage} />
        <Route path="/edit_topic/:id" component={EditTopicPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;