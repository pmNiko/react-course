import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos, isLoading } = useGetTodosQuery();
  const { isLoading, data: todo } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>Loading: {isLoading.toString()}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={() => setTodoId(todoId - 1)}>Prev</button>
      <button onClick={() => setTodoId(todoId + 1)}>Next</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? ' OK ' : ' PENDING '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
