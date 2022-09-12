import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTopic } from './actions/topics';
import { setTextFilter } from './actions/filters';
import getVisibleTopics from './selectors/topics';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addTopic({ phrases: 'Water bill', usage: 4500 }));
store.dispatch(addTopic({ phrases: 'Gas bill', createdAt: 1000 }));
store.dispatch(addTopic({ phrases: 'Rent', usage: 109500 }));

const state = store.getState();
const visibleTopics = getVisibleTopics(state.topics, state.filters);
console.log(visibleTopics);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));