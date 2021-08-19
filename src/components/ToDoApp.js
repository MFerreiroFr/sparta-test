import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Login from './Login';
import ToDoList from './TodoList';

export default () => {
  const { token } = useSelector((state) => state.app);
  const { setTokenExistence } = useActions();
  useEffect(() => {
    if (
      document.cookie.split(';').some((item) => item.includes('token=banana'))
    ) {
      setTokenExistence(true);
    }
  }, [token]);

  return (
    <div className='container'>
      <Header />
      {token ? <ToDoList /> : <Login />}
    </div>
  );
};
