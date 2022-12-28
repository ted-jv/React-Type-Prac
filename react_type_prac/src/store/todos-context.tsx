import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// useContext create 하기
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

//! TodosContextProvider 함수는 App에서 사용이 필요한 곳에 감싸준다. children 또한 명시해줘야함 ( children?: React.ReactNode )
const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = props => {
  // const todos = [new Todo('Hi'), new Todo('Hello')];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevTodos => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };
  // useContext value 객체
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
