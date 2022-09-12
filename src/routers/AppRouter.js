import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopicDashboardPage from '../components/TopicDashboardPage';
import AddTopicPage from '../components/AddTopicPage';
import EditTopicPage from '../components/EditTopicPage';
import NotesPage from '../components/NotesPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={TopicDashboardPage} exact={true} />
        <Route path="/create" component={AddTopicPage} />
        <Route path="/edit/:id" component={EditTopicPage} />
        <Route path="/notes" component={NotesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;