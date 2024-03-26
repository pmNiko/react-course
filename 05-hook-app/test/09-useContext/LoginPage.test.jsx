import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext.jsx"
import { LoginPage } from "../../src/09-useContext/LoginPage.jsx"



describe('Pruebas en LoginPage', () => { 
    const setup = ({user, setUser} = {user: null, setUser: null}) => 
        render(
            <UserContext.Provider value={{user, setUser}} >
                <LoginPage />
            </UserContext.Provider>
        )

    const user = {
        id: 14124124,
        name: 'Nikodev',
        email: 'nikodev@gmail.com'
    }
    const setUserMock = jest.fn();

    test('Debe renderear el componente sin el usuario', () => { 
        setup();

        expect( screen.getByRole('heading', { level: 1 } ).innerHTML ).toBe('LoginPage');
        expect( screen.getByLabelText('pre').innerHTML ).toBeFalsy();
        expect( screen.getByRole('button').innerHTML ).toBe('Establecer usuario');        
    })

    test('Debe llamar el setUser cuando hace click en el boton', () => { 
        setup({setUser: setUserMock});

        expect( setUserMock ).not.toHaveBeenCalled();
        
        fireEvent.click( screen.getByRole('button') )
        
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith(user);
    })


    test('Debe de renderear el usuario logueado', () => { 
        setup({user});

        expect( screen.getByLabelText('pre').innerHTML ).toContain(user.id.toString());
        expect( screen.getByLabelText('pre').innerHTML ).toContain(user.name);
    })
})