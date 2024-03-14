import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }) => {


  return (
    <ul className="list-group">
        {
          todos.map( (todo, i) => (
              <TodoItem key={todo+i} todoItem={todo} onDeleteTodo={ onDeleteTodo } onToggleTodo={onToggleTodo} /> 
            )
          )
        }
    </ul>
  )
}
