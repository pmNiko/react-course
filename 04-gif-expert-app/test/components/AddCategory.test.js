import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory.jsx"

describe('Pruebas en <AddCategory />', () => { 

    const onAddCategory = jest.fn();
    const inputValue    = 'Valorant';
    
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');

        expect( input.value ).toEqual('');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        
        expect( input.value ).toEqual(inputValue);

    })

    test('Debe de llamar onAddCategory si el input tiene un valor', () => { 
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue } } );

        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith(inputValue);
    })

    test('La función onAddCategory no debe ser llmada si el input está vacio', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onAddCategory ).not.toHaveBeenCalled();
    })
 })