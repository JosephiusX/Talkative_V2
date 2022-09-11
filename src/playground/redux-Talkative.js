import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_TOPIC
const addTopic= (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_TOPIC',
  topic: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_TOPIC
const removeTopic= ({ id } = {}) => ({
  type: 'REMOVE_TOPIC',
  id
});

// EDIT_TOPIC
const editTopic= (id, updates) => ({
  type: 'EDIT_TOPIC',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// topics Reducer

const topicsReducerDefaultState = [];

const topicsReducer = (state = topicsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return [
        ...state,
        action.topic
      ];
    case 'REMOVE_TOPIC':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TOPIC':
      return state.map((topic) => {
        if (topic.id === action.id) {
          return {
            ...topic,
            ...action.updates
          };
        } else {
          return topic;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible topics
const getVisibletTopics = (topics, { text, sortBy, startDate, endDate }) => {
  return topics.filter((topic) => {
    const startDateMatch = typeof startDate !== 'number' || topic.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || topic.createdAt <= endDate;
    const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation

const store = createStore(
  combineReducers({
    topics: topicsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleTopics = getVisibleTopics(state.topics, state.filters);
  console.log(visibleTopics);
});

const topicOne = store.dispatch(addTopic({ description: 'Rent', amount: 100, createdAt: -21000 }));
const topicTwo = store.dispatch(addTopic({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removetopic({ id: topicOne.topic.id }));
// store.dispatch(edittopic(topicTwo.topic.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(999)); // endDate 1250

const demoState = {
  topics: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
