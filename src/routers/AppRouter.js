import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopicsPage from '../components/Pages/TopicsPage';
import AddTopicPage from '../components/Pages/AddTopicPage';
import AddNotePage from '../components/Pages/AddNotePage';
import EditTopicPage from '../components/Pages/EditTopicPage';
import EditNotePage from '../components/Pages/EditNotePage';
import NotesPage from '../components/Pages/NotesPage';
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