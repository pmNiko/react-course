import { fireEvent, render, screen } from "@testing-library/react"
import { RemoveGifButton } from "../../src/components/RemoveGifButton.jsx"

describe('Pruebas en <RemoveGifButton/>', () => {
    const removeCategory = jest.fn();

    test('El componente debe hacer match con el snapshopt', () => { 
        const {container} = render( <RemoveGifButton removeCategory={removeCategory}/>);
        
        expect( container ).toMatchSnapshot();
    })
    
    test('Contiene un mensaje en el h3 informando la falta de gifs', () => { 
        render( <RemoveGifButton removeCategory={removeCategory}/>);
        
        expect( screen.getByRole( 'heading', {level: 3} ) ).toBeDefined();
        expect( screen.getByRole( 'heading', {level: 3} ).innerHTML ).toEqual('Este titulo no contiene Gifs!')
    })

    
    test('La funcion removeCategory debe ser llamada al clickear el boton', () => { 
        const removeCategory = jest.fn();
        render( <RemoveGifButton removeCategory={removeCategory}/>);

        fireEvent.click( screen.getByRole('button', { name: 'X' }));

        expect( removeCategory ).toHaveBeenCalled();
        expect( removeCategory ).toHaveBeenCalledTimes(1);
        
    })
})