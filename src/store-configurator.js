import { createStore } from 'redux';

function todos(state = '', action) {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return action.text
    default:
      return state
  }
}

export const store = createStore(todos, 'Use Redux');
