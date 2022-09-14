import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopicsPage from '../components/Pages/TopicsPage';
import AddTopicPage from '../components/Pages/AddTopicPage';
import EditTopicPage from '../components/Pages/EditTopicPage';
import NotesPage from '../components/Pages/NotesPage';
import NotFoundPage from '../components/Pages/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={TopicsPage} exact={true} />
        <Route path="/create" component={AddTopicPage} />
        <Route path="/edit/:id" component={EditTopicPage} />
        <Route path="/notes" component={NotesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;