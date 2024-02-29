import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp.jsx";


describe('Pruebas en <GifExpertApp />', () => { 
    test('El comoponente debe hacer match con el snapshot', () => { 
        const { container } = render( <GifExpertApp /> );

        expect( container ).toMatchSnapshot();
    })    

    test('Debe mostrar GifExpertApp en un h1', () => { 
        render( <GifExpertApp /> );
        
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe('GifExpertApp'); 
    })
})