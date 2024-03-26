import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-reducer/TodoApp.jsx"
import { useTodo } from "../../src/hooks/useTodo.js"

jest.mock("../../src/hooks/useTodo.js")

describe('Pruebas en TodoApp', () => { 
    const todos = [
        {  id: 1, todo: "Todo #1", done: false },
        {  id: 2, todo: "Todo #2", done: false }
    ]
    useTodo.mockReturnValue({
        todos,
        count: 2, 
        pending: 2, 
        onNewTodo: jest.fn(), 
        onDeleteTodo: jest.fn(), 
        onToggleTodo: jest.fn(), 
    })

    test('Debe renderear el componente', () => {
        render(<TodoApp />)
        
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText(todos[1].todo) ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    })
})