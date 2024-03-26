import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp.jsx"

//?? MemoryRouter sirve para poder testear las rutas de RRD
// ?? initialEntries nos permite simular la ruta

describe('Pruebas en <MainApp/>', () => { 
    const setup = (entrie = '/') => 
        render( 
            <MemoryRouter initialEntries={[entrie]} >
                <MainApp />
            </MemoryRouter>
        )


    test('Debe mostrar el HomePage', () => { 
        setup();

        expect( screen.getByText('HomePage') ).toBeTruthy();
        expect( screen.getByRole('link', { name: 'Home'}).classList ).toContain('active')
    })

    test('Debe mostrar el LoginPage', () => { 
        setup('/login');

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        expect( screen.getByRole('link', { name: 'Login'}).classList ).toContain('active')
    })

    test('Debe mostrar el AboutPage', () => { 
        setup('/about');

        expect( screen.getByText('AboutPage') ).toBeTruthy();
        expect( screen.getByRole('link', { name: 'About'}).classList ).toContain('active')
    })
})