import { render, screen } from "@testing-library/react"
import { TodoAdd } from "../../src/08-reducer/TodoAdd.jsx"
import { useForm } from "../../src/hooks/useForm.js";

jest.mock("../../src/hooks/useForm.js");

describe.skip('Pruebas en TodoAdd', () => {    
    const onNewTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('Se debe renderar el formulario de carga', () => { 
        useForm.mockReturnValue({
            description: 'Contenido del value inicial!'
        });
        render(<TodoAdd onNewTodo={onNewTodoMock} />);

        expect( screen.getByRole('textbox') ).toBeDefined();
        expect( screen.getByRole('textbox').innerHTML ).toBeFalsy()
        expect( screen.getByRole('button').innerHTML ).toBe('Cargar')

        screen.debug()
    }) 
})