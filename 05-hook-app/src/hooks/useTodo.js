import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-reducer/todoReducer'

const initialState = [];

const init = () =>  JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const onNewTodo = (todo) => dispatch({type: 'ADD', payload: todo});

    const onDeleteTodo = (id) => dispatch({type: 'DELETE', payload: id });

    const onToggleTodo = (id) => dispatch({type: 'DONE', payload: id });

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
  return {
    todos,
    count: todos.length,
    pending: todos.filter( t => !t.done ).length,

    onNewTodo,
    onDeleteTodo,
    onToggleTodo
  }
}
