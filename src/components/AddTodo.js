import React, { useState } from 'react';

export default ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ task, complete: false });
    setTask('');
  };
  return (
    <form action='#' onSubmit={handleSubmit} className='form-add-todo'>
      <div className='form-add-todo__field'>
        <label htmlFor='taskName'>Task</label>
        <input
          className='form-add-todo__input'
          type='text'
          name='taskName'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button className='btn' type='submit' disabled={!task.trim().length}>
        Add task
      </button>
    </form>
  );
};
