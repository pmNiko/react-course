import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {
    const { 
        todos, onNewTodo, onDeleteTodo, 
        onToggleTodo, count, pending 
    } = useTodo();

    return (
        <>
            <h1>Todo App: {count}, <small>pendientes: {pending} </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={onDeleteTodo} 
                        onToggleTodo={onToggleTodo} 
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>
        </>
    )
}
