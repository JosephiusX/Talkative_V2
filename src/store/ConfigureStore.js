import { createStore, combineReducers } from 'redux';
import topicsReducer from '../reducers/topics';
import topicReducer from '../reducers/topic';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      topics: topicsReducer,
      topic: topicReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};