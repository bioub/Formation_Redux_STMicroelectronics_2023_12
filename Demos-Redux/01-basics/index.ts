import { UnknownAction, legacy_createStore } from 'redux';

const initialState = {
  name: 'Romain',
  likes: 10,
};


function reducer(state = initialState, action: UnknownAction) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return { ...state, likes: state.likes + 1 };
    case 'UPDATE_NAME':
      return { ...state, name: action.newName as string };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch({ type: 'INCREMENT_LIKES' });
store.dispatch({ type: 'UPDATE_NAME', newName: 'Toto' });
store.dispatch({ type: 'INCREMENT_LIKES' });
