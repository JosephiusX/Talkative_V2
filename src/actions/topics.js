import uuid from 'uuid';

// ADD_TOPIC
export const addTopic = (
  {
    description = '',
    phrases =  [],
  } = {}
) => ({
  type: 'ADD_TOPIC',
  topic: {
    id: uuid(),
    description,
    phrases
  }                                                                                            
});


// REMOVE_TOPIC
export const removeTopic = ({ id  } = {}) => ({
  type: 'REMOVE_TOPIC',
  id,
});

// EDIT_TOPIC
export const editTopic = (id, updates) => ({
  type: 'EDIT_TOPIC',
  id,
  updates,
});

export const addPhrase = ({ id } = {}) => ({
  type: 'ADD_PHRASE',
  id,
})

export const removePhrase = ({ id } = {}) => ({
  type: 'REMOVE_PHRASE',
  id,
})

export const editPhrase = ({ id } = {}) => ({
  type: 'EDIT_PHRASE', 
  id,
  updates,
})