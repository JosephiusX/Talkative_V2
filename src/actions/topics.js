import uuid from 'uuid';

// ADD_TOPIC
export const addTopic = (
  {
      topic = '',
    phrase = '',
    usage = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_TOPIC',
  topic: {
    id: uuid(),
    topic,
    phrase,
    usage,
    createdAt
  }
});

// REMOVE_TOPIC
export const removeTopic = ({ id } = {}) => ({
  type: 'REMOVE_TOPIC',
  id
});

// EDIT_TOPIC
export const editTopic = (id, updates) => ({
  type: 'EDIT_TOPIC',
  id,
  updates
});
