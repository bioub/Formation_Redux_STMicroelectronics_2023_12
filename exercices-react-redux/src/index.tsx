import './index.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, addTodo, deleteTodo, updateNewTodo } from './store/slices';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={configureStore({ reducer: reducer, devTools: {
    // actionCreators: {addTodo, deleteTodo, updateNewTodo}
  } })}>
    <App />
  </Provider>
);
