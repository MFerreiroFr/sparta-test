import React, { useEffect, useRef, useState } from 'react';
import AddTodo from './AddTodo';
import ToDo from './ToDo';

export default () => {
  const [todoList, setTodoList] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    if (localStorage.getItem('todolist')) {
      setTodoList(JSON.parse(localStorage.getItem('todolist')));
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setLocalStorageTodoList(todoList);
    }
  }, [todoList]);

  const addTodo = (todo) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    // setLocalStorageTodoList(newTodoList);
  };

  const updateTodo = (updatedTodo, index) => {
    const newTodoList = todoList.map((todo, i) => {
      if (index === i) todo = updatedTodo;
      return todo;
    });
    setTodoList(newTodoList);
    // setLocalStorageTodoList(newTodoList);
  };

  const removeTodo = (index) => {
    const newTodoList = todoList.filter((todo, i) => index !== i);
    setTodoList(newTodoList);
    // setLocalStorageTodoList(newTodoList);
  };

  const setLocalStorageTodoList = (todoList) => {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  };

  return (
    <div className='todo-list'>
      {todoList.length ? (
        todoList.map((todo, index) => (
          <ToDo
            key={index}
            task={todo.task}
            complete={todo.complete}
            index={index}
            update={updateTodo}
            remove={removeTodo}
          />
        ))
      ) : (
        <div>Add an item to the To do List</div>
      )}
      <AddTodo addTodo={addTodo} />
    </div>
  );
};
