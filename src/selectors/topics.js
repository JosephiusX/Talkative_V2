import moment from 'moment';

// Get visible topics

export default (topics, { text, sortBy, startDate, endDate }) => {
  return topics.filter((topic) => {
    const createdAtMoment = moment(topic.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'usage') {
      return a.usage < b.usage ? 1 : -1;
    }
  });
};