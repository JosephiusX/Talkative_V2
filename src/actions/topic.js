import uuid from 'uuid';

// ADD_PHRASE
export const addPhrase = (
  {
    phrase = '',
    topic = '',
    usage = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_PHRASE',
  phrase: {
    id: uuid(),
    phrase,
    topic,
    usage,
    createdAt
  }
});

// REMOVE_PHRASE
export const removePhrase = ({ id } = {}) => ({
  type: 'REMOVE_PHRASE',
  id
});

// EDIT_PHRASE
export const editPhrase = (id, updates) => ({
  type: 'EDIT_PHRASE',
  id,
  updates
});
