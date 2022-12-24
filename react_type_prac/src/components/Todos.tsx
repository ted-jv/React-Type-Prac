import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;

// onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
// bind를 통해서 여기서 item의 id를 받을 수 있다.

//TODO:여기서 어떻게 item.id를 받을 수 있지? 타입스크립트는 객체지향이기 때문?
