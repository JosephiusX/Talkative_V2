// phrases Reducer

const phrasesReducerDefaultState = [];

export default (state = phrasesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PHRASE':
      return [
        ...state,
        action.phrase
      ];
    case 'REMOVE_PHRASE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PHRASE':
      return state.map((phrase) => {
        if (phrase.id === action.id) {
          return {
            ...phrase,
            ...action.updates
          };
        } else {
          return phrase;
        };
      });
    default:
      return state;
  }
};
