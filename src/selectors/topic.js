import moment from 'moment';

// Get visible phrases

export default (phrases, { text, sortBy, startDate, endDate }) => {
  return phrases.filter((phrase) => {
    const createdAtMoment = moment(phrase.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = phrase.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'usage') {
      return a.usage < b.usage ? 1 : -1;
    }
  });
};