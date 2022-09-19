import uuid from 'uuid';

// ADD_NOTE
export const addNote = (
  {
    description = '',
    message = '',
    amount = 0,
    createdAt = 0,
  } = {}
) => ({
  type: 'ADD_NOTE',
  Note: {
    id: uuid(),
    description,
    message,
    amount,
    createdAt,
  }
});

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
});

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});