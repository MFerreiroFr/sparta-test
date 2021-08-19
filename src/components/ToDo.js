import React, { useState } from 'react';

export default ({ task, complete, index, update, remove }) => {
  const [updating, setUpdating] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState(task);

  const handleTaskUpdate = () => {
    update({ task: newTaskValue, complete: false }, index);
    setUpdating(false);
  };

  const handleCancelUpdate = () => {
    setUpdating(false);
    setNewTaskValue(task);
  };

  return (
    <div className='todo'>
      {updating ? (
        <input
          className='todo__input'
          type='text'
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
      ) : (
        <div className={`todo__task ${complete ? 'todo__task--complete' : ''}`}>
          {task}
        </div>
      )}
      {updating ? (
        <div className='todo__actions'>
          <button
            className='btn btn--confirm'
            onClick={handleTaskUpdate}
            disabled={!newTaskValue.trim().length}
          >
            Confirm
          </button>
          <button onClick={handleCancelUpdate} className='btn btn--cancel'>
            Cancel
          </button>
        </div>
      ) : (
        <div className='todo__actions'>
          {complete ? (
            ''
          ) : (
            <button
              className='btn btn--confirm'
              onClick={() => update({ task, complete: true }, index)}
            >
              Complete
            </button>
          )}

          {complete ? (
            ''
          ) : (
            <button className='btn btn--edit' onClick={() => setUpdating(true)}>
              Edit
            </button>
          )}

          <button className='btn btn--cancel' onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};
