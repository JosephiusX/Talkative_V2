import moment from 'moment';

// Get visible topics

export default (topics, { text, sortBy, startDate, endDate }) => {
  return topics.filter((topic) => {
    const textMatch = topic.title.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};