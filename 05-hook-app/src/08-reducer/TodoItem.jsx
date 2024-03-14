
export const TodoItem = ({todoItem, onDeleteTodo, onToggleTodo}) => {
    const {id, todo, done} = todoItem;

  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
        <span 
          style={{ cursor: "pointer"}}
          className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`} 
          onClick={() => onToggleTodo(id)} >
            {todo}
        </span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)} >Borrar</button>
    </li>
  )
}
