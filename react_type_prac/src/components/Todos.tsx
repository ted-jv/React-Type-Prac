import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map(item => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;

// onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
// bind를 통해서 여기서 item의 id를 받을 수 있다.

//? 여기서 어떻게 item.id를 받을 수 있지? 타입스크립트는 객체지향이기 때문?
