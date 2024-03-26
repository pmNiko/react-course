import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-reducer/TodoItem.jsx";

describe('Pruebas en TodoItem', () => { 
    const mockOnDeleteTodo = jest.fn();
    const mockOnToggleTodo = jest.fn();
    const todo = { id: 1, todo: "Este es el título de la nueva tarea!", done: false };
    const checkTodo = { id: 1, todo: "Este es el título de la nueva tarea!", done: true };

    const setup = (aTodo = todo) => 
        render(
            <TodoItem 
                todoItem={aTodo} 
                onDeleteTodo={mockOnDeleteTodo} 
                onToggleTodo={mockOnToggleTodo} 
            />
        )

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('Debe mostrar el título de la tarea y el boton de borrar', () => { 
        setup();

        expect( screen.getByTestId('todo-span').innerHTML ).toBe(todo.todo);
        expect( screen.getByRole('button').innerHTML ).toBe('Borrar');
    })

    test('La función onDeleteTodo debe ser invocada', () => {
        setup();

        expect( mockOnDeleteTodo ).not.toHaveBeenCalled();
        
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);
        
        expect( mockOnDeleteTodo ).toHaveBeenCalled();
        expect( mockOnDeleteTodo ).toHaveBeenLastCalledWith(todo.id);
    })

    test('La función onToggleTodo debe ser invocada', () => {
        setup();

        expect( mockOnToggleTodo ).not.toHaveBeenCalled();
        
        fireEvent.click(screen.getByTestId('todo-span'));
        
        expect( mockOnToggleTodo ).toHaveBeenCalled();
        expect( mockOnToggleTodo ).toHaveBeenLastCalledWith(todo.id);
    })

    test('Si la tarea está finalizada el span se tacha', async() => { 
        setup(checkTodo);

        expect( screen.getByTestId('todo-span').classList )
            .toContain('align-self-center');
        expect( screen.getByTestId('todo-span').classList )
            .toContain('text-decoration-line-through');      
    })

})