import React from 'react';
import { store } from './state';
import { Provider } from 'react-redux';
import ToDoApp from './components/ToDoApp';

export default () => {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
};
