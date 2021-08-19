import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
export default () => {
  const [name, setName] = useState('');
  const { setTokenExistence } = useActions();
  const { token } = useSelector((state) => state.app);

  useEffect(() => {
    if (localStorage.getItem('username'))
      setName(localStorage.getItem('username'));
  }, [token]);

  const logout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.clear();
    setName('');
    setTokenExistence(false);
  };

  return (
    <div className='header'>
      <div className='header__username'>{name}</div>
      {name.length ? (
        <button className='btn' onClick={logout}>
          Log out
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
