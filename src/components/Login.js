import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setTokenExistence } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('trying to submit!');

    document.cookie = 'token=banana; ; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    console.log('cookie setted');
    localStorage.setItem('username', username);
    setTokenExistence(true);
  };
  return (
    <form action='#' onSubmit={handleSubmit} className='login-form'>
      <div className='login-form__field'>
        <label htmlFor='username' className='login-form__label'>
          Username
        </label>
        <input
          className='login-form__input'
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='login-form__field'>
        <label htmlFor='password' className='login-form__label'>
          Password
        </label>
        <input
          className='login-form__input'
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className='btn btn--font-inherit'
        type='submit'
        value='Submit'
        disabled={!username.trim().length || !password.trim().length}
      >
        Login
      </button>
    </form>
  );
};
