import { fireEvent, render, screen , act, renderHook} from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks.jsx";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter.js');

describe('Pruebas en <MultipleCustomHooks />', () => { 
    const mockIncrement = jest.fn();       
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    const sprites = {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () => { 
            useFetch.mockReturnValue({
                data: null,
                isLoading: true,
                hasError: false,
                error: null
            });
            render(<MultipleCustomHooks/>);

        expect( screen.getByText('MultipleCustomHooks')             ).toBeDefined();
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('Cargando...')
        expect( screen.getByRole('button',  { name: 'Anterior'  })  ).toBeTruthy();
        expect( screen.getByRole('button',  { name: 'Siguiente' })  ).toBeTruthy();
    })

    test('Debe mostrar un Pokemon', () => { 
        useFetch.mockReturnValue({
            data: {
                id: '1',
                name: 'bulbasaur',
                sprites
            },
            isLoading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks/>);
        // screen.debug()

        expect( screen.getByText('MultipleCustomHooks')).toBeDefined();
        expect( screen.getByRole('heading', { level: 2 }).innerHTML).toBe('#1 - bulbasaur');
        
        expect( screen.getByLabelText('sprite-images')).toBeDefined();
        expect( screen.getByRole('img', {name: sprites.front_default} ).getAttribute('src'))
            .toEqual( sprites.front_default );
        expect( screen.getByTestId(sprites.front_shiny).getAttribute('src'))
            .toEqual( sprites.front_shiny );
        expect( screen.getByTestId(sprites.back_default).getAttribute('src'))
            .toEqual( sprites.back_default );
        expect( screen.getByTestId(sprites.back_shiny).getAttribute('src'))
            .toEqual( sprites.back_shiny );

        expect( screen.getByRole('button', { name: 'Anterior' }).innerHTML ).toEqual('Anterior');
        expect( screen.getByRole('button', { name: 'Siguiente' }).innerHTML ).toEqual('Siguiente');
    })


    test('Los botones se mantienen desabilitados cuando el fetch esta en progreso', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks/>);

        const prevButton = screen.getByRole('button', { name: 'Anterior' });
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        expect( prevButton.disabled ).toBeTruthy();
        expect( nextButton.disabled ).toBeTruthy();
    })

    test('Los botones se habilitan cuando el fetch ha finalizado', () => {
        useFetch.mockReturnValue({
            data: {
                id: '1',
                name: 'bulbasaur',
                sprites
            },
            isLoading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks/>);

        const prevButton = screen.getByRole('button', { name: 'Anterior' });
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        expect( prevButton.disabled ).toBeFalsy();
        expect( nextButton.disabled ).toBeFalsy();
    })

    test('Debe poder llamar al metodo incrementar ', () => {       
        useFetch.mockReturnValue({
            data: {
                id: '1',
                name: 'bulbasaur',
                sprites
            },
            isLoading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks/>);

        expect( mockIncrement ).not.toHaveBeenCalled();
        
        const incrementButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click( incrementButton );
        
        expect( mockIncrement).toHaveBeenCalled();
    })
})