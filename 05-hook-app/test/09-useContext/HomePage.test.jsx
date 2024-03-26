import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage.jsx"
import { UserContext } from "../../src/09-useContext/context/UserContext.jsx"


describe('Pruebas en el HomePage', () => { 
    const setup = (user = null) => 
        render(
            <UserContext.Provider value={{user}} >
                <HomePage />
            </UserContext.Provider>
        )

    const user = { id: 1, name: 'Nikolas' };

    test('Debe mostrar el componente sin el usuario', () => { 
        setup();

        expect( screen.getByLabelText('user').innerHTML ).toBeFalsy();
    })
    
    test('Debe renderear el usuario en el componente', () => { 
        setup(user);
     
        expect( screen.getByLabelText('userId').innerHTML ).toBe(`#${user.id}`);
        expect( screen.getByLabelText('user').innerHTML ).toBe(user.name);
    })

})